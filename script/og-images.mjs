#!/usr/bin/env node
// Social preview images (1200 × 630) for each section, in the style of assets/img/og-help-centre.png:
//   node script/og-images.mjs        writes assets/img/og/<section id>.png from _data/sections.yml
// Articles use their section's image (_layouts/default.html). Needs Node 22+ and Chrome; fonts come from Google Fonts.
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DOCS = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHROME = process.env.CHROME || ['C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome'].find(p => fs.existsSync(p));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

// sections.yml is a flat list of "- id:" blocks with one-line values: enough to read without a YAML package
const sections = [];
for (const line of fs.readFileSync(path.join(DOCS, '_data/sections.yml'), 'utf8').split(/\r?\n/)) {
  const m = line.match(/^(- |  )(id|title|description|icon): (.*)$/);
  if (!m) continue;
  if (m[1] === '- ') sections.push({});
  sections[sections.length - 1][m[2]] = m[3].replace(/^'(.*)'$/, '$1').replace(/''/g, "'");
}
const logo = fs.readFileSync(path.join(DOCS, 'assets/img/yclas_logo_long_white.svg'), 'utf8');

const page = s => `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Geist:wght@400;500&display=block" rel="stylesheet">
<style>
  html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; }
  body { background: #0E1116; color: #fff; font-family: Geist, sans-serif; position: relative; }
  body::before { content: ""; position: absolute; inset: 0;
    background: radial-gradient(700px 360px at 92% -8%, rgba(43, 89, 240, .55), transparent 70%),
                radial-gradient(500px 260px at 0% 110%, rgba(43, 89, 240, .25), transparent 70%); }
  .in { position: absolute; inset: 72px 80px; display: flex; flex-direction: column; }
  .logo svg { height: 50px; width: auto; }
  .eyebrow { margin-top: auto; display: flex; align-items: center; gap: 16px; font: 500 26px Geist; color: #A9BDFF; }
  .icon { width: 56px; height: 56px; border-radius: 14px; background: #2B59F0; display: grid; place-items: center; }
  .icon svg { width: 32px; height: 32px; fill: none; stroke: #fff; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
  h1 { margin: 22px 0 18px; font: 800 ${s.title.length > 22 ? 66 : 80}px/1.02 "Bricolage Grotesque"; letter-spacing: -0.02em; max-width: 1000px; }
  p { margin: 0; font-size: 30px; line-height: 1.35; color: #C3CAD6; max-width: 960px; }
</style></head><body><div class="in">
  <div class="logo">${logo}</div>
  <div class="eyebrow"><span class="icon"><svg viewBox="0 0 24 24">${s.icon}</svg></span>Help Centre</div>
  <h1>${esc(s.title)}</h1>
  <p>${esc(s.description)}</p>
</div></body></html>`;

const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'yc-og-'));
const port = 9500 + Math.floor(Math.random() * 300);
const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--remote-debugging-port=${port}`, `--user-data-dir=${prof}`, 'about:blank']);
let t;
for (let i = 0; i < 80 && !t; i++) { await sleep(250); try { t = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find(x => x.type === 'page'); } catch {} }
const ws = new WebSocket(t.webSocketDebuggerUrl);
await new Promise(r => (ws.onopen = r));
let id = 0; const wait = {};
ws.onmessage = m => { const d = JSON.parse(m.data); if (d.id && wait[d.id]) { wait[d.id](d.result); delete wait[d.id]; } };
const send = (method, params = {}) => new Promise(r => { const i = ++id; wait[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
const out = path.join(DOCS, 'assets/img/og');
fs.mkdirSync(out, { recursive: true });
const tmp = path.join(prof, 'og.html');
for (const s of sections) {
  fs.writeFileSync(tmp, page(s));
  await send('Page.navigate', { url: 'file:///' + tmp.replace(/\\/g, '/') });
  await sleep(1500);
  await send('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true });
  const r = await send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: 1200, height: 630, scale: 1 } });
  fs.writeFileSync(path.join(out, s.id + '.png'), Buffer.from(r.data, 'base64'));
  console.log(`og/${s.id}.png`);
}
ws.close();
chrome.kill();
setTimeout(() => { try { fs.rmSync(prof, { recursive: true, force: true }); } catch {} process.exit(); }, 500);
