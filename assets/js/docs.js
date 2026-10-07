/* Yclas Help Centre: theme toggle, mobile navigation, "On this page", heading links and search. No dependencies. */
(function () {
  'use strict';
  var root = document.documentElement;
  var body = document.body;

  /* ---------- Light / dark ---------- */
  function currentTheme() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('yc-docs-theme', next); } catch (e) {}
    });
  });

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.querySelector('[data-nav-toggle]');
  function setNav(open) {
    body.classList.toggle('nav-open', open);
    if (navToggle) navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (navToggle) {
    if (!document.getElementById('sidebar')) navToggle.hidden = true;
    navToggle.addEventListener('click', function () { setNav(!body.classList.contains('nav-open')); });
  }
  document.querySelectorAll('[data-nav-close]').forEach(function (el) {
    el.addEventListener('click', function () { setNav(false); });
  });
  var current = document.querySelector('.sidebar a[aria-current="page"]');
  var sidebar = document.getElementById('sidebar');
  if (current && sidebar) {
    // centre the current article in the sidebar without scrolling the page itself
    sidebar.scrollTop = current.offsetTop - sidebar.clientHeight / 2;
  }

  /* ---------- Copy buttons on code blocks ---------- */
  document.querySelectorAll('.prose pre').forEach(function (pre) {
    var wrap = document.createElement('div');
    wrap.className = 'code-wrap';
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.addEventListener('click', function () {
      var text = pre.innerText.replace(/\n$/, '');
      var done = function () { btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = 'Copy'; }, 1500); };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () {});
    });
    wrap.appendChild(btn);
  });

  /* ---------- Heading anchors and "On this page" ---------- */
  var prose = document.querySelector('.prose');
  var toc = document.querySelector('[data-toc]');
  if (prose) {
    var heads = prose.querySelectorAll('h2[id], h3[id]');
    var list = toc ? toc.querySelector('ul') : null;
    var links = [];
    heads.forEach(function (h) {
      var a = document.createElement('a');
      a.className = 'anchor';
      a.href = '#' + h.id;
      a.setAttribute('aria-label', 'Link to this section');
      a.textContent = '#';
      h.appendChild(a);
      if (list) {
        var li = document.createElement('li');
        li.className = h.tagName === 'H3' ? 'lvl3' : 'lvl2';
        var l = document.createElement('a');
        l.href = '#' + h.id;
        l.textContent = h.textContent.replace(/#$/, '').trim();
        li.appendChild(l);
        list.appendChild(li);
        links.push({ head: h, link: l });
      }
    });
    if (toc && links.length >= 2) {
      toc.hidden = false;
      var spy = function () {
        var y = window.scrollY + 120, active = links[0];
        links.forEach(function (x) { if (x.head.offsetTop <= y) active = x; });
        links.forEach(function (x) { x.link.classList.toggle('is-active', x === active); });
      };
      window.addEventListener('scroll', spy, { passive: true });
      spy();
    }
  }

  /* ---------- Search ---------- */
  var dialog = document.querySelector('[data-search]');
  if (!dialog) return;
  var input = dialog.querySelector('[data-search-input]');
  var results = dialog.querySelector('[data-search-results]');
  var empty = dialog.querySelector('[data-search-empty]');
  var index = null, loading = null, selected = -1, lastFocus = null;

  var S = window.YcSearch;

  function load() {
    if (loading) return loading;
    loading = fetch('/search.json').then(function (r) { return r.json(); }).then(function (data) {
      index = S.prepare(data);
      return index;
    }).catch(function () { index = []; return index; });
    return loading;
  }
  function esc(s) { return (s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function highlight(text, words) {
    var out = esc(text);
    words.forEach(function (w) {
      if (w.length < 3) return;
      out = out.replace(new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>');
    });
    return out;
  }
  function snippet(d, words) {
    var b = d.body || '', lb = S.norm(b), at = -1;
    for (var i = 0; i < words.length && at < 0; i++) at = lb.indexOf(words[i]);
    if (at < 0) return d.description || b.slice(0, 120);
    var start = Math.max(0, at - 50);
    return (start ? '…' : '') + b.slice(start, start + 140).trim() + '…';
  }
  function render() {
    var q = input.value.trim();
    selected = -1;
    if (!q) { results.innerHTML = ''; empty.hidden = true; return; }
    var hits = S.run(index || [], q, 12);
    var words = [];
    S.terms(q).forEach(function (alts) { words = words.concat(alts); });
    empty.hidden = hits.length > 0;
    results.innerHTML = hits.map(function (x, i) {
      return '<li role="option" id="sr-' + i + '"><a href="/' + x.d.url + '/">' +
        '<small>' + esc(x.d.section) + '</small><strong>' + highlight(x.d.title, words) + '</strong>' +
        '<span>' + highlight(snippet(x.d, words), words) + '</span></a></li>';
    }).join('');
    if (hits.length) move(0);
  }
  function move(i) {
    var items = results.querySelectorAll('li');
    if (!items.length) return;
    selected = (i + items.length) % items.length;
    items.forEach(function (li, n) { li.setAttribute('aria-selected', n === selected ? 'true' : 'false'); });
    input.setAttribute('aria-activedescendant', items[selected].id);
    items[selected].scrollIntoView({ block: 'nearest' });
  }
  function open() {
    lastFocus = document.activeElement;
    dialog.hidden = false;
    body.style.overflow = 'hidden';
    input.focus();
    input.select();
    load().then(render);
  }
  function close() {
    dialog.hidden = true;
    body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.querySelectorAll('[data-search-open]').forEach(function (b) { b.addEventListener('click', open); });
  dialog.querySelectorAll('[data-search-close]').forEach(function (b) { b.addEventListener('click', close); });
  input.addEventListener('input', function () { if (index) render(); else load().then(render); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); move(selected + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); move(selected - 1); }
    else if (e.key === 'Enter') {
      var a = results.querySelector('li[aria-selected="true"] a');
      if (a) { e.preventDefault(); window.location.href = a.href; }
    }
  });
  document.addEventListener('keydown', function (e) {
    var t = e.target, typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
    if (e.key === 'Escape' && !dialog.hidden) { close(); return; }
    if (e.key === 'Escape' && body.classList.contains('nav-open')) { setNav(false); return; }
    if (!typing && dialog.hidden && (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'))) {
      e.preventDefault();
      open();
    }
  });
  // ?q=… opens search pre-filled (used by the 404 page)
  var q = new URLSearchParams(window.location.search).get('q');
  if (q) { input.value = q; open(); }
})();
