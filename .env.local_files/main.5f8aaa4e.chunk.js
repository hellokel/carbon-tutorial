(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    121: function(e, a, t) {
      e.exports = t(199);
    },
    156: function(e, a, t) {},
    157: function(e, a, t) {},
    199: function(e, a, t) {
      'use strict';
      t.r(a);
      t(122), t(135), t(138), t(142), t(145);
      var n = t(1),
        r = t.n(n),
        l = t(41),
        o = t.n(l),
        i = (t(156), t(88)),
        c = t(89),
        s = t(115),
        d = t(90),
        m = t(116),
        u = (t(157), t(13)),
        g = t(93),
        b = t.n(g),
        p = t(94),
        E = t.n(p),
        h = t(95),
        f = t.n(h),
        v = t(27),
        x = function() {
          return r.a.createElement(
            u.Header,
            { 'aria-label': 'Carbon Tutorial' },
            r.a.createElement(u.SkipToContent, null),
            r.a.createElement(
              u.HeaderName,
              { element: v.b, to: '/', prefix: 'IBM' },
              'Carbon Tutorial'
            ),
            r.a.createElement(
              u.HeaderNavigation,
              { 'aria-label': 'Carbon Tutorial' },
              r.a.createElement(
                u.HeaderMenuItem,
                { element: v.b, to: '/repos' },
                'Repositories'
              )
            ),
            r.a.createElement(
              u.HeaderGlobalBar,
              null,
              r.a.createElement(
                u.HeaderGlobalAction,
                { 'aria-label': 'Notifications' },
                r.a.createElement(b.a, null)
              ),
              r.a.createElement(
                u.HeaderGlobalAction,
                { 'aria-label': 'User Avatar' },
                r.a.createElement(E.a, null)
              ),
              r.a.createElement(
                u.HeaderGlobalAction,
                { 'aria-label': 'App Switcher' },
                r.a.createElement(f.a, null)
              )
            )
          );
        },
        w = t(23),
        y = t(210),
        N = t(211),
        C = t(212),
        _ = t(216),
        k = t(217);
      var O = function(e) {
          return r.a.createElement(
            'section',
            { className: 'bx--row '.concat(e.className, ' info-section') },
            r.a.createElement(
              'div',
              { className: 'bx--col-md-8 bx--col-lg-4 bx--col-xlg-3' },
              r.a.createElement(
                'h3',
                { className: 'info-section__heading' },
                e.heading
              )
            ),
            e.children
          );
        },
        j = function(e) {
          var a = (function(e) {
            var a = e.split(' '),
              t = a.pop();
            return [a.join(' '), t];
          })(e.heading);
          return r.a.createElement(
            'div',
            {
              className:
                'info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1',
            },
            r.a.createElement(
              'h4',
              { className: 'info-card__heading' },
              ''.concat(a[0], ' '),
              r.a.createElement('strong', null, a[1])
            ),
            r.a.createElement('p', { className: 'info-card__body' }, e.body),
            e.icon
          );
        },
        A = t(98),
        T = t.n(A),
        S = t(96),
        D = t.n(S),
        H = t(97),
        I = t.n(H),
        B = { selected: 0, triggerHref: '#', role: 'navigation' },
        P = { href: '#', role: 'presentation', tabIndex: 0 },
        z = function() {
          return r.a.createElement(
            'div',
            { className: 'bx--grid bx--grid--full-width landing-page' },
            r.a.createElement(
              'div',
              { className: 'bx--row landing-page__banner' },
              r.a.createElement(
                'div',
                { className: 'bx--col-lg-16' },
                r.a.createElement(
                  y.a,
                  { noTrailingSlash: !0, 'aria-label': 'Page navigation' },
                  r.a.createElement(
                    N.a,
                    null,
                    r.a.createElement('a', { href: '/' }, 'Getting started')
                  )
                ),
                r.a.createElement(
                  'h1',
                  { className: 'landing-page__heading' },
                  'Design & build with Carbon'
                )
              )
            ),
            r.a.createElement(
              'div',
              { className: 'bx--row landing-page__r2' },
              r.a.createElement(
                'div',
                { className: 'bx--col bx--no-gutter' },
                r.a.createElement(
                  C.a,
                  Object.assign({}, B, { 'aria-label': 'Tab navigation' }),
                  r.a.createElement(
                    _.a,
                    Object.assign({}, P, { label: 'About' }),
                    r.a.createElement(
                      'div',
                      {
                        className:
                          'bx--grid bx--grid--no-gutter bx--grid--full-width',
                      },
                      r.a.createElement(
                        'div',
                        { className: 'bx--row landing-page__tab-content' },
                        r.a.createElement(
                          'div',
                          { className: 'bx--col-md-4 bx--col-lg-7' },
                          r.a.createElement(
                            'h2',
                            { className: 'landing-page__subheading' },
                            'What is Carbon?'
                          ),
                          r.a.createElement(
                            'p',
                            { className: 'landing-page__p' },
                            'Carbon is IBM\u2019s open-source design system for digital products and experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.'
                          ),
                          r.a.createElement(k.a, null, 'Learn more')
                        ),
                        r.a.createElement(
                          'div',
                          {
                            className:
                              'bx--col-md-4 bx--offset-lg-1 bx--col-lg-8',
                          },
                          r.a.createElement('img', {
                            className: 'landing-page__illo',
                            src: ''.concat('', '/tab-illo.png'),
                            alt: 'Carbon illustration',
                          })
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    _.a,
                    Object.assign({}, P, { label: 'Design' }),
                    r.a.createElement(
                      'div',
                      {
                        className:
                          'bx--grid bx--grid--no-gutter bx--grid--full-width',
                      },
                      r.a.createElement(
                        'div',
                        { className: 'bx--row landing-page__tab-content' },
                        r.a.createElement(
                          'div',
                          { className: 'bx--col-lg-16' },
                          'Rapidly build beautiful and accessible experiences. The Carbon kit contains all resources you need to get started.'
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    _.a,
                    Object.assign({}, P, { label: 'Develop' }),
                    r.a.createElement(
                      'div',
                      {
                        className:
                          'bx--grid bx--grid--no-gutter bx--grid--full-width',
                      },
                      r.a.createElement(
                        'div',
                        { className: 'bx--row landing-page__tab-content' },
                        r.a.createElement(
                          'div',
                          { className: 'bx--col-lg-16' },
                          'Carbon provides styles and components in Vanilla, React, Angular, and Vue for anyone building on the web.'
                        )
                      )
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              O,
              { heading: 'The Principles', className: 'landing-page__r3' },
              r.a.createElement(j, {
                heading: 'Carbon is Open',
                body:
                  "It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute.",
                icon: r.a.createElement(D.a, null),
              }),
              r.a.createElement(j, {
                heading: 'Carbon is Modular',
                body:
                  "Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user.",
                icon: r.a.createElement(I.a, null),
              }),
              r.a.createElement(j, {
                heading: 'Carbon is Consistent',
                body:
                  'Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences.',
                icon: r.a.createElement(T.a, null),
              })
            )
          );
        },
        U = t(50),
        L = t(117),
        R = t(99),
        G = t(214),
        M = t(64),
        W = t(62),
        q = t(68),
        F = t(70),
        J = t(65),
        V = t(69),
        Q = t(63),
        Y = t(66),
        $ = t(22),
        K = t(67),
        X = function(e) {
          var a = e.rows,
            t = e.headers,
            n = function(e) {
              var t = a.find(function(a) {
                return a.id === e;
              });
              return t ? t.description : '';
            };
          return r.a.createElement(G.a, {
            rows: a,
            headers: t,
            render: function(e) {
              var a = e.rows,
                t = e.headers,
                l = e.getHeaderProps,
                o = e.getRowProps,
                i = e.getTableProps;
              return r.a.createElement(
                M.a,
                {
                  title: 'Carbon Repositories',
                  description: 'A collection of public Carbon repositories.',
                },
                r.a.createElement(
                  W.a,
                  i(),
                  r.a.createElement(
                    q.a,
                    null,
                    r.a.createElement(
                      F.a,
                      null,
                      r.a.createElement(J.a, null),
                      t.map(function(e) {
                        return r.a.createElement(
                          V.a,
                          l({ header: e }),
                          e.header
                        );
                      })
                    )
                  ),
                  r.a.createElement(
                    Q.a,
                    null,
                    a.map(function(e) {
                      return r.a.createElement(
                        r.a.Fragment,
                        { key: e.id },
                        r.a.createElement(
                          Y.a,
                          o({ row: e }),
                          e.cells.map(function(e) {
                            return r.a.createElement(
                              $.a,
                              { key: e.id },
                              e.value
                            );
                          })
                        ),
                        r.a.createElement(
                          K.a,
                          { colSpan: t.length + 1 },
                          r.a.createElement('p', null, n(e.id))
                        )
                      );
                    })
                  )
                )
              );
            },
          });
        },
        Z = t(48),
        ee = t(47),
        ae = t(201),
        te = t(213),
        ne = t(215);
      function re() {
        var e = Object(R.a)([
          '\n  query REPO_QUERY {\n    # Let\'s use carbon as our organization\n    organization(login: "carbon-design-system") {\n      # We\'ll grab all the repositories in one go. To load more resources\n      # continuously, see the advanced topics.\n      repositories(first: 75, orderBy: { field: UPDATED_AT, direction: DESC }) {\n        totalCount\n        nodes {\n          url\n          homepageUrl\n          issues(filterBy: { states: OPEN }) {\n            totalCount\n          }\n          stargazers {\n            totalCount\n          }\n          releases(first: 1) {\n            totalCount\n            nodes {\n              name\n            }\n          }\n          name\n          updatedAt\n          createdAt\n          description\n          id\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (re = function() {
            return e;
          }),
          e
        );
      }
      var le = Object(Z.b)(re()),
        oe = [
          { key: 'name', header: 'Name' },
          { key: 'createdAt', header: 'Created' },
          { key: 'updatedAt', header: 'Updated' },
          { key: 'issueCount', header: 'Open Issues' },
          { key: 'stars', header: 'Stars' },
          { key: 'links', header: 'Links' },
        ],
        ie = function(e) {
          var a = e.url,
            t = e.homepageUrl;
          return r.a.createElement(
            'ul',
            { style: { display: 'flex' } },
            r.a.createElement(
              'li',
              null,
              r.a.createElement(ae.a, { href: a }, 'GitHub')
            ),
            t &&
              r.a.createElement(
                'li',
                null,
                r.a.createElement('span', null, '\xa0|\xa0'),
                r.a.createElement(ae.a, { href: t }, 'Homepage')
              )
          );
        },
        ce = function() {
          var e = Object(n.useState)(0),
            a = Object(U.a)(e, 2),
            t = a[0],
            l = a[1],
            o = Object(n.useState)(0),
            i = Object(U.a)(o, 2),
            c = i[0],
            s = i[1],
            d = Object(n.useState)(10),
            m = Object(U.a)(d, 2),
            u = m[0],
            g = m[1];
          return r.a.createElement(
            'div',
            {
              className:
                'bx--grid bx--grid--full-width bx--grid--no-gutter repo-page',
            },
            r.a.createElement(
              'div',
              { className: 'bx--row repo-page__r1' },
              r.a.createElement(
                'div',
                { className: 'bx--col-lg-16' },
                r.a.createElement(ee.b, { query: le }, function(e) {
                  var a = e.loading,
                    n = e.error,
                    o = e.data.organization;
                  if (a)
                    return r.a.createElement(te.a, {
                      columnCount: oe.length + 1,
                      rowCount: 10,
                      headers: oe,
                    });
                  if (n) return 'Error! '.concat(n.message);
                  var i = o.repositories;
                  l(i.totalCount);
                  var d = (function(e) {
                    return e.map(function(e) {
                      return Object(
                        L.a
                      )({}, e, { key: e.id, stars: e.stargazers.totalCount, issueCount: e.issues.totalCount, createdAt: new Date(e.createdAt).toLocaleDateString(), updatedAt: new Date(e.updatedAt).toLocaleDateString(), links: r.a.createElement(ie, { url: e.url, homepageUrl: e.homepageUrl }) });
                    });
                  })(i.nodes);
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(X, {
                      headers: oe,
                      rows: d.slice(c, c + u),
                    }),
                    r.a.createElement(ne.a, {
                      totalItems: t,
                      backwardText: 'Previous page',
                      forwardText: 'Next page',
                      pageSize: u,
                      pageSizes: [5, 10, 15, 25],
                      itemsPerPageText: 'Items per page',
                      onChange: function(e) {
                        var a = e.page,
                          t = e.pageSize;
                        t !== u && g(t), s(t * (a - 1));
                      },
                    })
                  );
                })
              )
            )
          );
        },
        se = (function(e) {
          function a() {
            return (
              Object(i.a)(this, a),
              Object(s.a)(this, Object(d.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(a, e),
            Object(c.a)(a, [
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(x, null),
                    r.a.createElement(
                      u.Content,
                      null,
                      r.a.createElement(
                        w.c,
                        null,
                        r.a.createElement(w.a, {
                          exact: !0,
                          path: '/',
                          component: z,
                        }),
                        r.a.createElement(w.a, {
                          path: '/repos',
                          component: ce,
                        })
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var de = new Z.a({
        uri: 'https://api.github.com/graphql',
        headers: {
          authorization: 'Bearer '.concat(
            'e424e487d11d3b14e2d26133545472bbf068b83b'
          ),
        },
      });
      o.a.render(
        r.a.createElement(
          ee.a,
          { client: de },
          r.a.createElement(v.a, null, r.a.createElement(se, null))
        ),
        document.getElementById('root')
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
  },
  [[121, 1, 2]],
]);
//# sourceMappingURL=main.5f8aaa4e.chunk.js.map
