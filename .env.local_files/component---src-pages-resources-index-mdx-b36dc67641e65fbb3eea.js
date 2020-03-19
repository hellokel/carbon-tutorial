(window.webpackJsonp = window.webpackJsonp || []).push([
  [691],
  {
    FHeL: function(e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, '_frontmatter', function() {
          return n;
        }),
        t.d(a, 'default', function() {
          return y;
        });
      t('rGqo'), t('q1tI');
      var c = t('7ljp'),
        i = t('013z');
      t('qKvR');
      function o() {
        return (o =
          Object.assign ||
          function(e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var c in t)
                Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
            }
            return e;
          }).apply(this, arguments);
      }
      function s(e, a) {
        if (null == e) return {};
        var t,
          c,
          i = (function(e, a) {
            if (null == e) return {};
            var t,
              c,
              i = {},
              o = Object.keys(e);
            for (c = 0; c < o.length; c++)
              (t = o[c]), a.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (c = 0; c < o.length; c++)
            (t = o[c]),
              a.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (i[t] = e[t]));
        }
        return i;
      }
      const n = {},
        b = e =>
          function(a) {
            return (
              console.warn(
                'Component ' +
                  e +
                  ' was not imported, exported, or provided by MDXProvider as global scope'
              ),
              Object(c.b)('div', a)
            );
          },
        r = b('PageDescription'),
        d = b('AnchorLinks'),
        l = b('AnchorLink'),
        p = b('Row'),
        g = b('Column'),
        A = b('ResourceCard'),
        m = b('MdxIcon'),
        u = b('ArticleCard'),
        f = { _frontmatter: n },
        h = i.a;
      function y(e) {
        let { components: a } = e,
          t = s(e, ['components']);
        return Object(c.b)(
          h,
          o({}, f, t, { components: a, mdxType: 'MDXLayout' }),
          Object(c.b)(
            r,
            { mdxType: 'PageDescription' },
            Object(c.b)(
              'p',
              null,
              'Everything you need to work with, learn about, and contribute to Carbon.'
            )
          ),
          Object(c.b)(
            d,
            { mdxType: 'AnchorLinks' },
            Object(c.b)(l, { mdxType: 'AnchorLink' }, 'Development resources'),
            Object(c.b)(l, { mdxType: 'AnchorLink' }, 'Design resources'),
            Object(c.b)(l, { mdxType: 'AnchorLink' }, 'Tools'),
            Object(c.b)(l, { mdxType: 'AnchorLink' }, 'Reading')
          ),
          Object(c.b)('h2', null, 'Development resources'),
          Object(c.b)('h3', null, 'GitHub repos'),
          Object(c.b)(
            p,
            { className: 'resource-card-group', mdxType: 'Row' },
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'Carbon Components',
                  href:
                    'https://github.com/carbon-design-system/carbon-components',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'github', mdxType: 'MdxIcon' })
              )
            ),
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'Carbon Components React',
                  href:
                    'https://github.com/carbon-design-system/carbon-components-react',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'github', mdxType: 'MdxIcon' })
              )
            ),
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'Carbon Components Angular',
                  href: 'https://github.com/IBM/carbon-components-angular',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'github', mdxType: 'MdxIcon' })
              )
            ),
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'Carbon Components Vue',
                  href:
                    'https://github.com/carbon-design-system/carbon-components-vue',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'github', mdxType: 'MdxIcon' })
              )
            ),
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'Carbon boilerplate',
                  href:
                    'https://github.com/carbon-design-system/carbon-boilerplate',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'github', mdxType: 'MdxIcon' })
              )
            ),
            Object(c.b)(
              g,
              { colMd: 4, colLg: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'Carbon Charts Core',
                  href:
                    'https://github.com/carbon-design-system/carbon-charts/tree/master/packages/core',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'github', mdxType: 'MdxIcon' })
              )
            )
          ),
          Object(c.b)('h3', null, 'Storybooks'),
          Object(c.b)(
            p,
            { className: 'resource-card-group', mdxType: 'Row' },
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'Carbon React Storybook',
                  href: 'http://react.carbondesignsystem.com/',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(
                  'span',
                  {
                    className: 'gatsby-resp-image-wrapper',
                    style: {
                      position: 'relative',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      maxWidth: '200px',
                    },
                  },
                  '\n      ',
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '98%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACeUlEQVQ4y3WVSWhUQRCGe5K4RlyYMDNvxARFxQW9qHiLEhXxJsGc9CAiCAFBQeICIoiKx0AIikQ9xCUuROK+ezBGBY0eNC4RBRE95JKDevEwfhX/xpqHDnypqq7qftXV1Z0Q+OXz+SCZkayCmqAfeiVUODuTy+WSaKMHv04crJBcjOMpshd5GZaGUBbXIt8z6HAf+bugKQRlNOEe9mZluRE+wG6YBL34e5ALLWP0B8j1mlcZ/OqSk3H0wXjnGwM3oQTNPlvsrdDmyvJn/652OcsCprhJlsl5eIu+JX5Espnxo3HBWMuR+sWio99HT1xdrkE3zIFhaHL13Au73E7K987ANOwXSKvjFfgIQ3Bd234EP3VoXchBOJw+bVuoFi7CQ3gCN2A5fCFoZqpuBxm7jWyAb7YD7H7k9hiwBD7BTtl1CjqL3KOxHcpwtew70A4nZC8A+0h3UNqrUr3YBV8V3FQoFEoG+i/Gs7BMdn2qR08GpT1bk8fJ0YH+LrZGkiQltY0xC+ZqwUXxhCUP2Z912vIKDU4EO+nnsEFjV+E7HJDdo5h22WNJos3qH+u4Eux0z8EpOA3z4BWMSh3KJiZbK82A99AKL62eIztMtU0jfIYBKzK+HxaMPILshOPKdJAx64Qh5AWoDali+kVv6a5mrbbwWm1Urw/sh6mK3QctrrEzZa+Erl6f1dE3O1xSdq3p7dt4vKL+tYl3uUZPU3VqYmexWCzhWxPfS7fgsX/dZf9IPkZvkD7fnig4Y+8ivLHWgAny2yFuK3tt/KsiuZYFBsBapT9OkC+rLrDredfuPHHVZff4P/8CptshxJbRE1fl4utsFzA6NS/8Bjlew89F2xUNAAAAAElFTkSuQmCC')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'react icon',
                        title: 'react icon',
                        src:
                          '/static/c1d11571ede73bb55dbec0b8471308bb/59afc/react-icon.png',
                        srcSet: [
                          '/static/c1d11571ede73bb55dbec0b8471308bb/59afc/react-icon.png 200w',
                        ],
                        sizes: '(max-width: 200px) 100vw, 200px',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'Carbon Components Vue Storybook',
                  href: 'http://vue.carbondesignsystem.com/',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(
                  'span',
                  {
                    className: 'gatsby-resp-image-wrapper',
                    style: {
                      position: 'relative',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      maxWidth: '128px',
                    },
                  },
                  '\n      ',
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '100%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAC4jAAAuIwF4pT92AAADe0lEQVQ4y5WUa0iTURjHnzmjxCiXIVF9yb5UlttcdPsSXcw5yUERSaXbFLOIcnh37/vuNW9dLOgCBeGnoqJCtMy2udlKTSuCEPoSQReToKD6UpC6ndNzzntmGYh24OWc99nz/N7/czkDmGZlWF2QZjvAz8Zshw6mXQ88eggqC3UBJQkGjxtS1GOGDWv3GdbYXQaT1ZHEXDZllkC6gOE+x5jtTDZnOQzpVocBQl4DxifhngwBea4G7Vba0fgdwt4Ps9o8I2tyXSOmLMcwBn5DVXuZy+btR5nSRHwfMNqcXyxb8odTGkpHoFcdwfiPGP8ZfNJGDeiXsqC/gUKPSmGgni5qcFPLVgc15xZTBLxfbcufJ1Kus9gPUfMOJ12VV0zj/F4KYYx5fpJCt9ymwXrr4zSV8jV40ohQ76jOJ0dX5BVFzZmOUYu9hEE9abb9C3D/ZbS5aMbWgkjS+bIo9KkRCCI0qPyErtpUDeiTNGBX7TL84QeE8Iu9anT+xXKSsa0gasopZMBP+PSZdxZRtEWWF5dQeMhBY/C0mWLt6jmjx6vXoCFxCMgqdwgq4ywg9WAJAxBjjouac4qoKdsZxdrShKvVBB6jukfHme9baKtIFKKwce8uiAOuO+UJ6PCGO2JAwrVqarQ6qMnqRKgzYtlSQJdWHiGYAcFGjPMS+aV9orFCXWcNTDL4pTzu2K1EWOCS6iMEa0ZQHVltd5H4dg9Ld5w3sVsJ85hXZ3XQXsUyFLPY40V1FQBDLToBD3EoBuo7JJq2q5Cs3ZxPFp5wE2wEU0f4RPik9ZoIWevD/VoBvFMOk37wSeuwrkwBhf46ktJYSlbuKSJYDor2cRhsYmPSyn3Dqh7cu1lmf92W1sNYRw9MOGgNugyDzUzlmL5TorNv1BAc/Cg8VFkjvqGaxeLjWlYd1f9cwfZKAErZVdSJ2i7CwK8QrmOqogjTus/UBeQKMR3xIrMp7nWnqEFQOAZkNwcwUBCb1FfPyvAKrhyOn6jZUAvA7bIpgGcKsEHqn+KeK9QjYIiDQt4xvvsl+6SpuFcz7b8PCHWxMbLxtPkoyfe4baApDm6UspRhZiuoaGPUH7vnyl0O7PKsEB/R7NdLZwiMpREL9Esb8KkTMxu7+/B/Kzb1L079sdHbAJ5dAK/PzaB2/65bOOwfLmnnZ80AL08D3HRr7x1VU4b9Bj9isIih4VwrAAAAAElFTkSuQmCC')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'vue icon',
                        title: 'vue icon',
                        src:
                          '/static/8fceecdc8e694e264dd3d04f2fd52c82/79bda/vue-icon.png',
                        srcSet: [
                          '/static/8fceecdc8e694e264dd3d04f2fd52c82/79bda/vue-icon.png 128w',
                        ],
                        sizes: '(max-width: 128px) 100vw, 128px',
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
          ),
          Object(c.b)('h2', null, 'Design resources'),
          Object(c.b)('h3', null, 'Theme libraries'),
          Object(c.b)(
            p,
            { className: 'resource-card-group', mdxType: 'Row' },
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'White theme',
                  href: 'sketch://add-library/cloud/JaVzz',
                  actionIcon: 'download',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'sketch', mdxType: 'MdxIcon' })
              )
            ),
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'Gray 10 theme',
                  href: 'sketch://add-library/cloud/Onwv2',
                  actionIcon: 'download',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'sketch', mdxType: 'MdxIcon' })
              )
            ),
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'Gray 90 theme',
                  href: 'sketch://add-library/cloud/eo37p',
                  actionIcon: 'download',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'sketch', mdxType: 'MdxIcon' })
              )
            ),
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'Gray 100 theme',
                  href: 'sketch://add-library/cloud/d13Ll',
                  actionIcon: 'download',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'sketch', mdxType: 'MdxIcon' })
              )
            )
          ),
          Object(c.b)('h3', null, 'Color, grid, and icons'),
          Object(c.b)(
            p,
            { className: 'resource-card-group', mdxType: 'Row' },
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'RGB color palettes (.ase and .clr)',
                  href:
                    'https://github.com/carbon-design-system/carbon/raw/master/packages/colors/artifacts/IBM_Colors.zip',
                  actionIcon: 'download',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(
                  'span',
                  {
                    className: 'gatsby-resp-image-wrapper',
                    style: {
                      position: 'relative',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      maxWidth: '560px',
                    },
                  },
                  '\n      ',
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '101.60714285714285%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEMUlEQVQ4y52Se0zTVxTHj/RdKcJQdKBFQIYKxoABzRa2uT9cJmxiMmeZGw9DImWbmUYe5Y0wHOpEIMKQGEW0POY2siUScCBvFkbGgL5LgdJ3aekb2v5+LbtE4/bfkt187sn3nHu+uTc3B+x2x8b/Wg6HA6w2G1JerxeF/+Ll8nhwr9djtdrAZLKg3OnEtRpcrcL1OtxsxuVLm6zoNytiISYRYYYVbGHeKRKu8wU6s9nucrkMhlUwGFc3NnCV0l1wEbuYhV0rxTq52Adv4yfewq9XYuzz9kCaZSfDUvedI+7QPJ3M3RFYOzW17HI51Got6PUG7wa2LHchZ1YqVpaHtd13J8bibx7CKzhY2lkbAUxUMNdU2cNC2wEqKeQbY2Myu90il6tAq9V7PC6VYr2qCC++jNdfx35+4mZ9uHHm5Eb9DfxSzlr4rvU3Qtw3a3QJ8XeDApsi9raMj88bV42yRTmoNTq326lW25sbDfW1hocPVsdGjbduLN/8VvFrt/6nJ4tVV2fLSnq7uyevVXfm5d4vKW6bmZWoNVrJ/AIolRqPx/nXtCmAIfQB/v590qrKeQI8A+hjnZlJZf0CkA1wKi/3XigzBeAonXq8v39Co9UIRRJQKNS4Z336TxODIgTg7WNKK8qkyIn4OGXu9OnbAEkAKZe+vrt7dzLAETI5sffZqFKt4glEsKxQud1rfJ4p8ZgsNkZ6KmmpuWkpLmbi8MFxdvZw9oW6yPAvoyK/qq5uf+/dnMiIs7GH058/n1iSy2d5AlheVqIhM5utBoMFYTRaTCar0WiVLSp4fAFfIJrjCRF8oXiOL3yhhSKxWCKdmeOBXK60WOxoVCxWK9qbWG1yhZIvEPJFYuQRiDZ5JRDowSidnpkDrU6FYY51p9XptCFcrjWtXiORiaULEqkM/agUCRQ3hUzyCpTyhTzo65OMDK8MD2mHh/RI9PTMdnQMcbmDXT+MdnaOPGrtb+8Y5j4efPRwoKNrpBMV/2EIIpg9DPJUAP13f/qUH7WVRirw21rKjLhFI3EY9JLo+JagXdUo3R/3/TZGGY1cSKcUbaUWUYiFzJAKYL7+lLpl0pf0B43QSiHmAVw+kNCSz9W9tv2bj74YZHEm94TXshukydkD2/zKiZBHJhRQCAUEyA8OKoPQ4Kc0n2k6qZVCyKWSirbAlZNZv+W2qY8ldUXFNbMKJ6OP3suukySm/EgjFZJ9OBQCh0rkEKEgZGc5urmXBI/JPlfQARHyGb7laZUzJzL6Uounwg40nK/hJ18YQPH9zL4A/0rUsOn34RCgIDioHMJDG+nkQj96EYNW7EspDAyoCIuqpRLyIg7WxcQ3x73zwN+vNDqh+cjx1h3br6IGBq0INSPL3j0VwM5pSk+7k5HR+AKkPz/XkJnZ9Nmn9edYdamf1Kan33kp/t2W3shmN/8NrhDb+/RNhusAAAAASUVORK5CYII=')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'ase',
                        title: 'ase',
                        src:
                          '/static/cde57da39cf470f47832ecc5eb6899c0/adc5b/ase.png',
                        srcSet: [
                          '/static/cde57da39cf470f47832ecc5eb6899c0/7fc1e/ase.png 288w',
                          '/static/cde57da39cf470f47832ecc5eb6899c0/adc5b/ase.png 560w',
                        ],
                        sizes: '(max-width: 560px) 100vw, 560px',
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
            Object(c.b)(
              g,
              { colMd: 4, colLg: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'IBM Design Language library',
                  href: 'sketch://add-library/cloud/nwqmk',
                  actionIcon: 'download',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'sketch', mdxType: 'MdxIcon' })
              )
            ),
            Object(c.b)(
              g,
              { colMd: 4, colLg: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'IBM Icons (16px, 20px) library',
                  href: 'sketch://add-library/cloud/KW2yr',
                  actionIcon: 'download',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'sketch', mdxType: 'MdxIcon' })
              )
            ),
            Object(c.b)(
              g,
              { colMd: 4, colLg: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'IBM Icons (24px, 32px) library',
                  href: 'sketch://add-library/cloud/2bwkM',
                  actionIcon: 'download',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'sketch', mdxType: 'MdxIcon' })
              )
            ),
            Object(c.b)(
              g,
              { colMd: 4, colLg: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'IBM Grid template',
                  href: 'https://sketch.cloud/s/ngV7z',
                  actionIcon: 'download',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'sketch', mdxType: 'MdxIcon' })
              )
            ),
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'UI Shell template',
                  href: 'https://sketch.cloud/s/EjVmA',
                  actionIcon: 'download',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'sketch', mdxType: 'MdxIcon' })
              )
            )
          ),
          Object(c.b)('h3', null, 'Data visualizations'),
          Object(c.b)(
            p,
            { className: 'resource-card-group', mdxType: 'Row' },
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle:
                    'Download WIP charting design specifications (IBM internal link)',
                  disabled: !0,
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'sketch', mdxType: 'MdxIcon' })
              )
            ),
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle:
                    'Data visualization color palettes (IBM internal link)',
                  href:
                    'https://ibm.box.com/s/3mt8fshtgy70r7rhxjhfo3gbdt0n3x5y',
                  actionIcon: 'download',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'sketch', mdxType: 'MdxIcon' })
              )
            )
          ),
          Object(c.b)('h3', null, 'GitHub repos'),
          Object(c.b)(
            p,
            { className: 'resource-card-group', mdxType: 'Row' },
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'Carbon design kit',
                  href:
                    'https://github.com/carbon-design-system/carbon-design-kit',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'github', mdxType: 'MdxIcon' })
              )
            ),
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'IBM Design Language and Icon Kits',
                  href: 'https://github.com/IBM/design-kit',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'github', mdxType: 'MdxIcon' })
              )
            )
          ),
          Object(c.b)('br', null),
          Object(c.b)('h4', null, 'IBM Plex'),
          Object(c.b)(
            'p',
            null,
            'Carbon uses the open-source typeface ',
            Object(c.b)(
              'a',
              o({ parentName: 'p' }, { href: 'https://github.com/ibm/plex' }),
              'IBM Plex'
            ),
            ' – carefully designed to meet IBM’s needs as a global technology company and reflect IBM’s spirit, beliefs, and design principles.'
          ),
          Object(c.b)('h4', null, 'IBM Design Language'),
          Object(c.b)(
            'p',
            null,
            'Carbon delivers the ',
            Object(c.b)(
              'a',
              o(
                { parentName: 'p' },
                { href: 'https://www.ibm.com/design/language/' }
              ),
              'IBM Design Language'
            ),
            ' as tools for designers and developers, guidance, tutorials, and support.'
          ),
          Object(c.b)('h2', null, 'Tools'),
          Object(c.b)(
            p,
            { className: 'resource-card-group', mdxType: 'Row' },
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'Carbon CodePen',
                  href: 'http://www.codepen.io/team/carbon',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(m, { name: 'codepen', mdxType: 'MdxIcon' })
              )
            ),
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'Color contrast checker',
                  href:
                    'https://marijohannessen.github.io/color-contrast-checker/',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(
                  'span',
                  {
                    className: 'gatsby-resp-image-wrapper',
                    style: {
                      position: 'relative',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      maxWidth: '200px',
                    },
                  },
                  '\n      ',
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '98%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5klEQVQ4y0WUCVBWVRiGL8jygwtGmpoKMy5YjrsO2oimjKZluGsZ5jKpoRhpKpaNG1nmVg6CpSOGprhliWsumEZuuCtYuGeCOgoobvzLfZ8OP1pn5s6cuXPOM+97vu97rS1lvhb0scrXeTugkvVslRVZzT0F/kn2ZccxnQsu5WiwR/uDCrU9cIs2+I1UmlW9/JwWp1hM8/Up3zM1wLISaOIFZOHwwpxPrXoeZ+AGlVaDstpwOxzyG8KpRnC4ARysD7tqovQqt7XEb8JzAUyq5Pt8b60l0As75PTpel2VS+BleBohFbd2qbCDrStR4nwn6VhHaX+kh60t3Kw38JU1YLZjp8ZbQV7oOF9f6xvb3wtb7vSJylQV5RLOPVo58URJj3qiu32lG4Ok/MHi1ECRHSN2dkPrOtikNnWywLj42HFATa3/FY58aIUm2cGFqwljn9q48onmCf2Fc7h0P87YTkBXJ0DuR3B0NOyNFRtiYKlRntTMyeRaEBuQ/B+wvycgeSK1WaAWzg0GdliDdJMx8thT4MksVDQXbs5D+V/CyemQZeAbR4ilvY3ljiI+QgwKgW4+7aw6D61akXaV+4NpRKI62qnqp20arbP6jBLmg/t7VJqO7qw2KleiM0tg/xwD/ARSh4kZb0JcWxcD6kKUI91yuP1j61OTzjR3D1M3zdRQ/cAk9msel0mjTD+bau9Gxfvgn53o3HoDXArrZ0NyPEwz7/pBJ5tejaFN1QIrwBOeUoeWtFMXd4wGaBwf8rWms54UjmgTtzmA7DPoUR4qPAHn9qB9a9CaRbDQPMnk90VsNxHdDF4JleVQ1K4w+tBBwz19maixJJGkFFYog13s4bxOU8pNcBUb4CV0Mhvt2AQrklHSp2jscOj7hmjfHOq9aBvgu3vCiDfAzz39tEjxxvAcMklTNjuVxyluUagyyh4JXXtgmjsfbf4NpWSgaQth5CTU8z3RsivUiLCtQE1Kq8s8IpXq7q0MjeFXZiqH73SJXyjikO3hwn24dkWUnDE1yrJhXRF8m4sSjf1hq0X3eaLZBBQ6WJafFsW9xGpasdndw5RiuE4rUddZaIyucomt90wN8sUfh0TeXlGwGR4uB88cJyTcgsEnpde320SkQbUviizLXtuomjKdEWTTSbkaQIF5xydMf2pEmPNpF0RGtumSzWLvj3BimbhoBN1JNC06EuntxxB53U3YaRSUmeltbIdyNtalgNbcdXWXiyEPUfwNMe2c+OogLPpJLE4V6QvEtiT4fYo4O1q62l+61xk5m8pNqAtVuvJWxajoWpOqlLjMuBNZjKfHVfHOKWlUFkrYKCYvFYlmQOaYXl4Wr/Ih0e7+6IipQ14rOUtNT5cEsbVC3eNSbzj4ORnxgrHZ8CK0y5E7ejfErDNPlIJiZ6KhY2DsEDRzIFpshiPdhM+WlnIeMWl2vLL+/sty1axQNx4r5GqxNyn8LmhcyHEI3wvN1sjdPhl35xnY0XEoujfq3QWNisIztS2uuU1MJNaBjMq6vMOiQfn9HH89C+g/XVboJZcX6rudrsGrlFsjBcJmQeOx8Go/87WHtk2gl8naEcZiQvXyKCR9vkVI+b3dAVTA/ApVAfXIqpzz7GcMvn4zGBIUx5aq/bge8hrOkHBUqxoPWlXhbI9AkmN9aPM8rdb54xWzK1jWv7eeA44S7vPdAAAAAElFTkSuQmCC')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'color contrast icon',
                        title: 'color contrast icon',
                        src:
                          '/static/0221b06df5d630131fb1efd656f319b3/59afc/color-contrast-icon.png',
                        srcSet: [
                          '/static/0221b06df5d630131fb1efd656f319b3/59afc/color-contrast-icon.png 200w',
                        ],
                        sizes: '(max-width: 200px) 100vw, 200px',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterSm: !0, mdxType: 'Column' },
              Object(c.b)(
                A,
                {
                  subTitle: 'Adobe XD design kit',
                  href:
                    'https://github.com/IBM/design-kit/raw/master/Adobe%20XD/Carbon%20Design%20System%20-%20V10%20-%20White%20(11.01.19).xd',
                  actionIcon: 'download',
                  mdxType: 'ResourceCard',
                },
                Object(c.b)(
                  'span',
                  {
                    className: 'gatsby-resp-image-wrapper',
                    style: {
                      position: 'relative',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      maxWidth: '560px',
                    },
                  },
                  '\n      ',
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '97.50000000000001%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAADM0lEQVQ4y41TbUiTURQ+72tqgkku56Zubu+7zY+2Od1UUMlQR6gkbpNUwo+UNLDUcPanJCjpT0F/kkgUClTIj1BER5QFkvYjcSqpWU3DdEKKadGXX7ud12n2Q8XxMN5z7nnuc+9zzwGCv75vGybrnLzVxjRMMo37wyZtXFZbyNUpx8IqkP7leUl7mUuajpZpKfYgiKeVDYfMJHsYiGmolE7zp7zDQKKhpWG0RAWBTmCopnZCZwbLQiFACvwewR2YY1sjKAZTiGAQKqkADcVVhFEYCo5DgAakzlU1BGKBCkRaSiYFn0qvM2BjGiMoVgVinavcqEhKFEbiMpZq3WSmIP1JXrgSRLgdMiPdFJiJ81JpQCIDQbmnEaakTXgNNXcq8dsnr6efj+k85BI4eiPLTKZXspTJQSBAGmoik3xeu2YoVQBfAcJyTwNMMRxZQzMsHCs/VUAWSWVaMZLtvR977newwIug2WAXoQAOpwbFEbujylS2Sfa7zCkzW8p4t1Dw/9A1NNT8qiK5iEyvGkMSURCRq03vqWm3WYbIzFqVcTcyKqD4JX2eY+L779HFxzfrFeCLzJL4HGJfH2np67zdRObI7mSnK1oP2eTTEfKFXEzKkYEPevOua3CiY0AER/SKaI5s2lu5JCHn5/D86tjX3vpuDNFb8ulPnfmuEDyyValkzrGnMr7q+y7rs5p2tJTMk/woA/bM+vhS262HPuBqCtGT2fVtt7fJ+M7hNMMAz3y6mCyQ/GhjCPh9fWO3tvYz4N1b140+ndMZCqMzcPV6ZgVHpv5TxkdGvs0yPNDwEj3HjarPXsGbn4/NjPfR2LqHUdNh+7E6uliuL8DOk4Nwh4xtFOUelK1MOcHT4DdngTubpUxJ9o9B29DF3PD0otjsZFEMymA7s+DLkXHKnHdGYB3u6uxkvD8ahuffnAQ/XMKGkQOf2xcYGfhy7TnLtjgHA5sET741FZv4F+J/hAuLwAzX9hS+C9/slQEkZaCQ1geAt3NuDgIliEXA6+RXA3mxNCNszqMTMKUGseoA0NHsPeoCSRsEB3E4LAsr+v6JwEeD4gdWce3+GBTX2hVtpGR8Y/bXX6tMbmukj/oUAAAAAElFTkSuQmCC')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'adobe xd',
                        title: 'adobe xd',
                        src:
                          '/static/dec01c4a8c909c88d64298a015d4ce08/adc5b/adobe-xd.png',
                        srcSet: [
                          '/static/dec01c4a8c909c88d64298a015d4ce08/7fc1e/adobe-xd.png 288w',
                          '/static/dec01c4a8c909c88d64298a015d4ce08/adc5b/adobe-xd.png 560w',
                        ],
                        sizes: '(max-width: 560px) 100vw, 560px',
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
          ),
          Object(c.b)('h2', null, 'Reading'),
          Object(c.b)('h3', null, 'Featured stories'),
          Object(c.b)(
            p,
            { mdxType: 'Row' },
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Writing Is Designing',
                  href:
                    'https://rosenfeldmedia.com/books/writing-is-designing/',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
                  'span',
                  {
                    className: 'gatsby-resp-image-wrapper',
                    style: {
                      position: 'relative',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      maxWidth: '432px',
                    },
                  },
                  '\n      ',
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACxElEQVQozy2TS2hTeRjFLzo7RaQ+qiiISpoWZzVrnyvt7CqI+EjbVNGVOjCOiKAOqBsFSfPow9rc/O8zsTXaqu20FjpaRRiVVsSFdXwuFBSlSbA2uQ0/vyRdHM7q/jjfPeeveXf9zNyqxXvqo/h2PcXX6/AebmS2v57MYAPXXAPXduhNJXEtCytpY/UmSaQslGNiJRJlKb277Jo3XAujGyiO+ygIrPi/AB+UgDvIDuykxzVJ2jbJpINtW4xc7mb8TCfjpzsZvngFUyUwDFE8jm0YaIzWcWr3EpxQNUz5yb8U4JgA+wR4pwIsga5Jusk/2/m+J8T03hA/AmGmAxEm/4jhdOuYArUErn1K1VD/2wLU+RW8u78O3teQv7eJ2Zs7yNyRky2FmXJ49leM/K4QmeYwmcZWMk3izREKe8NMHI8SV3E5WUcrDPnh+a+EjlVTtXg+//WugUdbKNyQhLcacB1FukvxLRAit6+VrICygTk1hsk1RvgaDJNs6yIhUI17dZxrWsrFk8tZs/IXOs4th4mt5NPbyUlCt8diMKbIyZnZpghZSVX2YLTiolwwRl9rF8pUaJ/TPqoXzadq0TyOBqrglZ/C/U14pX840EAyZdLfrpiSM7PN0YqCczogaokxdTDG9Y44Sv6j9mPIx/RtPxcOLePvo8uYHF4rJ2/Guy3AfwRolVpUvDkSZaYxWv442xIlc0BAh9vIB9t4dfIKCaMyHy0/UgMPa+m7tIrfty1kxFgNTzZTEGBmqFRKAjvl0h+L86UlzMz+CN8FPC3JZpqifDzWQfqqknR6pRRv1EdeUjIh5Xysg9c1FGSHxYF6siWgY5ByXBxpOt2h8/xEOx8OR3h3JMaTs5306AqjtARdx9ClFG9sPd6/oscy7Bd+Zl/45KXIbAbl5Ltzw3YccRfLNjFSNo4lLgWo0katymsxy9L5CRZabVkcQXzeAAAAAElFTkSuQmCC')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'writing is designing',
                        title: 'writing is designing',
                        src:
                          '/static/5c4e7330a47c22ff57ee018be719ea0d/51a28/writing-is-designing.png',
                        srcSet: [
                          '/static/5c4e7330a47c22ff57ee018be719ea0d/7fc1e/writing-is-designing.png 288w',
                          '/static/5c4e7330a47c22ff57ee018be719ea0d/51a28/writing-is-designing.png 432w',
                        ],
                        sizes: '(max-width: 432px) 100vw, 432px',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Smashing Magazine’s “Design Systems” Book',
                  href: 'https://www.smashingmagazine.com/design-systems-book/',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
                  'span',
                  {
                    className: 'gatsby-resp-image-wrapper',
                    style: {
                      position: 'relative',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      maxWidth: '500px',
                    },
                  },
                  '\n      ',
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.199999999999996%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACqklEQVQozwGfAmD9ANHW3c3T18vP0sfM0czDxvFeYvRFSfRKS/ZHSvRKTvFTWPJSVe9cYP5SVq9XWXh7e46GhJiRj56Xl6eiogDJz9bDyM7AxMi8wcbEub3xWl70Qkf0R0n0RUf0Sk7yUVXyUFTvTFH+TVGnUFFqa2qIfHqZj42jm5qloKAAx87Ww8jQvsHIusDHxLe871ZZ80FF80VJ80NG80dL8E1R8k1Q7k5S/0dKmUBAWVpYg3Z0k4mGm5GQoZmZAMLL1cHH0bzAyLG5wta2tfVUVfE9QfI7P/I8P/FESO9OUvFLUO5PU/o9QcNfWn1xZnBiYYN5d4qCgJWMjQDEytHAxMy4usK2usHVo5vkQETxbXbvgofyVFfyP0LvS0/wTFDwSk71YmPnppOccFtgU1B0aWh+dnWLg4MAyM/Tw8nMvsDD29PQ1K+cuVtQ3ElQ5V5k7U5T80JG8ExR8EpO+EpPwl1ezLGhwntbg1tLZmFhdm9vhHx9AMjQ1cLJztDS1PHk286jjpZiVLkoLeo4PO08P/NFSfFMUPNKTfFPU+J/e+XGtcaEZatxVGlfX3dub4d/fQDDyc69wsja19ju3tXGl4CSYlOwLjT9REfzQ0XzRkjwRUv1TVHgQEiwj4ns0LfHk3TGi2h9ZVxqY2ODengAvsbMucLJ1NTR5sy+w4p1f1tPtTA3/kVI8kNF9EpO8U5U9VBU509WrWdn0J6E1KODsohtfWJXWVJRb2pnALvDybW/xMTN19a9rM9xX9xGSfBFSfdGSvZFSfRNUPJSVvRNUfZPUvE/RMRaUL6Se4djVmxZUmRaVXdwZwC3wcizv8S5ws7X2NbkuKb3UlT4TFD3Sk73Skz1UFPzUlf2TlH3REj8Q0jDaWGFaF1yYF5nXFduZV5+dmxQOXgjeLaf7AAAAABJRU5ErkJggg==')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'Featured 01',
                        title: 'Featured 01',
                        src:
                          '/static/529e9fe384d5fe1ba1314a1940e79338/36a81/Featured_01.png',
                        srcSet: [
                          '/static/529e9fe384d5fe1ba1314a1940e79338/7fc1e/Featured_01.png 288w',
                          '/static/529e9fe384d5fe1ba1314a1940e79338/36a81/Featured_01.png 500w',
                        ],
                        sizes: '(max-width: 500px) 100vw, 500px',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Path to Design System Maturity',
                  href:
                    'https://medium.com/ux-power-tools/the-path-to-design-system-maturity-d403daba692a',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACG0lEQVQoz63SXUhTcRzG8f/O/5x1nM2XzFxWEhkUhgZlGgqiEeGVRbWwQkoyECRZhSVdWFBQGQYWaIuioswYGLGs1GAznW6ap4S8iQyiRmXaRRf2wtRvhyXRXTdefG6eH89z9ROa1BBCzJ15CToWmwUlVkWxxc6KMy00JaHoKShaGhZrGrqWSpy2CLuWQqJqZ4GMiUpSVJOMEnqeWdxgR+Yko6zP+2PdJmRWKXKtE3XVQaxL6rAsqyPdUUNR0iHyk11s04vYo2RQKjNxynicqm6yIeIq1qCXrzRlYSnbFyX2ViN2NiGclxBbPcjNw4gtL8jP7eVoRheVmT7qHdVctRfTHF/ClYQVuBMduBNSEcsvF7O0sYjFjSXIhnqUi+dRLlxHPT2CPDOM7eR7HDUzzK+dYn9FhNbtv3DvmiZYeIPRnMO83lhLOLuYT9kFfMwuROR1HiC3o4ysjirEYy/iiRetPcDqtu+k35+kwPODqtsRylsiNDVH6KmforNhhvAJHz9dN5k8coeIq44p1zHTccS5iRbOfr3FqYk2do9/Zsf4GJVj37j2AdxhaH0H/jfQNQqvRmDMgPBLmA5+gV7zEHgL/WYYHDQ9R3gGvNwLPTC10xoKcjcUwhMc4GFgCG/fEI8CBk97DDp7DbqfGfT7DfpMg/4ghi8QNeTrNvmjRIweg1QUVClNyl/yvyTKLPkPIVU5t49ttVrndPA3TH2ZC9b4dTIAAAAASUVORK5CYII=')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'Featured 03',
                        title: 'Featured 03',
                        src:
                          '/static/6d6534366db787b6196b0c42f6588a4d/3cbba/Featured_03.png',
                        srcSet: [
                          '/static/6d6534366db787b6196b0c42f6588a4d/7fc1e/Featured_03.png 288w',
                          '/static/6d6534366db787b6196b0c42f6588a4d/a5df1/Featured_03.png 576w',
                          '/static/6d6534366db787b6196b0c42f6588a4d/3cbba/Featured_03.png 1152w',
                          '/static/6d6534366db787b6196b0c42f6588a4d/362ee/Featured_03.png 1600w',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Responsive Web Design Podcast',
                  href: 'https://responsivewebdesign.com/podcast/ibm-carbon/',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA+klEQVQoz61SuYqFQBD0PhADrz/wa0QDj0gNFBMVwUDQUCP1r2uZARd30H3JCwpqenqqq5rhJEmCLMsUhN/Pn/DUy92FrgaWswPZ2qMg26BpGniep1wURQrCFUWBqqr07qrd3/8RvKZnWYau6xBFEfI8RxAESNMUTdOgLEssy4I4jp8jP7mbpgnbtmEYBrRti3VdcZ4n5nlG3/d0ALm3bfs3xatDEokIHceBMAyRJAnGcURd19RVURTY9x1VVdHojztkHbquC8Mw4HkeLMuiME2TwnEc+L4PXdffd8i6FASBNpM4hF9nAsI5jnsUe3X4CWQt//7Db+Lrgj87WQr4OPCXlwAAAABJRU5ErkJggg==')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'Featured 04',
                        title: 'Featured 04',
                        src:
                          '/static/b122599652c59cf2d2982ae7263941f7/3cbba/Featured_04.png',
                        srcSet: [
                          '/static/b122599652c59cf2d2982ae7263941f7/7fc1e/Featured_04.png 288w',
                          '/static/b122599652c59cf2d2982ae7263941f7/a5df1/Featured_04.png 576w',
                          '/static/b122599652c59cf2d2982ae7263941f7/3cbba/Featured_04.png 1152w',
                          '/static/b122599652c59cf2d2982ae7263941f7/362ee/Featured_04.png 1600w',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'UX Pin Virtual Design Summit',
                  href: 'https://www.youtube.com/watch?v=eSvq5MieOdw&t=144s',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAAxUlEQVQoz61SOwqEQBQbxWIsVbT0Amqjjd/SQsEzCB7Eq0fyYBd1d2VWLMJA3ntJIKOUUvgFrTVc1z2A3NWNOhOWZcmbZRn6vkdd1+i6TlBVlXBpmh52LwVt25aXAp7nfRz4vi+z/a5RwrIsEQQB4jhGkiTI81x4mjCpccK9YBRFmOcZy7JgXVdM04QwDO8J8oiCTdMIaFAUhXC3BFkGWz3PydHg71J4NI6jpGnb9t3yMAxiZlzKC47jSKPfwJnxP3wAzwpufIv6LWwxSZsAAAAASUVORK5CYII=')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'Featured 05',
                        title: 'Featured 05',
                        src:
                          '/static/185fdaf050460794754430f970969721/3cbba/Featured_05.png',
                        srcSet: [
                          '/static/185fdaf050460794754430f970969721/7fc1e/Featured_05.png 288w',
                          '/static/185fdaf050460794754430f970969721/a5df1/Featured_05.png 576w',
                          '/static/185fdaf050460794754430f970969721/3cbba/Featured_05.png 1152w',
                          '/static/185fdaf050460794754430f970969721/362ee/Featured_05.png 1600w',
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
          ),
          Object(c.b)('h3', null, 'Articles'),
          Object(c.b)(
            p,
            { mdxType: 'Row' },
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Seven new UX patterns for Carbon',
                  author: 'Jan Child',
                  date: 'January 9, 2020',
                  href:
                    'https://medium.com/carbondesign/seven-new-ux-patterns-for-carbon-f4a18c20c535',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
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
                  Object(c.b)(
                    'img',
                    o(
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'New in Carbon: October 2019',
                  author: 'Tyler Tate',
                  date: 'October 10, 2019',
                  href:
                    'https://medium.com/carbondesign/october-release-fadc38b757ad',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
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
                  Object(c.b)(
                    'img',
                    o(
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
            ),
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Help build Carbon — Hacktoberfest 2019',
                  author: 'Connor Leech',
                  date: 'October 1, 2019',
                  href:
                    'https://medium.com/carbondesign/help-build-carbon-hacktoberfest-2019-dbf337305c92',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
                  'span',
                  {
                    className: 'gatsby-resp-image-wrapper',
                    style: {
                      position: 'relative',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      maxWidth: '600px',
                    },
                  },
                  '\n      ',
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.333333333333336%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAADKUlEQVQozx2Q21NSexTH90NpXvPpPDg6Ch411KQaMyfNSBnJHYGlYBZNRdZkY3Yxy85ogIhswThaE2ialwQp5KLlNdSonC42U//O72l92/LwnbXWw/qs73dx4YUNer8Uw/LqF7xf2kJ08we2YjuIRrfw6/dvmB2D6HgqILbzC9OBd7AMjWBhcxPC8AjGvG/QfK0V9uEXULcYYHI4iVv8sEUflmNYWftKy6ufafXjNm182qHtL9/pY3SdHlp66Z7ZQbGdnzQbDNCQZ4LWv22T86WHPHNe0l8x0rPxKeIvGzE09oq49egPWot+w8ann/R5+w+W1mJwz4zDNSOgXlmBrvsG9I260dHZjZvtd9DW8RAO0VFPnwCb6LbjUS8GenqIP1mNurNa4ianZyiysIKxidfkHvVgfHIUqsYTUN2oRj1fjrZLZ9DdfxcVNWqUK1TIzc1D2bEqVJ6oheLUaRGiw6OWZmo9VYmEpBTi/h95Rr45PwKBeZqcmkDgnR8m4T+UN5XilvEM6o/KkZmZjSJFCw5X88iT5qGoRI4CWQlkxaUolpeht+sxqZU1SN+/n7jI4hJFIovwzb2lcCSC1ZUVtLZfh7y+AIYnZ3GxTYUanRqV5wwoKDmEmto6GFtvo0uMajILsFid8PmCZGzWIXHfPuL8bwMUCoXxxuulYHAe4XAQag2PrOJ/wF84huvW8xiY74YrYkIVfxwy2UGUlVdAxWug01+EVtsInteQrFiO1NRU4gLzIRLjIhQKkc87S8MuJ+katXToSCkpq45Qg6aCrph11Ou+T1W1lZSfX0gFhQcoJ1dCe/fuIY7j4kpJTkZGRgZxzkGBBJsVNosJA1Yz7KJcDntcA/0WPOnuROfjO3g+PARVXR2yc3JQKJMh79/8XQCSk1OQlJQU79PT04mzmnpI6O8ju9VCtj5zvO7OLuegeMhCt24a6dpVAzXpG6hWqSBZ0QGSSKWUK5FSWloaJSYmUkJCAu3C4kCH3cbEZeZ+PsImxjxsavwV805PMv/sDAv6fezB3Xama2pgev15ptHyTKlUMIlUwrKyspn4MyYCmQhkIoyJB9hfquTs+yV44j0AAAAASUVORK5CYII=')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'hacktoberfest',
                        title: 'hacktoberfest',
                        src:
                          '/static/906809a1a62778f4d9629a303c5e617a/dadad/hacktoberfest.png',
                        srcSet: [
                          '/static/906809a1a62778f4d9629a303c5e617a/7fc1e/hacktoberfest.png 288w',
                          '/static/906809a1a62778f4d9629a303c5e617a/a5df1/hacktoberfest.png 576w',
                          '/static/906809a1a62778f4d9629a303c5e617a/dadad/hacktoberfest.png 600w',
                        ],
                        sizes: '(max-width: 600px) 100vw, 600px',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Because, colors are beautiful',
                  author: 'Shixie Shi Trofimov',
                  date: 'September 25, 2019',
                  href:
                    'https://medium.com/carbondesign/because-colors-are-beautiful-52dd4cc39f09',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACB0lEQVQoz2NgQAKMYJKTjdnXy88/stjExE5N207RNNHAZ6KJ12Jbt3ZT20Bv7xgtZWkGNMAI0srIysSgY+JikLZPK26TpPd8Lt/1ArGnhGKOCRpUiahFS1kkhycUZkZ7KclLCgrwwnWCtHJycFnpyVt6pTIk/mdI/s+QCkZARtI/HosCGQ0zJdtAVyeHyAB3GxMdXm5OkFMhOkWFBC0MdUw15SX0MxiT/jMm/WVM/MOQ+Icx6R+QLWKSpKYsL2vhqq1v7J1aauwSzM3GDLKWhZlJQ1HG2khdQ1FZRztBxXsnQ9J/ZMSU8p9D1lmAk0nN2NzYN8opJMHAxAJkIQc7q7OlXoSXja2hirxykJX/Kin3NQwJfyCuZUj6ywByxT8GMSugah5OTlN9TUMtJU52FpC17rYGOXF+rtaGEiJCKvpx1klLJX0XMST+Bfk2Bejhf2DyP4O4LThsmJXlJPn5eKBBFeBmY2duKAgU4OI1M7CICSlQsZ3CGvmGPewOS9AFnqibXJHX+WNuMokYgTUzocQQOxsbMzPI6/y8Mia6IZ425drGk6UtZqlbd0opu5gZW3j7BKSnJrFzcEISAiMDRhyDgo2FXUsjw8h2uprdZEXbFiPfGVb2FXoa6sZ6Wjmp0Zh60NOIlnaotnmDrFGholGcgUWGk2O5v6eLvIyEi4M1UAUTE7oJAHraghklcb51AAAAAElFTkSuQmCC')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'because colors',
                        title: 'because colors',
                        src:
                          '/static/42a8ab0e55b5e89dc1daf43ea7ef358d/3cbba/because-colors.png',
                        srcSet: [
                          '/static/42a8ab0e55b5e89dc1daf43ea7ef358d/7fc1e/because-colors.png 288w',
                          '/static/42a8ab0e55b5e89dc1daf43ea7ef358d/a5df1/because-colors.png 576w',
                          '/static/42a8ab0e55b5e89dc1daf43ea7ef358d/3cbba/because-colors.png 1152w',
                          '/static/42a8ab0e55b5e89dc1daf43ea7ef358d/362ee/because-colors.png 1600w',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'What’s around the Carbon corner: October 🎃',
                  author: 'Josefina Mancilla',
                  date: 'September 6, 2019',
                  href:
                    'https://medium.com/carbondesign/whats-around-the-carbon-corner-october-a47532f2933',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABIUlEQVQoz5VSu07DQBC88A4BCpoAFaKDBDuOkHABH0ESB/MQCCEMIggI4tGRmgLlCxAFHzrMXAyyEJbOxehWs3Nzu7dr9k0NWXTNhj0jnoelGi6nPcsJisVFqeZHm4X5SwhtCm/KDfTnArwvhbivBL+xTuXa/5jlGrbMOh548XzSQzLl4aA04i8Yi1NOGmdDvX5XaeB0vI6jsTpicjI6Znw2sWlzhSrsUHw94+Otuo2P1R18Eq+LW/ha28XLQhO9sm81hQx7/KcBTYbLIYYrIZ5p9DTf5GB83M4WrHDUcmAnqkm2CLW+x39T28o5G8bpUB5ZjaarQVyxfa1MQohTTprYtULt2QkHovaS1MiC5uKUi1wrzC52JweFF7ub87qL5huqa1P5DQFe0QAAAABJRU5ErkJggg==')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'october release',
                        title: 'october release',
                        src:
                          '/static/5279b4dec5f1437a44da17b38a75460c/3cbba/october_release.png',
                        srcSet: [
                          '/static/5279b4dec5f1437a44da17b38a75460c/7fc1e/october_release.png 288w',
                          '/static/5279b4dec5f1437a44da17b38a75460c/a5df1/october_release.png 576w',
                          '/static/5279b4dec5f1437a44da17b38a75460c/3cbba/october_release.png 1152w',
                          '/static/5279b4dec5f1437a44da17b38a75460c/362ee/october_release.png 1600w',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Carbon for IBM Security',
                  author: 'Jen Downs',
                  date: 'August 20, 2019',
                  href:
                    'https://medium.com/carbondesign/carbon-for-ibm-security-986ccfe5c012',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25990491283677%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACJElEQVQoz13OzU8TQRgG8Nl953M/Zr+63bbbbbvd0lIKFEtpDRhRLLiBcOJgIBG7IZpIPHjhoEn5OHjxYGL0D3aknkx+eTOTeZ43gw6aX2at28PWw6v0Yb/9sJfdT7O7Ued2c2UxWFn0uoust2itLpK1+9rGt2j4PXjywx3/NHd+iclvtFU+344ux5X5qFoMq8V6rejHRS+ed+rzNJk3knncmFebRZS+D7ProPvZ7d/IwVexseCbdyhzD7r+UdfPlU6Qp0HeLOVJKa+Hecmbed4sjPIgOvaqp2585jQvZFqY2QfW/ch6n1BsjRI5SeRUieW04kwjZ1p2Jp61vZIdtdOZJcfSm9jBrhXuW9GhWTsVyRlrvqGtC1QW/chYrxgbaobmIFCsdZt1R5uvT0/eXV3d9FZfEJ4ZciCcofAnPHzGKgeklpP4BHms5fMseKQOUrSlkQpS33t6HHidy7fXo9FLpJW40WRmxuw+dbdIsEPCXVJ+jiSNHZYsSVa3WWzxmOFyEq9l7eH5edFIVpFmExYSXiFGg1gd7Kxhbwv7Y2SSyKIVm1bUNGkkaJnTEsO+oJ7nVqOwwbmr6wZgG4gLLAQRg5mC3QNngDjxDRIsCeIz7DLsULBANzRENYR1jeo603UOoFZIoAHwKhgNsNqIglTpJYodAjYGE3QBfwuqRjQNHuHHKwdsAfWBRyBqSEUJWEvLmv6vhjVN/4/apV5BxYijvvAHZ1xLAFwIvlcAAAAASUVORK5CYII=')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'security pic',
                        title: 'security pic',
                        src:
                          '/static/ea1579d8995f51aa6c97c6617b0fb544/3cbba/security_pic.png',
                        srcSet: [
                          '/static/ea1579d8995f51aa6c97c6617b0fb544/7fc1e/security_pic.png 288w',
                          '/static/ea1579d8995f51aa6c97c6617b0fb544/a5df1/security_pic.png 576w',
                          '/static/ea1579d8995f51aa6c97c6617b0fb544/3cbba/security_pic.png 1152w',
                          '/static/ea1579d8995f51aa6c97c6617b0fb544/3a43e/security_pic.png 1262w',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Carbon: July recap + August preview',
                  author: 'Josefina Mancilla',
                  date: 'July 26, 2019',
                  href:
                    'https://medium.com/carbondesign/carbon-july-preview-whats-coming-in-august-7a2483ea6ac9',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABAElEQVQoz51SXUsCURT03/vUP5AiEOmliB4CJY1q/QoWtdL1O0xdF/oNd6Y7e1EWuYTrw3AuM3OGe+65hXhEHmM7BHcRufkA520ceJ3FSZPH11vwhk3IyQsY1cF22dZG5myrNHl8od7AxJpHT+CyCy50q0+HRcdy70i1JG/g+Bn86dsGjfeFFGs77ipEquUK3I3JWQD27sHHomGnAgaXhtULw/4DOH1znlyBagpvwdeSYXBl2L0Bm9eG4d0ZgRpHi9C7/X4zHVucFrEenDFyMiWHNbfdecth1nQLEidNnpMDdaNVzwVpswraQ5y0ODoxMBuqd/Ihzvux9/U/ZL1Z/AGiTSpzBlTieQAAAABJRU5ErkJggg==')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'Aug preview rev 2',
                        title: 'Aug preview rev 2',
                        src:
                          '/static/b558991c9a30ddfef6d177e1251e4b7d/3cbba/Aug_preview_rev_2.png',
                        srcSet: [
                          '/static/b558991c9a30ddfef6d177e1251e4b7d/7fc1e/Aug_preview_rev_2.png 288w',
                          '/static/b558991c9a30ddfef6d177e1251e4b7d/a5df1/Aug_preview_rev_2.png 576w',
                          '/static/b558991c9a30ddfef6d177e1251e4b7d/3cbba/Aug_preview_rev_2.png 1152w',
                          '/static/b558991c9a30ddfef6d177e1251e4b7d/362ee/Aug_preview_rev_2.png 1600w',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Carbon June(ish) preview',
                  author: 'Alison Joseph',
                  date: 'June 12, 2019',
                  href:
                    'https://medium.com/carbondesign/carbon-june-ish-preview-9c5843258933',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABCklEQVQoz52Sy07CYBCFeVEfwfAILkzcydpEl6KI8YoYWRgB0dq/gNU0BkUpmvgcn//J4CVSTWFxMn9nzpzOrRCO4DduXiBKoTOE+t23X2/5FBMnK7eQJdYbw34PKg5W6rDjbSW0t3yKiZMlOiUYeFL/Fba9QCOB03u4fjac+ArPEouJE+QV1N93Izh/sBYldvkEXe9vDqAaGSe3oBL3unB0C8UtWDqExTIsrMNaEw76npPOKKg5lQMoNWC5BqsTu9GeCI7naLn1CPGbfWtmyTtcDedoWcmbvrqqs1OpxXAc21K0ccVyL0Wn4Ly9GJiAtvwT8inmRjnP5ks0tTllwc162J/2P4R/VPgBRqEWJ5oiFgYAAAAASUVORK5CYII=')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'june option 3',
                        title: 'june option 3',
                        src:
                          '/static/b3c5a4c9496241cad972ee6efd003bc0/3cbba/june_option_3.png',
                        srcSet: [
                          '/static/b3c5a4c9496241cad972ee6efd003bc0/7fc1e/june_option_3.png 288w',
                          '/static/b3c5a4c9496241cad972ee6efd003bc0/a5df1/june_option_3.png 576w',
                          '/static/b3c5a4c9496241cad972ee6efd003bc0/3cbba/june_option_3.png 1152w',
                          '/static/b3c5a4c9496241cad972ee6efd003bc0/362ee/june_option_3.png 1600w',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Carbon v10.3.0 (May 2019)',
                  author: 'Josh Black',
                  date: 'June 6, 2019',
                  href:
                    'https://medium.com/carbondesign/carbon-v10-3-0-may-2019-41b1f970f0ce',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABBElEQVQoz6WRzU7DMBCE+/4PxYUjHIqEqiB+CrRJmthOvLbXsZ0L46SpKpUiENLI2tj7ZcfjlXHhD7KTls/VZYfleCpO9Sw3BI7Y/w6eW1XvyA4oZGc74rPTsP+I2yJqCoYXmGzoyc+rUHZXKTCiswdBdau18RlmnIaXIt3dpKd18ilTE+yGWmjZu0YQhjeSAB8kYQe87Bz7aOHZZ+D+dnx/jhwWGADmfFaqn0yWTd92ppGmlabKk/mgUi0T3O7K9LgeNw+jjwsMwRu684U1Y1qrjDYDLOCnGFiKtG8T7vz6NhabUchjZkfYXoRsz9J2nIWCkXa4kvY10aQ5Wvr5nX+vf8Ff27hxgCHQDFoAAAAASUVORK5CYII=')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: '10 3 image',
                        title: '10 3 image',
                        src:
                          '/static/e38fff8d6d6881c0aff16f2c23ae186b/3cbba/10_3-image.png',
                        srcSet: [
                          '/static/e38fff8d6d6881c0aff16f2c23ae186b/7fc1e/10_3-image.png 288w',
                          '/static/e38fff8d6d6881c0aff16f2c23ae186b/a5df1/10_3-image.png 576w',
                          '/static/e38fff8d6d6881c0aff16f2c23ae186b/3cbba/10_3-image.png 1152w',
                          '/static/e38fff8d6d6881c0aff16f2c23ae186b/362ee/10_3-image.png 1600w',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Essentials: Learn to build with Carbon',
                  author: 'Matt Rosno',
                  date: 'May 15, 2019',
                  href:
                    'https://medium.com/carbondesign/essentials-learn-to-build-with-carbon-1d11ce05125f',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB5ElEQVQoz4WS227TQBCG/R7cENu767XXp/jsYJq0ObTEQYFKQYFWlUB9AC645tF/ZrYUrAqJi18ez+x8O/PbTqAUAt+HfUoFRXGoI5gwg1LSimPOKToj/Bnm/Q7F4sbWwiix0qGxdUdpDbVYQEUhgjiB2xa4ak4Yij10EFpxzDnJAKUtjKFJ+Qbt5ouN2/UZwnsNh6eT7w8Qn8+Q9/dwtytcFkdoHWK/+GbF0FX9ETf9A06rH1DChzd7hXIYUa9uEectuusHSMo7KggglxdQaYpgXsAdGqybT+jnO+RxY7WgmHNKCcQhneOtqDlrrmjCM/J2jW579zShmniohID0XJgoRWYq+NK1Sk2JSJMdwsOMxD28Pm8RJXNEcW59ZE+dgCYUUkIQLDKGCgae72JGtxUmxSpvMKQFcsp31LwreoSBxnrewRBQSgElnz4esxwGtV2Pqq6RZpnVeDhiOx7wobpAHWeoSMd6ie+Xt/i5u7O5U7eGRzBNcAax7FeWRM+yHMbEaNrOAjebHZabLa7zDkNWoU8K7MsBj29HfB3eYawGmrq0wGfQM9SuzFDf91DXDZIksbFPpvNKvCYr/v0fsnc9+0a1KegPcJrk9Rk+XcH6az36e86fvL+EOtPml7f9T//q+QVVW1XENoBPPgAAAABJRU5ErkJggg==')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'code palette',
                        title: 'code palette',
                        src:
                          '/static/2ecaac64ce5fed2bdc0e66e02ab15bf0/3cbba/code_palette.png',
                        srcSet: [
                          '/static/2ecaac64ce5fed2bdc0e66e02ab15bf0/7fc1e/code_palette.png 288w',
                          '/static/2ecaac64ce5fed2bdc0e66e02ab15bf0/a5df1/code_palette.png 576w',
                          '/static/2ecaac64ce5fed2bdc0e66e02ab15bf0/3cbba/code_palette.png 1152w',
                          '/static/2ecaac64ce5fed2bdc0e66e02ab15bf0/362ee/code_palette.png 1600w',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Carbon is moving to a monorepo',
                  author: 'Josh Black',
                  date: 'May 10, 2019',
                  href:
                    'https://medium.com/carbondesign/carbon-is-moving-to-a-monorepo-c6bfcbe87de0',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA90lEQVQoz5WSOQvCQBCF/f8/QGxVsFHQQvFsLETBRsQ7iTFeiUfwxESjPGeXRGTRaIrHDLO7H/NmJyQ5DkSNbrdXlCn2bJtLFs4+vQ19KorQ7HrF9Qv2Ezi+31E/HpE2dK4G5awWGOhZ7ZDNtK4jPtUQJaWWC3QF638DvZxBEvMZB+Y362AzZJc88Q4tCxmymjEMJAk8uF6hCPMVwb6WFZpXdb9DWJEQow77BFSpJgftUHLn17pc+MwqponIWEHzfEKbuu7Y1n8dvtutHQ4obDcom1sOzNHalCgvUo2dyUEts/WYPB5QXWluZDW/1flqmcXhF/l9yhO6+DzduFcIdAAAAABJRU5ErkJggg==')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'mono repo teal',
                        title: 'mono repo teal',
                        src:
                          '/static/bb9a6f1825347ece1435a36fc31a8eea/3cbba/mono_repo_teal.png',
                        srcSet: [
                          '/static/bb9a6f1825347ece1435a36fc31a8eea/7fc1e/mono_repo_teal.png 288w',
                          '/static/bb9a6f1825347ece1435a36fc31a8eea/a5df1/mono_repo_teal.png 576w',
                          '/static/bb9a6f1825347ece1435a36fc31a8eea/3cbba/mono_repo_teal.png 1152w',
                          '/static/bb9a6f1825347ece1435a36fc31a8eea/362ee/mono_repo_teal.png 1600w',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Carbon dark themes are here',
                  author: 'Lauren Rice',
                  date: 'April 29, 2019',
                  href:
                    'https://medium.com/carbondesign/carbon-dark-themes-are-here-a18910a0f910',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACMElEQVQoz6WSTW8SURiF+QWEDxkmKlU7wDABi0CroBWMQLS1VRfiQo0xYaV/y42JLoyJaWqiiYvGLmxTP0jaUhOwUAbGFmaGGbAEjnduh0LXvsnJndk8ufc9jwVkBoMB+v0BPY2oqgpFUdCSZWiaBlEUEY1G4fV6IQgCDc/zYFkWDMPQ0+1202+LARifIdBIt6uhd9hFrVZDLBajwMlJDhzHHQNdBGKz2eFwOCjUYlKwuSWiXGnRXwPWJrdbW/+F7R0RktRAhNyQ93mxMHcLqVSKwg0gy7gwm4gjEonA6XQeATdKTbxeqWDp0zZKu02g38VKoYqXH4t4t1zA2kYR09EwEuk53H/2Avl8HslkEjarFVPx68g8eIpcLkehlkbnEB8qKn4QzpuvEpqSjN2WgrfFOlYrGl6t1lD4vol4OgNh/iG4q/PIPHqOa5djYC+QFaTvwhWcxczCY4RDAiwlrYPP0gH29R6Wy2365J+NfSz9rqIsNfF+pwlZrCKWvY3gnUUEozMILz6B13ManlCYALM4Q8DcjXs4ZbMePflbS8WW3IHe69N9tskOv+zVsb73BweqhrrZsnAzi1AqDeHiFHi/HywpYeJKAp5L02DPToBxucxSxqZvtvy33UaHnB1dJy2b2pw/h4DPhwDvH7Vst4MhZRgw2jJ10MxgTBuZeCjLCvFQP/bQZ8CIg4FAYOQhgbjNUA+H7g19HBfbiK7rJ8Q2YCeABDKEjTw0Qf8DHOYfP/pDvsfuJB0AAAAASUVORK5CYII=')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'carbon themes',
                        title: 'carbon themes',
                        src:
                          '/static/2268a7c70b515afa8d39286b8c72dd96/3cbba/carbon_themes.png',
                        srcSet: [
                          '/static/2268a7c70b515afa8d39286b8c72dd96/7fc1e/carbon_themes.png 288w',
                          '/static/2268a7c70b515afa8d39286b8c72dd96/a5df1/carbon_themes.png 576w',
                          '/static/2268a7c70b515afa8d39286b8c72dd96/3cbba/carbon_themes.png 1152w',
                          '/static/2268a7c70b515afa8d39286b8c72dd96/362ee/carbon_themes.png 1600w',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Carbon v10 Release',
                  author: 'Robin Cannon',
                  date: 'April 4, 2019',
                  href:
                    'https://medium.com/carbondesign/carbon-v10-release-812eacb7da7f',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACHElEQVQozz2TT09TURDFL6iFlhL5o5SCAi3VYoJs3RgTFwJCpRgQLaioiJgoJoaVrl2ZmLhw48LvRV9L29fXkn6L4/wu0MWk7bkzZ+acmbprz+vKH5xq4lWom7tNxdcquvWhrdn3LY3vNDRpeGYv0sy7yH9P74TK2hs58ScVXwPGb7jc9Rd1D/QVAiXXqz4BDLLe5bJGt+x9u+mDgkuG8UYOuYNPq7qyEhgWeszBPLpVU8/S8XnyWbeBYlW9S2XFi4HuHDU097Whwc1APYvlroqJl6EuPy772qHNmscck9FpxEjT513AkJxYs+6rZT341bQIldwIFFupKLffUr/JZXpsGDayqTeRr3O3D9oipg248bqp4Wc1LXzpdL2Z/1bXvR+h7v9sauF7XWOlujLmJzlDGyeeMLvX6oaDALLx7YYnHCs1vAVTu5Fyn0IV/kV6+LupR38iLf+NTHpo+S3vJxPSOGW1028jL9tBBICxyEibLwQFMZOAh9nDE+WPakqsB14WQ+AfkTA/8T5lg7AsR4eL7fUXKpq0KZFx1eS4xWMNmI+pUugjWTzDmIQcom818NfADuBySMRDPpFMcm6/7QOPwHhngxRgR86+4xeT8o50clDr8h9PNWtbw2gA7uruYccn4QuNsIQFoYTtjxjR/OeOv1tqOHrq54zL4R0+ZKzjxb+A24KI3wSTchrcKBNBGDOpqKDZjDXmbqn7D6ih/1qnMkxUAAAAAElFTkSuQmCC')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'bee 70',
                        title: 'bee 70',
                        src:
                          '/static/a6fd670a64cc87707b807f1ce30314d5/3cbba/bee_70.png',
                        srcSet: [
                          '/static/a6fd670a64cc87707b807f1ce30314d5/7fc1e/bee_70.png 288w',
                          '/static/a6fd670a64cc87707b807f1ce30314d5/a5df1/bee_70.png 576w',
                          '/static/a6fd670a64cc87707b807f1ce30314d5/3cbba/bee_70.png 1152w',
                          '/static/a6fd670a64cc87707b807f1ce30314d5/362ee/bee_70.png 1600w',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title:
                    'Design with Carbon: Update your Sketch symbols to V10',
                  author: 'Anna Gonzales',
                  date: 'April 2, 2019',
                  href:
                    'https://medium.com/carbondesign/design-with-carbon-update-your-sketch-symbols-to-v10-ef3132ea2e97',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACaElEQVQoz4WS2U9TQRxG+dt88IknIkYFDRTQAiJBYoh7CAooAlHDYkjZ2rJEFsMm0ApULE2A1EJBIIKxpMgipHShd2nLce5FCYkmPpx8D3fmzDe/uUkt1l5Ky1+Qk1fI3cdPKK96xeWMG6Rn5XEhzUCqIM2QS3Z+MQXF98gvKqHwzgOd6zdvYzAWCG6dktTa0UdRyUOSUy7xqKwC54yLdksH1s5ukVbazBa63/bQ0m4RYiMXr2ZxJdOoH5qabhCHZggyT0nSGtbWmSitqMHUMcD67jEbuwl8B/AjBP7gSS77wrxp7aTBZKFe0NhspbbeRHl1HZW19VTWnJDUbOmhd8jOxKSD171eUurjGFpiXDOpJL+UOV8tc65KwdCscBAIo8iSQCERj7Gytk7foI2hsSkGRyd1dGH/sJ0Rm4Mpl5clXxTPRlDkESt+meVNiVW/hHP1iKIuFaNZJVeQ2ZKgcXSHJa+X2c8rzHu+6JwKh8YczLm9RKMSgUCQYCiMLJqoaozjuMr2fpTnIwplAwpPB1Xu96mMeGQksf4wrBKMqARC8tmGH5l2ufH59/i2uSPYZnNrj43vW6yub7K1/ZNoOEhcOYK4rGdMjugQl3TiSuS3cMjG6IdPulTjvX1az/HJGdq7+qlrMuNwzrO7HxItxA1Cin6TyWVJb/xsRKVyWEP5t/APmtDc9U5/VduUi5lZD665BZyzi7jdbppG/WS3JchuVclqjZEj8i+h1u5sQ03YYLIyNuEUrzilv+jwuEPssbOwtKbPWZujJMlEIkf/F7afEf75pq3VfpHF5a9EpRiHYgzBsCAi8wt0+LfXDE5tAgAAAABJRU5ErkJggg==')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'designing with carbon',
                        title: 'designing with carbon',
                        src:
                          '/static/cb16af7c4133c836858fad22ab3287c8/3cbba/designing_with_carbon.png',
                        srcSet: [
                          '/static/cb16af7c4133c836858fad22ab3287c8/7fc1e/designing_with_carbon.png 288w',
                          '/static/cb16af7c4133c836858fad22ab3287c8/a5df1/designing_with_carbon.png 576w',
                          '/static/cb16af7c4133c836858fad22ab3287c8/3cbba/designing_with_carbon.png 1152w',
                          '/static/cb16af7c4133c836858fad22ab3287c8/362ee/designing_with_carbon.png 1600w',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Minimal CSS with Carbon',
                  author: 'Josh Black',
                  date: 'April 1, 2019',
                  href:
                    'https://medium.com/carbondesign/minimal-css-with-carbon-b0c089ccfa71',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABLklEQVQoz62Sa0/CMBSG+U8qxgu3jTGY3a3r7hdBJRkS4u/wkz/59bTIsgkJCfrhSU+75um70/b6D2PcDjTc0Hh1N1TjJUhH/3GCnhTKYjhdwLR9aKZNOIqJyc6izW0M9LlySGlPFtf3I1heiNd6Bz/OwUIBOwqpLrokBbyk7KwFaYUZ85uUJNxH1hcOnDBBFNfYll/Y5J9g6RKMDnBFCjfM4AcJOI9VfUBKjSfvWDi1XHA6nUcV0mSLsvyAqN4gyhdExYrSldDXNcbvOzgk8VrC2SmhTMjpI6PfYnEKnuYQ2XODJ5Os1iTdwKb6fEJaFNQPJ1/CJYEf5fBaqH6RIBDZUQ9Nm7eEnVvmKr6CGv0bow3tMX72jQyrdcutN3TpGzzImncoJ3/lZML/EH4Dwd2TAESZxrMAAAAASUVORK5CYII=')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'minimal css',
                        title: 'minimal css',
                        src:
                          '/static/637ec351619c02ce5a17cba989b4c31f/3cbba/minimal_css.png',
                        srcSet: [
                          '/static/637ec351619c02ce5a17cba989b4c31f/7fc1e/minimal_css.png 288w',
                          '/static/637ec351619c02ce5a17cba989b4c31f/a5df1/minimal_css.png 576w',
                          '/static/637ec351619c02ce5a17cba989b4c31f/3cbba/minimal_css.png 1152w',
                          '/static/637ec351619c02ce5a17cba989b4c31f/362ee/minimal_css.png 1600w',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'What to expect in Carbon 10',
                  author: 'Robin Cannon',
                  date: 'December 10, 2018',
                  href:
                    'https://medium.com/carbondesign/what-to-expect-in-carbon-10-5af1bd6e25f6',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACqklEQVQozwGfAmD9AEJDU2deWpWNiZqTjlROT09JSJ+alsvIxJuTkHRmZJGMis/MyLKvrMzHxJOPjrezseLf2efl4N/b1t/b1gA7OElUTEmdlI+loZ6HiYyGjJBrZ2ldWFh3cnGEfXtZU1TPzMrGw8GfmplgW1lsZ2bX08/s6OPy8Ora19IAT0lNgXp4pJ6ar6qotbe5tbm8npycl5KRj4mIsK2rrKel2NXStbGvoJyauba0ycbE4d7Z9vXw9vXx5+XhAEQ+QF9aW1xQUJyWk7q2s8fDwNPCwNnOzLmfnszJx+Hf3d7c2pOOjXp0cqunpdPQzvLw6ebk4N3b2PPy8QCXkpAxKCpBMjCak5CVkZGvqqmxpZ20raaqo57CvbjW09Lh396Qjo2gnZzQz87S0ND///9sZ2g5MjTd3NwAg3l2Pjk7UkdIqaKfeXh/amhwcG1xZ2RoZmRoop+e0tDP4d3dsqWkzMPAy8TC///8z83OTjs4NCYlgXt8AEtCQjAsMTg1OVhUVF1ZYk9MVGRfal5ZY1lUXJWRjuTl4d3NzaqCa7Kuo4Vxa97W0YuLjkM3OG9oa2prcgAfGiAnISYpJCgmIiYtKCxjXmJpZmxkXmNiXWOTioO5rqG2sbCIk36GhXx4cG+GgoRiYWVSVFxZXGRgYmoAIR0iIh4jJyMnIR0iFxMYXVdYeIV/dnV4ko94rKWTf3BrYFRTmKCdoqKjJCEnNTQ6R0ZMKiYrGxcbIR0hAB8bICIdIyYiJh0ZHhIOFGRfYKKgnKejobayqrKtppCMinZvbLezrbazs19VVUZCRzEvNBsYHRcSFxwYHQAfGh8jHiMkHyQXExgXExg6NjlDP0JCPUBFQERKRklOS01RTU9fW19STk9tamoyMDU0MjciHyQSDhMZFRoPZUc5s0SHCwAAAABJRU5ErkJggg==')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'Carbon what to expect',
                        title: 'Carbon what to expect',
                        src:
                          '/static/2bb62a41d6ef16e82d0168fd4942371f/3cbba/Carbon_what_to_expect.png',
                        srcSet: [
                          '/static/2bb62a41d6ef16e82d0168fd4942371f/7fc1e/Carbon_what_to_expect.png 288w',
                          '/static/2bb62a41d6ef16e82d0168fd4942371f/a5df1/Carbon_what_to_expect.png 576w',
                          '/static/2bb62a41d6ef16e82d0168fd4942371f/3cbba/Carbon_what_to_expect.png 1152w',
                          '/static/2bb62a41d6ef16e82d0168fd4942371f/362ee/Carbon_what_to_expect.png 1600w',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title:
                    'Up & Running with Carbon React in less than 5 minutes',
                  author: 'Josh Black',
                  date: 'October 19, 2018',
                  href:
                    'https://medium.com/carbondesign/up-running-with-carbon-react-in-less-than-5-minutes-25d43cca059e',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
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
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.25%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA3klEQVQoz61SwQpFQBQdwsbCRrFQdpZWNiQlJUX8hBQL2dgoxcJOfvm8Zkq9V+9Njd7idG/d25lzzlxCCMGf8XuoaRqyLINt23AcB2maQlEUcUJJklh1XRdBEGCaJgzDgDAMYVnWx46QwrqusW0b+r5nhPu+oygKMYWyLLOa5zmiKELXdVjXFcdxoG1bxHHMYnjf5RLeVqi1pmlwXRfmecayLDjPE1VVwTRNsQzvl33fZyrHcWS2kySB53k8dfwMDcNAWZbsMygx7XVdf342FKqqfu0fE965cs5EnFAEL1MrApTgpPqpAAAAAElFTkSuQmCC')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'Article 02',
                        title: 'Article 02',
                        src:
                          '/static/4c2bf68f245c6585a7eb0e432097af0e/3cbba/Article_02.png',
                        srcSet: [
                          '/static/4c2bf68f245c6585a7eb0e432097af0e/7fc1e/Article_02.png 288w',
                          '/static/4c2bf68f245c6585a7eb0e432097af0e/a5df1/Article_02.png 576w',
                          '/static/4c2bf68f245c6585a7eb0e432097af0e/3cbba/Article_02.png 1152w',
                          '/static/4c2bf68f245c6585a7eb0e432097af0e/362ee/Article_02.png 1600w',
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
            Object(c.b)(
              g,
              { colLg: 4, colMd: 4, noGutterMdLeft: !0, mdxType: 'Column' },
              Object(c.b)(
                u,
                {
                  title: 'Hacktoberfest with Carbon',
                  author: 'Josh Black',
                  date: 'October 16, 2018',
                  href:
                    'https://medium.com/carbondesign/hacktoberfest-with-carbon-95c48943f586',
                  mdxType: 'ArticleCard',
                },
                Object(c.b)(
                  'span',
                  {
                    className: 'gatsby-resp-image-wrapper',
                    style: {
                      position: 'relative',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      maxWidth: '500px',
                    },
                  },
                  '\n      ',
                  Object(c.b)(
                    'span',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-background-image',
                        style: {
                          paddingBottom: '56.199999999999996%',
                          position: 'relative',
                          bottom: '0',
                          left: '0',
                          backgroundImage:
                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACqklEQVQozwGfAmD9AKerrqOiqZ2aobCqq7auqamlo5CWlpSwtHOWgG2IeUNpaE1sbHSTpHySnmWChCd3lT+GmUCUqHBwiKt9kwCrrbCmpqujo6einptvbm6NioqMlZFagHVghG1zi3ZTgn5bgIB4lKNegJUvN00pNVGDY1VfkZddYn1VUGYAp6itoqWnp6eoW1dYJCIpLi4xlJKIg4NogoZtiol8SHp6UXd5dpSkW3mNND1QS0tWgXptNYOVd2R8RkleAKemqaWkp6KlpoNya5VfQEIlF01XY7OlmLeljqueh2uAcV50cGyRpVFuhDI7TIdnV1R7gyqFoqB2jD5DXAClpqufoKGmpaSgm5laSEYvJSkZRnM/VmyRcDiliErNt4HLuouppoVNX2ssOE0sO1QxPVMySWJERFo/QkoAopuLoaKmp6Gbd3+HEjddGTFMJk51GjFMVT0gjGctqpJd1b6DqplqOENLICUyLzZGLDdNT05MmINPsZJPAJx3Nn92Z257jUxcciAsOSlFWyZUgB8vQCMdG3FTLLCSV6ODTEthaR4oMRQRERESFiYmJq6UV8ilWbydVgCsi1OYhFNubmxRODMfMUJBZogqUHYNGSkuKySPajiGVyJcQiYmMTwSEhYICQ0SERGNe1TBo2KsjE6lh0sAon4+pH9CkGEkd04nlmZVjH18Gy5GFhwhfV0vhE0WcUMSg3ZYkYBkdF9CVkg2aWdgy7eIpoE8lG4ujmgtAK2IPauFOqmEO7CENXRTMylJYUE/Mn5jNoNcKXFLHZqNecjKwNXQqry5sbSjlYuMj2htdpV+WqWAQKV7MwCwi0KuiD6ogTiedjFbSSglKih6YTJ6ZDp0ZUVnVDB5Z0uxrqjN3ufK1+LAztmywMyVn62ywNSwpZN7WSRAhB1lLWaPzAAAAABJRU5ErkJggg==')",
                          backgroundSize: 'cover',
                          display: 'block',
                        },
                      }
                    )
                  ),
                  '\n  ',
                  Object(c.b)(
                    'img',
                    o(
                      { parentName: 'span' },
                      {
                        className: 'gatsby-resp-image-image',
                        alt: 'Article 03',
                        title: 'Article 03',
                        src:
                          '/static/d1f1a8da08618409d5cab8cdcadb169f/36a81/Article_03.png',
                        srcSet: [
                          '/static/d1f1a8da08618409d5cab8cdcadb169f/7fc1e/Article_03.png 288w',
                          '/static/d1f1a8da08618409d5cab8cdcadb169f/36a81/Article_03.png 500w',
                        ],
                        sizes: '(max-width: 500px) 100vw, 500px',
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
      y.isMDXComponent = !0;
    },
  },
]);
//# sourceMappingURL=component---src-pages-resources-index-mdx-b36dc67641e65fbb3eea.js.map
