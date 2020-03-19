(window.webpackJsonp = window.webpackJsonp || []).push([
  [704],
  {
    SXTm: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return r;
        }),
        n.d(t, 'default', function() {
          return f;
        });
      n('rGqo'), n('q1tI');
      var a = n('7ljp'),
        o = n('013z'),
        i = n('V8m9');
      n('qKvR');
      function s() {
        return (s =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++)
              (n = i[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      const r = {},
        l = e =>
          function(t) {
            return (
              console.warn(
                'Component ' +
                  e +
                  ' was not imported, exported, or provided by MDXProvider as global scope'
              ),
              Object(a.b)('div', t)
            );
          },
        p = l('PageDescription'),
        b = l('AnchorLinks'),
        u = l('AnchorLink'),
        m = l('InlineNotification'),
        d = { _frontmatter: r },
        h = o.a;
      function f(e) {
        let { components: t } = e,
          n = c(e, ['components']);
        return Object(a.b)(
          h,
          s({}, d, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)(
            p,
            { mdxType: 'PageDescription' },
            Object(a.b)(
              'p',
              null,
              'This step takes what we’ve built so far and optimizes the app for a production\nenvironment. We’ll be deploying the production build to IBM Cloud.'
            )
          ),
          Object(a.b)(
            b,
            { mdxType: 'AnchorLinks' },
            Object(a.b)(u, { mdxType: 'AnchorLink' }, 'Fork, clone and branch'),
            Object(a.b)(
              u,
              { mdxType: 'AnchorLink' },
              'Create IBM Cloud account'
            ),
            Object(a.b)(u, { mdxType: 'AnchorLink' }, 'Optimize Sass'),
            Object(a.b)(u, { mdxType: 'AnchorLink' }, 'Build for production'),
            Object(a.b)(u, { mdxType: 'AnchorLink' }, 'Create manifest file'),
            Object(a.b)(u, { mdxType: 'AnchorLink' }, 'Create static file'),
            Object(a.b)(u, { mdxType: 'AnchorLink' }, 'Deploy app'),
            Object(a.b)(u, { mdxType: 'AnchorLink' }, 'Submit pull request')
          ),
          Object(a.b)('h2', null, 'Preview'),
          Object(a.b)(
            'p',
            null,
            'A ',
            Object(a.b)(
              'a',
              s(
                { parentName: 'p' },
                { href: 'https://react-step-6--carbon-tutorial.netlify.com' }
              ),
              'preview'
            ),
            ' of what you’ll build (visually no different, but built for production):'
          ),
          Object(a.b)(i.a, {
            height: '400',
            title: 'Carbon Tutorial Step 5',
            src: 'https://react-step-6--carbon-tutorial.netlify.com',
            frameBorder: 'no',
            allowtransparency: 'true',
            allowFullScreen: 'true',
            mdxType: 'Preview',
          }),
          Object(a.b)('h2', null, 'Fork, clone and branch'),
          Object(a.b)(
            'p',
            null,
            'This tutorial has an accompanying GitHub repository called ',
            Object(a.b)(
              'a',
              s(
                { parentName: 'p' },
                {
                  href:
                    'https://github.com/carbon-design-system/carbon-tutorial',
                }
              ),
              'carbon-tutorial'
            ),
            ' that we’ll use as a starting point for each step. If you haven’t forked and cloned that repository yet, and haven’t added the upstream remote, go ahead and do so by following the ',
            Object(a.b)(
              'a',
              s(
                { parentName: 'p' },
                { href: '/tutorial/react/step-1#fork-clone--branch' }
              ),
              'step 1 instructions'
            ),
            '.'
          ),
          Object(a.b)('h3', null, 'Branch'),
          Object(a.b)(
            'p',
            null,
            'With your repository all set up, let’s check out the branch for this tutorial step’s starting point.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              s({ parentName: 'pre' }, { className: 'language-bash' }),
              '$ git fetch upstream\n$ git checkout -b react-step-5 upstream/react-step-5\n'
            )
          ),
          Object(a.b)(
            m,
            { mdxType: 'InlineNotification' },
            Object(a.b)(
              'p',
              null,
              Object(a.b)('strong', { parentName: 'p' }, 'Note:'),
              ' This builds on top of step 4, but be sure to check out the upstream step 5 branch because it includes the static assets required to get through this step.'
            )
          ),
          Object(a.b)('h3', null, 'Build and start app'),
          Object(a.b)(
            'p',
            null,
            'Install the app’s dependencies (in case you’re starting fresh in your current directory and not continuing from the previous step):'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              s({ parentName: 'pre' }, { className: 'language-bash' }),
              '$ yarn\n'
            )
          ),
          Object(a.b)('p', null, 'Then, start the app:'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              s({ parentName: 'pre' }, { className: 'language-bash' }),
              '$ yarn start\n'
            )
          ),
          Object(a.b)(
            'p',
            null,
            'You should see something similar to where the ',
            Object(a.b)(
              'a',
              s({ parentName: 'p' }, { href: '/tutorial/react/step-4' }),
              'previous step'
            ),
            ' left off.'
          ),
          Object(a.b)('h2', null, 'Create IBM Cloud account'),
          Object(a.b)(
            'p',
            null,
            'Before we get started, ',
            Object(a.b)(
              'a',
              s(
                { parentName: 'p' },
                { href: 'https://cloud.ibm.com/registration' }
              ),
              'create an IBM Cloud account'
            ),
            ' if you don’t already have one, as we’ll be deploying there in a bit.'
          ),
          Object(a.b)('h2', null, 'Optimize Sass'),
          Object(a.b)(
            'p',
            null,
            'So far we’ve been developing in a, well, development environment where static asset optimization hasn’t been a priority. If you reference ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '/src/index.scss'),
            ', you’ll see one ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '@import'),
            ' that is pulling in Carbon’s full Sass build.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              s(
                { parentName: 'pre' },
                {
                  className: 'language-scss',
                  metastring: 'path=src/index.scss',
                  path: 'src/index.scss',
                }
              ),
              "$feature-flags: (\n  ui-shell: true,\n  grid-columns-16: true,\n);\n\n@import 'carbon-components/scss/globals/scss/styles.scss';\n"
            )
          ),
          Object(a.b)(
            'p',
            null,
            'To give you an idea of what’s all included, open up ',
            Object(a.b)(
              'inlineCode',
              { parentName: 'p' },
              'node_modules/carbon-components/scss/globals/scss/styles.scss'
            ),
            '. You’ll see imports for components like accordion, slider, tooltip, etc. Since we aren’t using those components, let’s exclude them from our built stylesheets. Keeping the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '$feature-flags'),
            ' Sass map, replace the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'styles.scss'),
            ' import with:'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              s(
                { parentName: 'pre' },
                {
                  className: 'language-scss',
                  metastring: 'path=src/index.scss',
                  path: 'src/index.scss',
                }
              ),
              "// Feature flags\n$css--font-face: true;\n$css--plex: true;\n\n// Global styles\n@import 'carbon-components/scss/globals/scss/css--font-face';\n@import 'carbon-components/scss/globals/grid/grid';\n\n// Carbon components\n@import 'carbon-components/scss/components/breadcrumb/breadcrumb';\n@import 'carbon-components/scss/components/button/button';\n@import 'carbon-components/scss/components/data-table/data-table';\n@import 'carbon-components/scss/components/link/link';\n@import 'carbon-components/scss/components/pagination/pagination';\n@import 'carbon-components/scss/components/tabs/tabs';\n@import 'carbon-components/scss/components/ui-shell/ui-shell';\n"
            )
          ),
          Object(a.b)(
            'p',
            null,
            'In comparing to the included ',
            Object(a.b)(
              'inlineCode',
              { parentName: 'p' },
              'carbon-components/scss/globals/scss/styles.scss'
            ),
            ', you may be asking what happened to importing ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '_vars.scss'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '_colors.scss'),
            ', ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '_theme.scss'),
            ', etc.?'
          ),
          Object(a.b)(
            'p',
            null,
            'Many of those global Sass partials get imported through the components. For example, open ',
            Object(a.b)(
              'inlineCode',
              { parentName: 'p' },
              'node_modules/carbon-components/scss/components/button/_button.scss'
            ),
            ' to see its dependencies. No harm in importing them as ',
            Object(a.b)(
              'inlineCode',
              { parentName: 'p' },
              'carbon-components/scss/globals/scss/styles.scss'
            ),
            ' does, but for simplicity here, we’ll let the components pull them in.'
          ),
          Object(a.b)(
            'p',
            null,
            'You can read more about optimizing Carbon’s Sass in the ',
            Object(a.b)(
              'a',
              s(
                { parentName: 'p' },
                {
                  href:
                    'https://medium.com/carbondesign/minimal-css-with-carbon-b0c089ccfa71',
                }
              ),
              'Carbon Design System publication'
            ),
            ' on Medium.'
          ),
          Object(a.b)('h2', null, 'Build for production'),
          Object(a.b)(
            'p',
            null,
            'Before we deploy our app, we need to create an optimized production build with this command. You may need to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'CTRL-C'),
            ' to stop the development environment first.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              s({ parentName: 'pre' }, { className: 'language-bash' }),
              '$ yarn build\n'
            )
          ),
          Object(a.b)(
            'p',
            null,
            'Looking at ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'package.json'),
            ', you’ll find ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'yarn build'),
            ' to run ',
            Object(a.b)(
              'inlineCode',
              { parentName: 'p' },
              'react-scripts build'
            ),
            '. This builds the app for production to the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'build'),
            ' folder. It bundles React in production mode and optimizes the build for the best performance. It even goes so far to minify files and include hashes in filenames for caching.'
          ),
          Object(a.b)(
            'p',
            null,
            'As a lot of this may seem like magic since the build configuration came from Create React App, go ahead and check out their ',
            Object(a.b)(
              'a',
              s(
                { parentName: 'p' },
                {
                  href:
                    'https://facebook.github.io/create-react-app/docs/production-build',
                }
              ),
              'production build guidelines'
            ),
            ' for a full description of what’s happening.'
          ),
          Object(a.b)('h2', null, 'Create manifest file'),
          Object(a.b)(
            'p',
            null,
            'Now that we have a production build, let’s get it on the cloud. We’re going to use ',
            Object(a.b)(
              'a',
              s(
                { parentName: 'p' },
                {
                  href:
                    'https://github.com/cloudfoundry/staticfile-buildpack.git',
                }
              ),
              'staticfile-buildpack'
            ),
            ' to deploy our webapp. Since this is a Cloud Foundry buildpack, we’ll be using the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'cf'),
            ' command line interface (CLI). If running ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'cf --help'),
            ' doesn’t work for you, chances are you need to ',
            Object(a.b)(
              'a',
              s(
                { parentName: 'p' },
                {
                  href:
                    'https://docs.cloudfoundry.org/cf-cli/install-go-cli.html',
                }
              ),
              'install the CLI'
            ),
            '.'
          ),
          Object(a.b)(
            m,
            { mdxType: 'InlineNotification' },
            Object(a.b)(
              'p',
              null,
              Object(a.b)('strong', { parentName: 'p' }, 'Note:'),
              ' If unfamiliar with buildpacks, the ',
              Object(a.b)(
                'a',
                s(
                  { parentName: 'p' },
                  {
                    href:
                      'https://docs.cloudfoundry.org/buildpacks/staticfile/index.html',
                  }
                ),
                'staticfile buildpack docs'
              ),
              ' has good definitions and configuration documentation.'
            )
          ),
          Object(a.b)(
            'p',
            null,
            'With the Cloud Foundry CLI installed, next, we need to create a ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'manifest.yml'),
            ' file in the root of the project. To prevent multiple apps trying to use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'carbon-tutorial'),
            ' name, replace ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'USERNAME'),
            ' with your GitHub username below to make sure our apps are uniquely named.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              s(
                { parentName: 'pre' },
                {
                  className: 'language-bash',
                  metastring: 'path=manifest.yml',
                  path: 'manifest.yml',
                }
              ),
              '---\napplications:\n  - name: carbon-tutorial-USERNAME\n    memory: 64M\n    buildpack: https://github.com/cloudfoundry/staticfile-buildpack.git\n'
            )
          ),
          Object(a.b)(
            m,
            { mdxType: 'InlineNotification' },
            Object(a.b)(
              'p',
              null,
              Object(a.b)('strong', { parentName: 'p' }, 'Note:'),
              ' With this set-up we’re still using a GitHub personal access token saved in ',
              Object(a.b)('inlineCode', { parentName: 'p' }, '.env.local'),
              '. If you haven’t created a GitHub access token yet, see ',
              Object(a.b)(
                'a',
                s(
                  { parentName: 'p' },
                  { href: '/tutorial/react/step-3#create-access-token' }
                ),
                'step 3'
              ),
              '. You can put the environment variable in the manifest file, or manually add it in the IBM Cloud dashboard, but since we’re building off previous tutorial steps nothing more is needed.'
            )
          ),
          Object(a.b)('h2', null, 'Create static file'),
          Object(a.b)(
            'p',
            null,
            'Create a new static file in the root of the project named ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Staticfile'),
            '. This tells the app to deploy from the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'build'),
            ' folder and not the root of the project.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              s(
                { parentName: 'pre' },
                {
                  className: 'language-bash',
                  metastring: 'path=Staticfile',
                  path: 'Staticfile',
                }
              ),
              'root: build\n'
            )
          ),
          Object(a.b)('h3', null, 'Cloud Foundry ignore'),
          Object(a.b)(
            'p',
            null,
            'After telling Cloud Foundry what to include, we can also specify what to ignore. Create a top-level ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '.cfignore'),
            ' file. Cloud Foundry doesn’t let you push read-only files (specifically, files with permissions <',
            Object(a.b)('inlineCode', { parentName: 'p' }, '400'),
            '), so to prevent issues with the deploy, add:'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              s(
                { parentName: 'pre' },
                {
                  className: 'language-bash',
                  metastring: 'path=.cfignore',
                  path: '.cfignore',
                }
              ),
              'node_modules/.cache\n'
            )
          ),
          Object(a.b)(
            'p',
            null,
            'You can speed up deploys by decreasing the files uploaded through cloud foundry. To accomplish this, ignore any folder not required by the production application on IBM Cloud.'
          ),
          Object(a.b)(
            'p',
            null,
            'In our case we can ignore everything except the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'build/'),
            ' directory and ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Staticfile'),
            '. To speed up our deploys change ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '.cfignore'),
            ' to:'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              s(
                { parentName: 'pre' },
                {
                  className: 'language-bash',
                  metastring: 'path=.cfignore',
                  path: '.cfignore',
                }
              ),
              '*\n\n!Staticfile\n!build\n'
            )
          ),
          Object(a.b)('h2', null, 'Deploy app'),
          Object(a.b)('p', null, 'Login to IBM Cloud with:'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              s({ parentName: 'pre' }, { className: 'language-bash' }),
              '$ cf login -a https://api.ng.bluemix.net --sso\n'
            )
          ),
          Object(a.b)(
            'p',
            null,
            'Deploy app using the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'cf push'),
            ' command. Since ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'manifest.yml'),
            ' is in our root directory, we don’t need to specify it in the push command. But, if you have multiple manifest files that target different environments, it’s good practice to specify the file.'
          ),
          Object(a.b)(
            'p',
            null,
            Object(a.b)(
              'em',
              { parentName: 'p' },
              'Note: To successfully deploy, you might need to update the region code (e.g. ',
              Object(a.b)(
                'inlineCode',
                { parentName: 'em' },
                'api.[REGION].bluemix.net'
              ),
              '). ',
              Object(a.b)(
                'a',
                s(
                  { parentName: 'em' },
                  {
                    href:
                      'https://developer.ibm.com/answers/answers/166990/view.html',
                  }
                ),
                'Learn more.'
              )
            )
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              s({ parentName: 'pre' }, { className: 'language-bash' }),
              '$ cf push -f manifest.yml\n'
            )
          ),
          Object(a.b)(
            'p',
            null,
            'To make it easy on ourselves by not needing to remember that command, let’s add a script in ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'package.json'),
            '. We can combine the build and deploy steps to make sure we only deploy immediately after running the build. In the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '"scripts"'),
            ' object in ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'package.json'),
            ', add:'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              s(
                { parentName: 'pre' },
                {
                  className: 'language-bash',
                  metastring: 'path=package.json',
                  path: 'package.json',
                }
              ),
              '"deploy": "rm -rf ./build && yarn build && cf push -f manifest.yml"\n'
            )
          ),
          Object(a.b)(
            'p',
            null,
            'Next time you want to deploy, you can simply run ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'yarn deploy'),
            '.'
          ),
          Object(a.b)('h2', null, 'Submit pull request'),
          Object(a.b)(
            'p',
            null,
            'That does it! We’re going to submit a pull request to verify completion of this tutorial step. In doing so, ',
            Object(a.b)(
              'strong',
              { parentName: 'p' },
              'please include the mybluemix.net URL for your deployed app in your pull request description'
            ),
            '.'
          ),
          Object(a.b)('h3', null, 'Continuous integration (CI) check'),
          Object(a.b)(
            'p',
            null,
            'Run the CI check to make sure we’re all set to submit a pull request.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              s({ parentName: 'pre' }, { className: 'language-bash' }),
              '$ yarn ci-check\n'
            )
          ),
          Object(a.b)(
            m,
            { mdxType: 'InlineNotification' },
            Object(a.b)(
              'p',
              null,
              Object(a.b)('strong', { parentName: 'p' }, 'Note:'),
              ' Having issues running the CI check? ',
              Object(a.b)(
                'a',
                s(
                  { parentName: 'p' },
                  {
                    href:
                      '/tutorial/react/step-1#continuous-integration-(ci)-check',
                  }
                ),
                'Step 1'
              ),
              ' has troubleshooting notes that may help.'
            )
          ),
          Object(a.b)('h3', null, 'Git commit and push'),
          Object(a.b)(
            'p',
            null,
            'Before we can create a pull request, stage and commit all of your changes:'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              s({ parentName: 'pre' }, { className: 'language-bash' }),
              '$ git add --all && git commit -m "feat(tutorial): complete step 5"\n'
            )
          ),
          Object(a.b)('p', null, 'Then, push to your repository:'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              s({ parentName: 'pre' }, { className: 'language-bash' }),
              '$ git push origin react-step-5\n'
            )
          ),
          Object(a.b)(
            m,
            { mdxType: 'InlineNotification' },
            Object(a.b)(
              'p',
              null,
              Object(a.b)('strong', { parentName: 'p' }, 'Note:'),
              ' Having issues pushing your changes? ',
              Object(a.b)(
                'a',
                s(
                  { parentName: 'p' },
                  { href: '/tutorial/react/step-1#git-commit-and-push' }
                ),
                'Step 1'
              ),
              ' has troubleshooting notes that may help.'
            )
          ),
          Object(a.b)('h3', null, 'Pull request (PR)'),
          Object(a.b)(
            'p',
            null,
            'Finally, visit ',
            Object(a.b)(
              'a',
              s(
                { parentName: 'p' },
                {
                  href:
                    'https://github.com/carbon-design-system/carbon-tutorial',
                }
              ),
              'carbon-tutorial'
            ),
            ' to “Compare & pull request”. In doing so, make sure that you are comparing to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'react-step-5'),
            ' into ',
            Object(a.b)(
              'inlineCode',
              { parentName: 'p' },
              'base: react-step-5'
            ),
            '.'
          ),
          Object(a.b)(
            m,
            { mdxType: 'InlineNotification' },
            Object(a.b)(
              'p',
              null,
              Object(a.b)('strong', { parentName: 'p' }, 'Note:'),
              ' Expect your tutorial step PRs to be reviewed by the Carbon team but not merged. We’ll close your PR so we can keep the repository’s remote branches pristine and ready for the next person!'
            )
          )
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
//# sourceMappingURL=component---src-pages-tutorial-react-step-5-mdx-1f7b5ed5b7c6574321e1.js.map
