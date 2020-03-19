(window.webpackJsonp = window.webpackJsonp || []).push([
  [705],
  {
    Y9bp: function(e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, '_frontmatter', function() {
          return c;
        }),
        a.d(t, 'default', function() {
          return y;
        });
      a('rGqo'), a('q1tI');
      var n = a('7ljp'),
        o = a('013z');
      a('qKvR');
      function r() {
        return (r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function i(e, t) {
        if (null == e) return {};
        var a,
          n,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              n,
              o = {},
              r = Object.keys(e);
            for (n = 0; n < r.length; n++)
              (a = r[n]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (n = 0; n < r.length; n++)
            (a = r[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = {},
        l = e =>
          function(t) {
            return (
              console.warn(
                'Component ' +
                  e +
                  ' was not imported, exported, or provided by MDXProvider as global scope'
              ),
              Object(n.b)('div', t)
            );
          },
        s = l('PageDescription'),
        p = l('AnchorLinks'),
        b = l('AnchorLink'),
        m = l('Row'),
        u = l('Column'),
        d = l('Caption'),
        g = l('InlineNotification'),
        h = { _frontmatter: c },
        f = o.a;
      function y(e) {
        let { components: t } = e,
          a = i(e, ['components']);
        return Object(n.b)(
          f,
          r({}, h, a, { components: t, mdxType: 'MDXLayout' }),
          Object(n.b)(
            s,
            { mdxType: 'PageDescription' },
            Object(n.b)(
              'p',
              null,
              'Thanks for completing the IBM Carbon tutorial and helping us improve it along the way. If you want to show the world your new skills, you can apply for an IBM Digital Badge.'
            )
          ),
          Object(n.b)(
            p,
            { mdxType: 'AnchorLinks' },
            Object(n.b)(b, { mdxType: 'AnchorLink' }, 'Application form'),
            Object(n.b)(b, { mdxType: 'AnchorLink' }, 'Badge information')
          ),
          Object(n.b)('h2', null, 'Application form'),
          Object(n.b)(
            'p',
            null,
            'Once you complete all five steps of the tutorial, you can apply for an ',
            Object(n.b)(
              'a',
              r(
                { parentName: 'p' },
                {
                  href:
                    'https://www.surveygizmo.com/s3/5163103/IBM-Carbon-Design-System-Developer-Essentials-React-v2',
                }
              ),
              'IBM Digital Badge'
            ),
            '. These badges are available to anybody — not just IBM employees.'
          ),
          Object(n.b)(
            m,
            { mdxType: 'Row' },
            Object(n.b)(
              u,
              { colLg: 8, mdxType: 'Column' },
              Object(n.b)(
                'span',
                {
                  className: 'gatsby-resp-image-wrapper',
                  style: {
                    position: 'relative',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: '1152px',
                  },
                },
                '\n      ',
                Object(n.b)(
                  'span',
                  r(
                    { parentName: 'span' },
                    {
                      className: 'gatsby-resp-image-background-image',
                      style: {
                        paddingBottom: '63.04347826086957%',
                        position: 'relative',
                        bottom: '0',
                        left: '0',
                        backgroundImage:
                          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAABG0lEQVQoz6WSzUrDQBDH+xA+gk+hnsRX8HE86cmTCrZ660HwBeoHIkXBeBAq1DSgQRDRmphNk0zYTTb7MTEm4CnGFOc07M7vP7Oz/07+a2D+V3Qab7FZpR7WqLiCRAVCM2wPF6WJjKgkLAOWUiZCKojQSStYoUD8buWT2H6cZlyWh7KYpQmuxrsnx8P37Vv30HAPDLd343SL/OJtc8rGZY2ugSsSUfef1rdGi/vW6q65vGeudK21HXNp427BcHrVLmo7YyU8MPsTcvbgnkzIqeWfj92BHVxevxyNXq9KWDe9OaY8oSjT/PMjerYdzlSRQ5zxTLTaNjDwIm8GQQihDz4BL82Sef5Z64iCDzOasvkc9uMK/J89c2xU+AIyzezUfsst8gAAAABJRU5ErkJggg==')",
                        backgroundSize: 'cover',
                        display: 'block',
                      },
                    }
                  )
                ),
                '\n  ',
                Object(n.b)(
                  'img',
                  r(
                    { parentName: 'span' },
                    {
                      className: 'gatsby-resp-image-image',
                      alt: 'carbon badge',
                      title: 'carbon badge',
                      src:
                        '/static/df7d368937a22295b5c5039e9882a683/3cbba/carbon-badge.png',
                      srcSet: [
                        '/static/df7d368937a22295b5c5039e9882a683/7fc1e/carbon-badge.png 288w',
                        '/static/df7d368937a22295b5c5039e9882a683/a5df1/carbon-badge.png 576w',
                        '/static/df7d368937a22295b5c5039e9882a683/3cbba/carbon-badge.png 1152w',
                        '/static/df7d368937a22295b5c5039e9882a683/392b1/carbon-badge.png 1472w',
                      ],
                      sizes: '(max-width: 1152px) 100vw, 1152px',
                      style: {
                        width: '100%',
                        height: '100%',
                        margin: '0',
                        verticalAlign: 'middle',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                      },
                      loading: 'lazy',
                    }
                  )
                ),
                '\n    '
              ),
              Object(n.b)(d, { mdxType: 'Caption' }, 'IBM Digital Badge')
            )
          ),
          Object(n.b)(
            'p',
            null,
            'Once you submit the application, please allow a few weeks for issuing the badge. Once the badge is issued, you will be notified and must accept the badge via Acclaim.'
          ),
          Object(n.b)('h2', null, 'Badge information'),
          Object(n.b)('h3', null, 'IBM Design System React Components'),
          Object(n.b)(
            'p',
            null,
            'This badge demonstrates knowledge about Carbon’s React components. To earn the badge:'
          ),
          Object(n.b)(
            'ol',
            null,
            Object(n.b)(
              'li',
              { parentName: 'ol' },
              'Complete steps 1 through 5 of the Carbon React tutorial',
              Object(n.b)(
                'ul',
                { parentName: 'li' },
                Object(n.b)(
                  'li',
                  { parentName: 'ul' },
                  'Step 1. ',
                  Object(n.b)(
                    'a',
                    r({ parentName: 'li' }, { href: '/tutorial/react/step-1' }),
                    'Installing Carbon'
                  )
                ),
                Object(n.b)(
                  'li',
                  { parentName: 'ul' },
                  'Step 2. ',
                  Object(n.b)(
                    'a',
                    r({ parentName: 'li' }, { href: '/tutorial/react/step-2' }),
                    'Building pages'
                  )
                ),
                Object(n.b)(
                  'li',
                  { parentName: 'ul' },
                  'Step 3. ',
                  Object(n.b)(
                    'a',
                    r({ parentName: 'li' }, { href: '/tutorial/react/step-3' }),
                    'Using APIs'
                  )
                ),
                Object(n.b)(
                  'li',
                  { parentName: 'ul' },
                  'Step 4. ',
                  Object(n.b)(
                    'a',
                    r({ parentName: 'li' }, { href: '/tutorial/react/step-4' }),
                    'Creating components'
                  )
                ),
                Object(n.b)(
                  'li',
                  { parentName: 'ul' },
                  'Step 5. ',
                  Object(n.b)(
                    'a',
                    r({ parentName: 'li' }, { href: '/tutorial/react/step-5' }),
                    'Deploying to IBM Cloud'
                  )
                )
              )
            ),
            Object(n.b)(
              'li',
              { parentName: 'ol' },
              'Have approved pull requests for steps 1 through 5 in the ',
              Object(n.b)(
                'a',
                r(
                  { parentName: 'li' },
                  {
                    href:
                      'https://github.com/carbon-design-system/carbon-tutorial',
                  }
                ),
                'carbon-tutorial repository'
              )
            ),
            Object(n.b)(
              'li',
              { parentName: 'ol' },
              'Complete the ',
              Object(n.b)(
                'a',
                r(
                  { parentName: 'li' },
                  {
                    href:
                      'https://www.surveygizmo.com/s3/5163103/IBM-Carbon-Design-System-Developer-Essentials-React-v2',
                  }
                ),
                'badge application'
              )
            )
          ),
          Object(n.b)(
            g,
            { mdxType: 'InlineNotification' },
            Object(n.b)(
              'p',
              null,
              Object(n.b)('strong', { parentName: 'p' }, 'Note:'),
              ' To quickly find your submitted PRs, you can ',
              Object(n.b)(
                'a',
                r(
                  { parentName: 'p' },
                  {
                    href:
                      'https://github.com/carbon-design-system/carbon-tutorial/pulls?utf8=%E2%9C%93&q=author%3Ausername',
                  }
                ),
                'filter by author'
              ),
              ' (e.g. ',
              Object(n.b)(
                'inlineCode',
                { parentName: 'p' },
                'author:${username}'
              ),
              ').'
            )
          ),
          Object(n.b)('h3', null, 'FAQ and help'),
          Object(n.b)('p', null, 'Badge issuer contact: matt.rosno@ibm.com'),
          Object(n.b)(
            'p',
            null,
            'For questions related to your Acclaim badge earner account and profile, as well as issues related to claiming your badge after receiving a notification, go to ',
            Object(n.b)(
              'a',
              r(
                { parentName: 'p' },
                { href: 'http://support.youracclaim.com' }
              ),
              'http://support.youracclaim.com'
            ),
            ' for account issues.'
          ),
          Object(n.b)('h3', null, 'Privacy statement'),
          Object(n.b)(
            'p',
            null,
            'NOTICE: IBM leverages the services of Credly’s Acclaim platform, a 3rd party data processor authorized by IBM and located in the United States, to assist in the administration of the IBM Digital Badge program. In order to issue you an IBM Digital Badge, your personal information (name, email address, and badge earned) will be shared with the Credly’s Acclaim platform. You will receive an email notification from Acclaim with instructions for claiming the badge. Your personal information is used to issue your badge and for program reporting and operational purposes. It will be handled in a manner consistent with IBM privacy practices. The IBM Privacy Statement can be viewed here: ',
            Object(n.b)(
              'a',
              r(
                { parentName: 'p' },
                { href: 'https://www.ibm.com/privacy/us/en/' }
              ),
              'https://www.ibm.com/privacy/us/en/'
            ),
            '. IBM employees can view the IBM Internal Privacy Statement here: ',
            Object(n.b)(
              'a',
              r(
                { parentName: 'p' },
                { href: 'https://w3.ibm.com/w3publisher/w3-privacy-notice' }
              ),
              'https://w3.ibm.com/w3publisher/w3-privacy-notice'
            ),
            '.'
          ),
          Object(n.b)('h3', null, 'Application form'),
          Object(n.b)(
            'p',
            null,
            'To apply for the IBM Digital Badge, please complete the ',
            Object(n.b)(
              'a',
              r(
                { parentName: 'p' },
                {
                  href:
                    'https://www.surveygizmo.com/s3/5163103/IBM-Carbon-Design-System-Developer-Essentials-React-v2',
                }
              ),
              'form and survey'
            ),
            '.'
          )
        );
      }
      y.isMDXComponent = !0;
    },
  },
]);
//# sourceMappingURL=component---src-pages-tutorial-react-wrapping-up-mdx-300161a32390c353b697.js.map
