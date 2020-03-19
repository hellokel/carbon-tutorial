(window.webpackJsonp = window.webpackJsonp || []).push([
  [677],
  {
    pfKO: function(e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, '_frontmatter', function() {
          return r;
        }),
        a.d(t, 'default', function() {
          return h;
        });
      a('rGqo'), a('q1tI');
      var A = a('7ljp'),
        s = a('QH4P');
      a('qKvR');
      function i() {
        return (i =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var A in a)
                Object.prototype.hasOwnProperty.call(a, A) && (e[A] = a[A]);
            }
            return e;
          }).apply(this, arguments);
      }
      function n(e, t) {
        if (null == e) return {};
        var a,
          A,
          s = (function(e, t) {
            if (null == e) return {};
            var a,
              A,
              s = {},
              i = Object.keys(e);
            for (A = 0; A < i.length; A++)
              (a = i[A]), t.indexOf(a) >= 0 || (s[a] = e[a]);
            return s;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (A = 0; A < i.length; A++)
            (a = i[A]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (s[a] = e[a]));
        }
        return s;
      }
      const r = {},
        c = e =>
          function(t) {
            return (
              console.warn(
                'Component ' +
                  e +
                  ' was not imported, exported, or provided by MDXProvider as global scope'
              ),
              Object(A.b)('div', t)
            );
          },
        o = c('FeatureCard'),
        g = c('ArtDirection'),
        d = c('Row'),
        b = c('Column'),
        l = c('ResourceCard'),
        p = c('MdxIcon'),
        m = c('ArticleCard'),
        f = { _frontmatter: r },
        u = s.a;
      function h(e) {
        let { components: t } = e,
          a = n(e, ['components']);
        return Object(A.b)(
          u,
          i({}, f, a, { components: t, mdxType: 'MDXLayout' }),
          Object(A.b)(
            o,
            {
              color: 'dark',
              href: '/get-started/design',
              subTitle: 'Start',
              title: 'Designing',
              actionIcon: 'arrowRight',
              className: 'homepage-feature',
              mdxType: 'FeatureCard',
            },
            Object(A.b)(
              g,
              { mdxType: 'ArtDirection' },
              Object(A.b)(
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
                Object(A.b)(
                  'span',
                  i(
                    { parentName: 'span' },
                    {
                      className: 'gatsby-resp-image-background-image',
                      style: {
                        paddingBottom: '50%',
                        position: 'relative',
                        bottom: '0',
                        left: '0',
                        backgroundImage:
                          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApElEQVQoz+XSMQ4BURSF4SeZp1AqTGUJNiBKldoKZgMapQWwAp3SFpQa1qCYXqmhMBHnd6abCAmRqdwFfPmTe0IIQY1mqtgeKkkzJd2ZYm+t2N8qjnK1srM6UzSYS+MlmqzRYoNWe7TL0eGIThd0vVHe3V7AIAYxSAXEIAYxiEEMYhCDGMQgBinBogJWC5/BjwuLF4XvwK8L/xCs7Sm1zObnYT8ACmQHKavKNk4AAAAASUVORK5CYII=')",
                        backgroundSize: 'cover',
                        display: 'block',
                      },
                    }
                  )
                ),
                '\n  ',
                Object(A.b)(
                  'img',
                  i(
                    { parentName: 'span' },
                    {
                      className: 'gatsby-resp-image-image',
                      alt: 'Get started for designers',
                      title: 'Get started for designers',
                      src:
                        '/static/714db3c141e2e35bc62de90825ac2e72/3cbba/getting-started-designers-mobile.png',
                      srcSet: [
                        '/static/714db3c141e2e35bc62de90825ac2e72/7fc1e/getting-started-designers-mobile.png 288w',
                        '/static/714db3c141e2e35bc62de90825ac2e72/a5df1/getting-started-designers-mobile.png 576w',
                        '/static/714db3c141e2e35bc62de90825ac2e72/3cbba/getting-started-designers-mobile.png 1152w',
                        '/static/714db3c141e2e35bc62de90825ac2e72/362ee/getting-started-designers-mobile.png 1600w',
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
              Object(A.b)(
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
                Object(A.b)(
                  'span',
                  i(
                    { parentName: 'span' },
                    {
                      className: 'gatsby-resp-image-background-image',
                      style: {
                        paddingBottom: '50%',
                        position: 'relative',
                        bottom: '0',
                        left: '0',
                        backgroundImage:
                          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApElEQVQoz+XSMQ4BURSF4SeZp1AqTGUJNiBKldoKZgMapQWwAp3SFpQa1qCYXqmhMBHnd6abCAmRqdwFfPmTe0IIQY1mqtgeKkkzJd2ZYm+t2N8qjnK1srM6UzSYS+MlmqzRYoNWe7TL0eGIThd0vVHe3V7AIAYxSAXEIAYxiEEMYhCDGMQgBinBogJWC5/BjwuLF4XvwK8L/xCs7Sm1zObnYT8ACmQHKavKNk4AAAAASUVORK5CYII=')",
                        backgroundSize: 'cover',
                        display: 'block',
                      },
                    }
                  )
                ),
                '\n  ',
                Object(A.b)(
                  'img',
                  i(
                    { parentName: 'span' },
                    {
                      className: 'gatsby-resp-image-image',
                      alt: 'Get started for designers',
                      title: 'Get started for designers',
                      src:
                        '/static/0662e09c0b7fcc0ee0e7b8e912f8aa7c/3cbba/getting-started-designers-tablet.png',
                      srcSet: [
                        '/static/0662e09c0b7fcc0ee0e7b8e912f8aa7c/7fc1e/getting-started-designers-tablet.png 288w',
                        '/static/0662e09c0b7fcc0ee0e7b8e912f8aa7c/a5df1/getting-started-designers-tablet.png 576w',
                        '/static/0662e09c0b7fcc0ee0e7b8e912f8aa7c/3cbba/getting-started-designers-tablet.png 1152w',
                        '/static/0662e09c0b7fcc0ee0e7b8e912f8aa7c/362ee/getting-started-designers-tablet.png 1600w',
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
              Object(A.b)(
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
                Object(A.b)(
                  'span',
                  i(
                    { parentName: 'span' },
                    {
                      className: 'gatsby-resp-image-background-image',
                      style: {
                        paddingBottom: '33.33333333333333%',
                        position: 'relative',
                        bottom: '0',
                        left: '0',
                        backgroundImage:
                          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAAd0lEQVQoz2NgZBH6z8Lv+J9ZOPY/k1jlfwaluf8ZdLb9Z7C/9p/B99l/hoz//2Ur//236fz3P3r2//+Fy///79n1///C4///H7/z//+N5///v/vy//+P3//BgIEBaiCTUOx/RtEK7AZWkGAg3IXUMpBh1EBKDQQA2ftyUuvMYaUAAAAASUVORK5CYII=')",
                        backgroundSize: 'cover',
                        display: 'block',
                      },
                    }
                  )
                ),
                '\n  ',
                Object(A.b)(
                  'img',
                  i(
                    { parentName: 'span' },
                    {
                      className: 'gatsby-resp-image-image',
                      alt: 'Get started for designers',
                      title: 'Get started for designers',
                      src:
                        '/static/94d00b5a50f32d01224183239bc5c4af/3cbba/getting-started-designers.png',
                      srcSet: [
                        '/static/94d00b5a50f32d01224183239bc5c4af/7fc1e/getting-started-designers.png 288w',
                        '/static/94d00b5a50f32d01224183239bc5c4af/a5df1/getting-started-designers.png 576w',
                        '/static/94d00b5a50f32d01224183239bc5c4af/3cbba/getting-started-designers.png 1152w',
                        '/static/94d00b5a50f32d01224183239bc5c4af/0b124/getting-started-designers.png 1728w',
                        '/static/94d00b5a50f32d01224183239bc5c4af/e957c/getting-started-designers.png 1920w',
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
              )
            )
          ),
          Object(A.b)(
            o,
            {
              color: 'dark',
              href: '/get-started/develop/vanilla',
              subTitle: 'Start',
              title: 'Developing',
              actionIcon: 'arrowRight',
              className: 'homepage-feature',
              mdxType: 'FeatureCard',
            },
            Object(A.b)(
              g,
              { mdxType: 'ArtDirection' },
              Object(A.b)(
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
                Object(A.b)(
                  'span',
                  i(
                    { parentName: 'span' },
                    {
                      className: 'gatsby-resp-image-background-image',
                      style: {
                        paddingBottom: '50%',
                        position: 'relative',
                        bottom: '0',
                        left: '0',
                        backgroundImage:
                          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjklEQVQoz2NgAAFGBgYmBooAIxMDIyPp2vhUGJTCGZhYybKThZNBp4jBaiqDsAHMFyQ4GKyaW4bBYxeDjDtYhJlYrSCCX53BoIZBt5iBQ5REy/mUGcz7GcSsSHczEDBzMjBzIFzLxsfAq8jAI8fAq8TAJkCEiZB4YgTHtoQ9g+VEBuNmBsvJDNKuUFmqAwAI9grPzt1wPgAAAABJRU5ErkJggg==')",
                        backgroundSize: 'cover',
                        display: 'block',
                      },
                    }
                  )
                ),
                '\n  ',
                Object(A.b)(
                  'img',
                  i(
                    { parentName: 'span' },
                    {
                      className: 'gatsby-resp-image-image',
                      alt: 'Get started for developers',
                      title: 'Get started for developers',
                      src:
                        '/static/1b06d6e82bb03f3981494732000cb105/3cbba/getting-started-developers-mobile.png',
                      srcSet: [
                        '/static/1b06d6e82bb03f3981494732000cb105/7fc1e/getting-started-developers-mobile.png 288w',
                        '/static/1b06d6e82bb03f3981494732000cb105/a5df1/getting-started-developers-mobile.png 576w',
                        '/static/1b06d6e82bb03f3981494732000cb105/3cbba/getting-started-developers-mobile.png 1152w',
                        '/static/1b06d6e82bb03f3981494732000cb105/362ee/getting-started-developers-mobile.png 1600w',
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
              Object(A.b)(
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
                Object(A.b)(
                  'span',
                  i(
                    { parentName: 'span' },
                    {
                      className: 'gatsby-resp-image-background-image',
                      style: {
                        paddingBottom: '50%',
                        position: 'relative',
                        bottom: '0',
                        left: '0',
                        backgroundImage:
                          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZ0lEQVQoz2NgoAJgZCJPGyMDuyCQItda+UAGpXAGZg5yrAYRylEMhnVgLhNYhHiHSLsyqMYzcIqTFVTcsgxMrCA2uzCDsAEIARlwRxFhBDOI5FVkUAgGIR4FUjRTI7YZQU4AIaLsBABFmgWG42pvdgAAAABJRU5ErkJggg==')",
                        backgroundSize: 'cover',
                        display: 'block',
                      },
                    }
                  )
                ),
                '\n  ',
                Object(A.b)(
                  'img',
                  i(
                    { parentName: 'span' },
                    {
                      className: 'gatsby-resp-image-image',
                      alt: 'Get started for designers',
                      title: 'Get started for designers',
                      src:
                        '/static/bb2d0ab17d78dc1ed18c222df7475acb/3cbba/getting-started-developers-tablet.png',
                      srcSet: [
                        '/static/bb2d0ab17d78dc1ed18c222df7475acb/7fc1e/getting-started-developers-tablet.png 288w',
                        '/static/bb2d0ab17d78dc1ed18c222df7475acb/a5df1/getting-started-developers-tablet.png 576w',
                        '/static/bb2d0ab17d78dc1ed18c222df7475acb/3cbba/getting-started-developers-tablet.png 1152w',
                        '/static/bb2d0ab17d78dc1ed18c222df7475acb/362ee/getting-started-developers-tablet.png 1600w',
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
              Object(A.b)(
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
                Object(A.b)(
                  'span',
                  i(
                    { parentName: 'span' },
                    {
                      className: 'gatsby-resp-image-background-image',
                      style: {
                        paddingBottom: '33.33333333333333%',
                        position: 'relative',
                        bottom: '0',
                        left: '0',
                        backgroundImage:
                          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAAYElEQVQoz2NgYGD4D8GM/xFsSjCn5H8GRhYqGQbCQgb/GVRi/zPwyFPLUCChDDRQLRkiwMhEoffFbf6DMdW8jMwRNgK6NOU/g1wA0KXMlBjIBOEwsf9nYOX/z8DCQ7YLAQtzj64Q5cVEAAAAAElFTkSuQmCC')",
                        backgroundSize: 'cover',
                        display: 'block',
                      },
                    }
                  )
                ),
                '\n  ',
                Object(A.b)(
                  'img',
                  i(
                    { parentName: 'span' },
                    {
                      className: 'gatsby-resp-image-image',
                      alt: 'Get started for developers',
                      title: 'Get started for developers',
                      src:
                        '/static/84c5f5a2220d034429844fab1a96ad70/3cbba/getting-started-developers.png',
                      srcSet: [
                        '/static/84c5f5a2220d034429844fab1a96ad70/7fc1e/getting-started-developers.png 288w',
                        '/static/84c5f5a2220d034429844fab1a96ad70/a5df1/getting-started-developers.png 576w',
                        '/static/84c5f5a2220d034429844fab1a96ad70/3cbba/getting-started-developers.png 1152w',
                        '/static/84c5f5a2220d034429844fab1a96ad70/0b124/getting-started-developers.png 1728w',
                        '/static/84c5f5a2220d034429844fab1a96ad70/e957c/getting-started-developers.png 1920w',
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
              )
            )
          ),
          Object(A.b)('h3', null, 'Other resources'),
          Object(A.b)(
            'p',
            null,
            'The component libraries give developers a collection of reusable components for\nbuilding websites and user interfaces. See a\n',
            Object(A.b)(
              'a',
              i({ parentName: 'p' }, { href: '/resources' }),
              'complete list of resources.'
            )
          ),
          Object(A.b)(
            d,
            { className: 'resource-card-group', mdxType: 'Row' },
            Object(A.b)(
              b,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(A.b)(
                l,
                {
                  color: 'dark',
                  subTitle: 'Sketch libraries',
                  href: '/resources#theme-libraries',
                  mdxType: 'ResourceCard',
                },
                Object(A.b)(p, { name: 'sketch', mdxType: 'MdxIcon' })
              )
            ),
            Object(A.b)(
              b,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(A.b)(
                l,
                {
                  color: 'dark',
                  subTitle: 'Carbon Components',
                  href:
                    'https://github.com/carbon-design-system/carbon/tree/master/packages/components',
                  mdxType: 'ResourceCard',
                },
                Object(A.b)(p, {
                  name: 'github',
                  color: 'inverse',
                  mdxType: 'MdxIcon',
                })
              )
            ),
            Object(A.b)(
              b,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(A.b)(
                l,
                {
                  color: 'dark',
                  subTitle: 'Carbon Components React',
                  href:
                    'https://github.com/carbon-design-system/carbon/tree/master/packages/react',
                  mdxType: 'ResourceCard',
                },
                Object(A.b)(p, {
                  name: 'github',
                  color: 'inverse',
                  mdxType: 'MdxIcon',
                })
              )
            ),
            Object(A.b)(
              b,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(A.b)(
                l,
                {
                  color: 'dark',
                  subTitle: 'Carbon Components Angular',
                  href: 'https://github.com/IBM/carbon-components-angular',
                  mdxType: 'ResourceCard',
                },
                Object(A.b)(p, {
                  name: 'github',
                  color: 'inverse',
                  mdxType: 'MdxIcon',
                })
              )
            ),
            Object(A.b)(
              b,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(A.b)(
                l,
                {
                  color: 'dark',
                  subTitle: 'Carbon Components Vue',
                  href:
                    'https://github.com/carbon-design-system/carbon-components-vue',
                  mdxType: 'ResourceCard',
                },
                Object(A.b)(p, {
                  name: 'github',
                  color: 'inverse',
                  mdxType: 'MdxIcon',
                })
              )
            )
          ),
          Object(A.b)('h3', null, 'Latest news and articles'),
          Object(A.b)(
            d,
            { mdxType: 'Row' },
            Object(A.b)(
              b,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(A.b)(
                m,
                {
                  color: 'dark',
                  title: 'Seven new UX patterns for Carbon',
                  author: 'Jan Child',
                  date: 'January 9, 2020',
                  href:
                    'https://medium.com/carbondesign/seven-new-ux-patterns-for-carbon-f4a18c20c535',
                  mdxType: 'ArticleCard',
                },
                Object(A.b)(
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
                  Object(A.b)(
                    'span',
                    i(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABaElEQVQoz32Sy26DMBRE/f9fFWURWqVIiRSpG6ht8JOneZlkQdMBt1HaRUdIWJc5vp5rSJ7nQgi5CeuyLJ1z09glon+njVECxX4Yer94P8PJKNOlMa6YxokwxqTIYIKSJGma5n6/e+8/l2Uae0pZmiR9P8y3ZZ7nLMvSJAWsWjMOIxkHR2V3SRujJWO8KArwFVTXRVnCve6+aj0dGnDOtdLWWKUVcW2rbS1Nk3EOq1JKPinAYEI6CDaplNhsBCHran1ggnVN9SMAz/DK53mSppUxHUbTdcRsstYGx+l02u/3cRxHL68QRejfMOW8EcIr7W83gr0RIxwJn4/HYxy/aWNPl/RwiD42GvVHHLyUMdpaozUJZwu3hf7n83m320VRhP6HKKq0dlXdOgf4caMQ+gH8BT/0fRApe8ZHW/jrFXC2SW0K8/sLh4GFLPhg13nWZVGES4LCIP+Dw9/GOEdCRmkgUQn1sEbxC7XjTHKhzmOSAAAAAElFTkSuQmCC')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(A.b)(
                    'img',
                    i(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'patterns announcement',
                        title: 'patterns announcement',
                        src:
                          '/static/0c3ca1d0f9691c293586f568d0ea9620/3cbba/patterns_announcement.png',
                        srcSet: [
                          '/static/0c3ca1d0f9691c293586f568d0ea9620/7fc1e/patterns_announcement.png 288w',
                          '/static/0c3ca1d0f9691c293586f568d0ea9620/a5df1/patterns_announcement.png 576w',
                          '/static/0c3ca1d0f9691c293586f568d0ea9620/3cbba/patterns_announcement.png 1152w',
                          '/static/0c3ca1d0f9691c293586f568d0ea9620/362ee/patterns_announcement.png 1600w',
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
                )
              )
            ),
            Object(A.b)(
              b,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(A.b)(
                m,
                {
                  color: 'dark',
                  title: 'Adobe XD Carbon starter kit announced at Max',
                  author: 'Ashley Still',
                  date: 'November 4, 2019',
                  href:
                    'https://theblog.adobe.com/adobe-and-ibm-ix-extend-partnership-to-help-enterprises-design-powerful-and-consistent-customer-experiences/',
                  mdxType: 'ArticleCard',
                },
                Object(A.b)(
                  'span',
                  {
                    className: 'gatsby-resp-image-wrapper',
                    style: {
                      position: 'relative',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      maxWidth: '750px',
                    },
                  },
                  '\n      ',
                  Object(A.b)(
                    'span',
                    i(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.266666666666666%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAABBf/EABYBAQEBAAAAAAAAAAAAAAAAAAEDBP/aAAwDAQACEAMQAAABLi+bTUiBB//EABoQAAICAwAAAAAAAAAAAAAAAAECABESMTL/2gAIAQEAAQUCK4qDRLw8tqf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwFX/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAS/9oACAECAQE/AVtt/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAERIDL/2gAIAQEABj8Ck0nX/8QAGRABAQEBAQEAAAAAAAAAAAAAAQARITFR/9oACAEBAAE/IdkHhIGifkG3S24Sclv/2gAMAwEAAgADAAAAEOQv/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERITH/2gAIAQMBAT8QjysaXh//xAAXEQADAQAAAAAAAAAAAAAAAAABEBEh/9oACAECAQE/EJnEf//EABoQAQEBAQEBAQAAAAAAAAAAAAERACExgZH/2gAIAQEAAT8QeCKPTFiMkJfBvvzF6H9zihJIm4yKyhMjFd//2Q==')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(A.b)(
                    'img',
                    i(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'xd kit img',
                        title: 'xd kit img',
                        src:
                          '/static/df2a1513724a74d65718164d8c489910/10729/xd_kit_img.jpg',
                        srcSet: [
                          '/static/df2a1513724a74d65718164d8c489910/69549/xd_kit_img.jpg 288w',
                          '/static/df2a1513724a74d65718164d8c489910/473e3/xd_kit_img.jpg 576w',
                          '/static/df2a1513724a74d65718164d8c489910/10729/xd_kit_img.jpg 750w',
                        ],
                        sizes: '(max-width: 750px) 100vw, 750px',
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
                )
              )
            ),
            Object(A.b)(
              b,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(A.b)(
                m,
                {
                  color: 'dark',
                  title: 'New in Carbon: October 2019',
                  author: 'Tyler Tate',
                  date: 'October 10, 2019',
                  href:
                    'https://medium.com/carbondesign/october-release-fadc38b757ad',
                  mdxType: 'ArticleCard',
                },
                Object(A.b)(
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
                  Object(A.b)(
                    'span',
                    i(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACoUlEQVQoz12SyU9TYRTFH7o0MRA3xqWsXBkTY3ClG0PiP6BsdaPiAjWAYYhRweDEUGhLaynIaEQSSDQxJGgQkUKEMoXWDo8AQmlpaUtHCu87nq+CCxcnfb2v99dz77lKy/Y2jJSeks8v/Zt45fdnv0sZ5PtQCIOhIHS/13DP7RJnbePI/z6qzafTYiGVgjOTEe69PfzKZKDo2NARDqN3Zwd1a6u4PmXDtckJ6AN+dEejWZURdPTbCJShARzpsAilrgZ5z2u16XhMOHZ3QZhwESahWWA7gX0ENm5s4IZ9BncW5mEMBNBDWBfrZaqKnM52KE0NyHn8SCh3i5FXUqLNxuNC1TS4Dhz+A1oJNAWDKCaoheNK3ZqfwxvWOuNxlM7NQSkqgnKlEMqFi0LJP4O8cwXal+CWcO7vw0uH08kkluhWaSFMx709cDqyQDliZySCm7N23HcswcL3VV4vTpqMOG7QI7e+XhyrqUX+6wZtJBwWUwQNRyNiLBbDYjr912Ebm+TYz1ZW0OjbQJPPh1o+Ww/qTxhIwdIiTlgsOGVpQ67ZLE53dWGc67AlE+IrPycTCdgZ0L+RZSh6jlrp8aDa64FB7pA16baME5y3T6Pq/Qfc7u4RT/sHYP08LByplPBwZPUgFNdhym/Z9I7NOjqr9rhR6XZl4b0cXwZTynqh143RZAKDsaj4uZfBKiCDEMsMQp6PSnA2FHl7JspM6AuOW7Gs4qHqRT2BJjq3sl6+6cNllxOftrYwzJuc4J9ISUdDNNLMvr6tADyHKTdTjfxhMwEGAqRkrYG1VtYk8JLbiY/bIYxLGAOwc2czDKEvEsa6JtC0vgYba4p0YZZnI0VI63/qILyCwKuqB+V02c99+uWpELbAMxljyj4hYPSt4wdP7A9+yNfOQ40I9wAAAABJRU5ErkJggg==')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(A.b)(
                    'img',
                    i(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'v10 7 release',
                        title: 'v10 7 release',
                        src:
                          '/static/3ab51059f59fdbab2a95e51c1a7eec65/3cbba/v10.7-release.png',
                        srcSet: [
                          '/static/3ab51059f59fdbab2a95e51c1a7eec65/7fc1e/v10.7-release.png 288w',
                          '/static/3ab51059f59fdbab2a95e51c1a7eec65/a5df1/v10.7-release.png 576w',
                          '/static/3ab51059f59fdbab2a95e51c1a7eec65/3cbba/v10.7-release.png 1152w',
                          '/static/3ab51059f59fdbab2a95e51c1a7eec65/362ee/v10.7-release.png 1600w',
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
                )
              )
            )
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-mdx-5e35140df7c28749dd52.js.map
