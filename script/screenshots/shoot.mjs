#!/usr/bin/env node
// Help Centre screenshots of the real admin panel, taken from a local test site with made-up data.
//
//   node script/screenshots/shoot.mjs                 every shot in shots.json
//   node script/screenshots/shoot.mjs dashboard maps  only these
//   node script/screenshots/shoot.mjs --links /oc-panel   print the links on a page (to find a page's address)
//
// It starts PHP's built-in server on the yclas.com code, signs in to the test site as its admin with a one-time
// link, opens each page in headless Chrome and saves assets/img/panel/<name>.webp. See "Screenshots" in README.md
// for the test site and the settings below. No npm packages: Node 22+ and Chrome are enough.
import { spawn, execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DOCS = path.resolve(HERE, '../..');
const env = (k, d) => process.env[k] || d;
const REPO = env('YCLAS_REPO');                       // a checkout of yclas/yclas.com, ideally origin/production
const PHP = env('PHP', 'php');
const PHP_INI = env('PHP_INI');                       // optional php.ini with mysqli, mbstring, gd, intl, curl
const SITE_ID = env('SITE_ID', '995980');             // yc_domains row of the local test site
const SITE_HOST = env('SITE_HOST', 'news.yclas-saas.test');
const PORT = +env('PORT', '8301');
const CHROME = env('CHROME', [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].find(p => fs.existsSync(p)));
const BASE = `http://localhost:${PORT}`;
// 1280 × 860 CSS pixels at 1.25 = the 1600 × 1075 the figure include expects
const VIEW = { width: 1280, height: 860, scale: 1.25 };
const sleep = ms => new Promise(r => setTimeout(r, ms));

if (!REPO || !CHROME) {
  console.error('Set YCLAS_REPO to a yclas.com checkout (and CHROME if Chrome is not in the usual place).');
  process.exit(1);
}
const args = process.argv.slice(2);
const linksOf = args[0] === '--links' ? args[1] || '/oc-panel' : null;
const only = linksOf ? [] : args;
const shots = JSON.parse(fs.readFileSync(path.join(HERE, 'shots.json'), 'utf8'));
const phpArgs = PHP_INI ? ['-c', PHP_INI] : [];

// ---------- PHP ----------
const server = spawn(PHP, [...phpArgs, '-S', `localhost:${PORT}`, '-t', path.join(REPO, 'sites/classifieds/www'),
  path.join(HERE, 'router.php')], {
  env: { ...process.env, SHOTS_HOST: SITE_HOST, SHOTS_BASE: BASE }, stdio: ['ignore', 'ignore', 'pipe'],
});
server.stderr.on('data', d => { if (/Fatal|Parse error/.test(d)) process.stderr.write(d); });
const login = redirect => execFileSync(PHP, [...phpArgs, path.join(HERE, 'login_url.php'), REPO, SITE_ID, BASE, redirect],
  { encoding: 'utf8', env: { ...process.env, MSYS_NO_PATHCONV: '1' } }).trim().split('\n').pop();

// ---------- Chrome over the DevTools protocol ----------
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'yc-docs-shots-'));
const debugPort = 9300 + Math.floor(Math.random() * 400);
const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--no-first-run', '--hide-scrollbars',
  '--force-color-profile=srgb', `--remote-debugging-port=${debugPort}`, `--user-data-dir=${profile}`, 'about:blank']);
let ws, seq = 0;
const pending = {}, events = [];
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++seq;
  pending[id] = d => (d.error ? reject(new Error(method + ': ' + d.error.message)) : resolve(d.result));
  ws.send(JSON.stringify({ id, method, params }));
});
const run = async (expr, arg) => {
  const code = typeof expr === 'function' ? `(${expr})(${JSON.stringify(arg ?? null)})` : expr;
  const r = await send('Runtime.evaluate', { expression: code, returnByValue: true, awaitPromise: true });
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
  return r.result.value;
};
async function go(url) {
  events.length = 0;
  const t = Date.now();
  await send('Page.navigate', { url: url.startsWith('http') ? url : BASE + url });
  for (let i = 0; i < 480 && !events.includes('Page.loadEventFired'); i++) await sleep(250);
  if (process.env.VERBOSE) console.log(`  loaded ${url.slice(0, 60)} in ${((Date.now() - t) / 1000).toFixed(1)} s`);
  await sleep(600);
}

// ---------- What every shot gets ----------
// staging bar, support chat, cookie bar; local addresses read as the customer's own domain
const TIDY = `
.yp-staging-bar, .yp-top .yp-pill--info, #yp-chat-frame, .yp-chat-frame, .ad2hs-prompt,
#cookie-bar, .cookie-bar, .cc-window, .yp-unsaved { display: none !important; }
*, *::before, *::after { transition: none !important; animation: none !important; caret-color: transparent !important; }
.yc-shot-mark { outline: 3px solid #2B59F0 !important; outline-offset: 3px !important; border-radius: 6px; }`;
function tidy({ css, base, host }) {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
  const local = new RegExp(base.replace(/[.:/]/g, '\\$&') + '|https?://' + host.replace(/\./g, '\\.') + '|' + host.replace(/\./g, '\\.'), 'g');
  const swap = s => s.replace(local, m => (m.startsWith('http') ? 'https://yourdomain.com' : 'yourdomain.com'));
  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n; (n = walk.nextNode());) if (local.test(n.nodeValue)) n.nodeValue = swap(n.nodeValue);
  document.querySelectorAll('input, textarea').forEach(i => { if (local.test(i.value)) i.value = swap(i.value); });
  // fixed boxes along the bottom (cookie notice, chat launcher, "unsaved changes") hide what the reader needs
  document.querySelectorAll('body *').forEach(el => {
    const s = getComputedStyle(el);
    if ((s.position === 'fixed') && el.getBoundingClientRect().top > innerHeight * 0.6 &&
        /cookie|support|chat|unsaved/i.test((el.innerText || '') + ' ' + (el.getAttribute('aria-label') || '') + ' ' + el.className)) el.remove();
  });
}
function rectOf(sel) {
  const el = document.querySelector(sel);
  if (!el) return null;
  el.scrollIntoView({ block: 'start' });
  scrollBy(0, -16);
  const r = el.getBoundingClientRect();
  return { x: r.left + scrollX, y: r.top + scrollY, width: r.width, height: r.height };
}

try {
  for (let i = 0; i < 80; i++) { try { await (await fetch(BASE + '/robots.txt')).text(); break; } catch { await sleep(250); } }
  let target;
  for (let i = 0; i < 80 && !target; i++) {
    await sleep(250);
    try { target = (await (await fetch(`http://127.0.0.1:${debugPort}/json`)).json()).find(t => t.type === 'page'); } catch {}
  }
  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise(r => (ws.onopen = r));
  ws.onmessage = m => { const d = JSON.parse(m.data); if (d.id && pending[d.id]) { pending[d.id](d); delete pending[d.id]; } else if (d.method) events.push(d.method); };
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: VIEW.width, height: VIEW.height, deviceScaleFactor: VIEW.scale, mobile: false });
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: 'light' }] });

  await go(login('/oc-panel'));
  if (!/oc-panel/.test(await run('location.pathname'))) throw new Error('The one-time login did not reach the admin panel.');

  if (linksOf) {
    await go(linksOf);
    const links = await run(() => [...new Set([...document.querySelectorAll('a[href]')]
      .map(a => (a.innerText.trim().replace(/\s+/g, ' ').slice(0, 50) + '  ' + a.getAttribute('href')))
      .filter(t => /oc-panel|  #/.test(t)))]);
    console.log(links.join('\n'));
  }

  for (const [name, shot] of Object.entries(shots)) {
    if (linksOf || (only.length && !only.includes(name))) continue;
    await go(shot.url);
    await run(tidy, { css: TIDY, base: BASE, host: SITE_HOST });
    for (const step of shot.steps || []) { await run(step); await sleep(400); }
    for (const sel of shot.mark || []) await run(s => document.querySelectorAll(s).forEach(e => e.classList.add('yc-shot-mark')), sel);
    await run(() => document.fonts.ready.then(() => true));
    await sleep(shot.wait || 500); // pages whose tables load afterwards set "wait" (ms)
    let clip;
    if (shot.selector) {
      const r = await run(rectOf, shot.selector);
      if (!r) throw new Error(`${name}: nothing matches ${shot.selector}`);
      const pad = shot.pad ?? 16;
      clip = { x: Math.max(0, r.x - pad), y: Math.max(0, r.y - pad), width: r.width + pad * 2, height: Math.min(r.height + pad * 2, shot.maxHeight || 2000), scale: 1 };
    } else {
      const y = shot.scrollTo ? (await run(rectOf, shot.scrollTo))?.y ?? 0 : 0;
      clip = { x: 0, y: Math.max(0, y - 16), width: VIEW.width, height: shot.height || VIEW.height, scale: 1 };
    }
    const r = await send('Page.captureScreenshot', { format: 'webp', quality: 82, clip, captureBeyondViewport: true });
    const out = path.join(DOCS, 'assets/img/panel', name + '.webp');
    fs.writeFileSync(out, Buffer.from(r.data, 'base64'));
    console.log(`${name}.webp  ${Math.round(clip.width * VIEW.scale)} × ${Math.round(clip.height * VIEW.scale)}`);
  }
} catch (e) {
  console.error(e.message);
  process.exitCode = 1;
} finally {
  ws?.close();
  chrome.kill();
  server.kill();
  // Chrome's helper processes can keep the event loop alive on Windows
  setTimeout(() => { try { fs.rmSync(profile, { recursive: true, force: true }); } catch {} process.exit(); }, 800);
}
