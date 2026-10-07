/*
 * Help Centre search ranking, shared by the search box (docs.js) and the query test in script/search-test.js.
 * A query is split into words; filler words are dropped, plurals and a few synonyms are folded, and each article
 * scores by where the words appear (title > headings > keywords/description > body). An article must match most
 * of the meaningful words, so "users can't log in" still finds the sign-in guide.
 */
(function (root) {
  'use strict';

  var STOP = ('a an and are as at be but by can cant could did do does doesnt dont for from get got has have how i im ' +
    'in into is isnt it its me my of on or our please should so that the their them there this to too up us was we ' +
    'what when where which who why will with wont would you your yours not no anymore help need want'). split(' ');
  var stop = {};
  STOP.forEach(function (w) { stop[w] = true; });

  // words people type → words the articles use (both are tried)
  var SYN = {
    ad: 'listing', ads: 'listing', advert: 'listing', adverts: 'listing', classified: 'listing', classifieds: 'listing',
    photo: 'image', photos: 'image', picture: 'image', pictures: 'image', pic: 'image', pics: 'image', images: 'image',
    colour: 'color', colours: 'color', colors: 'color',
    login: 'sign', signin: 'sign', logon: 'sign', log: 'sign',
    signup: 'register', registration: 'register',
    cancel: 'cancel', cancellation: 'cancel', unsubscribe: 'cancel',
    delete: 'delete', remove: 'delete', erase: 'delete',
    mail: 'email', emails: 'email', mails: 'email',
    translate: 'translation', translation: 'translation', traduction: 'translation', language: 'language',
    payment: 'pay', payments: 'pay', paying: 'pay', paid: 'pay',
    subscription: 'plan', subscriptions: 'plan', package: 'plan', packages: 'plan', pricing: 'plan', price: 'price',
    down: 'down', offline: 'down', outage: 'down', '504': 'down', '502': 'down', '500': 'error',
    message: 'message', messages: 'message', contact: 'contact', chat: 'message',
    domain: 'domain', dns: 'domain', url: 'domain',
    paywall: 'membership', members: 'member', video: 'video', youtube: 'video',
    image: 'photo', approve: 'moderat', approval: 'moderat', pending: 'moderat', money: 'refund'
  };

  function norm(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’'`]/g, '').replace(/e-mail/g, 'email');
  }
  function stem(w) {
    if (w.length > 4 && /ies$/.test(w)) return w.slice(0, -3) + 'y';
    if (w.length > 3 && /[^s]s$/.test(w)) return w.slice(0, -1);
    return w;
  }
  function terms(q) {
    return norm(q).split(/[^a-z0-9]+/).filter(function (w) { return w && !stop[w]; }).map(function (w) {
      var alts = [stem(w)];
      if (SYN[w] && alts.indexOf(SYN[w]) < 0) alts.push(SYN[w]);
      return alts;
    });
  }
  var ENT = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&#8217;': '’', '&#8220;': '“', '&#8221;': '”', '&nbsp;': ' ' };
  function decode(s) { return (s || '').replace(/&(amp|lt|gt|quot|nbsp|#39|#8217|#8220|#8221);/g, function (m) { return ENT[m]; }); }
  function prepare(index) {
    return index.map(function (d) {
      d.body = decode(d.body);
      d.description = decode(d.description);
      d.title = decode(d.title);
      d._t = norm(d.title);
      d._h = norm(d.headings);
      d._k = norm(d.keywords + ' ' + d.description);
      d._b = norm(d.body);
      return d;
    });
  }
  function hitScore(d, alts) {
    var best = 0;
    alts.forEach(function (w) {
      var s = 0, at = d._t.indexOf(w);
      if (at > -1) s += at === 0 ? 16 : 12;
      if (d._h.indexOf(w) > -1) s += 7;
      if (d._k.indexOf(w) > -1) s += 5;
      if (d._b.indexOf(w) > -1) s += 1 + Math.min(3, d._b.split(w).length - 2);
      if (s > best) best = s;
    });
    return best;
  }
  function run(index, query, limit) {
    var ts = terms(query);
    if (!ts.length) {
      // a query of only common words ("how do I") falls back to plain matching
      ts = norm(query).split(/\s+/).filter(Boolean).map(function (w) { return [w]; });
    }
    if (!ts.length) return [];
    var need = ts.length <= 2 ? ts.length : Math.ceil(ts.length * 0.6);
    return index.map(function (d) {
      var s = 0, matched = 0;
      ts.forEach(function (alts) { var h = hitScore(d, alts); if (h) { matched++; s += h; } });
      if (matched < need) return null;
      return { d: d, s: s + matched * 20, words: ts };
    }).filter(Boolean).sort(function (a, b) { return b.s - a.s; }).slice(0, limit || 12);
  }

  var api = { prepare: prepare, run: run, terms: terms, norm: norm };
  if (typeof module === 'object' && module.exports) module.exports = api; else root.YcSearch = api;
})(this);
