!(function() {
  'use strict';
  var t = window.fathom.q || [],
    e = {
      siteId: '',
      spa: !1,
      trackerUrl: 'https://img3.usefathom.com/collector',
    };
  const n = {
    set: o,
    trackPageview: function(t) {
      r({}, 'pageview');
    },
    trackGoal: function(t, e) {
      r({ gcode: t, gval: e }, 'goal');
    },
    setTrackerUrl: function(t) {
      return (
        o('trackerUrl', 'https://img3.usefathom.com'),
        'https://img3.usefathom.com'
      );
    },
  };
  function o(t, n) {
    if (((e[t] = n), 'spa' == t))
      if ('pushstate' == n && void 0 !== history) {
        var o = history.pushState;
        history.pushState = function() {
          var t = o.apply(history, arguments);
          return (
            window.dispatchEvent(new Event('pushstate')),
            window.dispatchEvent(new Event('locationchange')),
            t
          );
        };
        var a = history.replaceState;
        (history.replaceState = function() {
          var t = a.apply(history, arguments);
          return (
            window.dispatchEvent(new Event('replacestate')),
            window.dispatchEvent(new Event('locationchange')),
            t
          );
        }),
          window.addEventListener('popstate', function() {
            window.dispatchEvent(new Event('locationchange'));
          }),
          window.addEventListener('locationchange', function() {
            fathom('trackPageview');
          });
      } else
        'hash' == n &&
          window.addEventListener('hashchange', function() {
            fathom('trackPageview');
          });
  }
  function a(t) {
    return (
      '?' +
      Object.keys(t)
        .map(function(e) {
          return encodeURIComponent(e) + '=' + encodeURIComponent(t[e]);
        })
        .join('&')
    );
  }
  function r(t, n) {
    if (
      ((t = t || {}),
      'visibilityState' in document && 'prerender' === document.visibilityState)
    )
      return;
    if (
      /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(
        navigator.userAgent
      )
    )
      return;
    if (null === document.body)
      return void document.addEventListener('DOMContentLoaded', () => {
        r(t, n);
      });
    var o = window.location;
    if ('' === o.host) return;
    var i = document.querySelector('link[rel="canonical"][href]');
    if (i) {
      var c = document.createElement('a');
      (c.href = i.href), (o = c);
    }
    var s = t.path || o.pathname + o.search;
    s || (s = '/'),
      'hash' == e.spa &&
        '' !== window.location.hash.substr(1) &&
        (s = '/' + window.location.hash);
    var d = t.hostname || o.protocol + '//' + o.hostname,
      h = t.referrer || '';
    document.referrer.indexOf(d) < 0 && (h = document.referrer);
    const l = {
      p: s,
      h: d,
      r: h,
      sid: e.siteId,
      tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    if ('goal' == n)
      (l.gcode = t.gcode),
        (l.gval = t.gval),
        navigator.sendBeacon(
          'https://img3.usefathom.com/collector/event' + a(l)
        );
    else {
      var u = document.getElementById('fathom-script');
      u &&
        ((l.dash = u.src.replace('/tracker.js', '')),
        l.dash.indexOf('cdn.usefathom.com') > -1 && (l.dash = null));
      var m = e.trackerUrl + '/scooby',
        p = document.createElement('img');
      p.setAttribute('alt', ''),
        p.setAttribute('aria-hidden', 'true'),
        (p.style.position = 'absolute'),
        (p.src = m + a(l)),
        p.addEventListener('load', function() {
          p.parentNode.removeChild(p);
        }),
        document.body.appendChild(p);
    }
  }
  (window.fathom = function() {
    var t = [].slice.call(arguments),
      e = t.shift();
    n[e].apply(this, t);
  }),
    t.forEach(t => fathom.apply(this, t));
})();
