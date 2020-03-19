(window.webpackJsonp = window.webpackJsonp || []).push([
  [702],
  {
    P35L: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return l;
        }),
        n.d(t, 'default', function() {
          return g;
        });
      n('rGqo'), n('q1tI');
      var a = n('7ljp'),
        o = n('013z'),
        r = n('V8m9');
      n('qKvR');
      function p() {
        return (p =
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
      function i(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++)
              (n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (n = r[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      const l = {},
        s = e =>
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
        c = s('PageDescription'),
        b = s('AnchorLinks'),
        h = s('AnchorLink'),
        u = s('InlineNotification'),
        d = { _frontmatter: l },
        m = o.a;
      function g(e) {
        let { components: t } = e,
          n = i(e, ['components']);
        return Object(a.b)(
          m,
          p({}, d, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)(
            c,
            { mdxType: 'PageDescription' },
            Object(a.b)(
              'p',
              null,
              'This step takes our static components and populates them with data from the\nGitHub GraphQL API – loading states and all. We’ll be displaying Carbon\nrepository information in a data table.'
            )
          ),
          Object(a.b)(
            b,
            { mdxType: 'AnchorLinks' },
            Object(a.b)(h, { mdxType: 'AnchorLink' }, 'Fork, clone and branch'),
            Object(a.b)(h, { mdxType: 'AnchorLink' }, 'Install dependencies'),
            Object(a.b)(h, { mdxType: 'AnchorLink' }, 'Create access token'),
            Object(a.b)(h, { mdxType: 'AnchorLink' }, 'Connect to Apollo'),
            Object(a.b)(h, { mdxType: 'AnchorLink' }, 'Fetch data'),
            Object(a.b)(h, { mdxType: 'AnchorLink' }, 'Populate data table'),
            Object(a.b)(h, { mdxType: 'AnchorLink' }, 'Add loading'),
            Object(a.b)(h, { mdxType: 'AnchorLink' }, 'Add pagination'),
            Object(a.b)(h, { mdxType: 'AnchorLink' }, 'Submit pull request')
          ),
          Object(a.b)('h3', null, 'Preview'),
          Object(a.b)(
            'p',
            null,
            'The ',
            Object(a.b)(
              'a',
              p(
                { parentName: 'p' },
                { href: 'https://developer.github.com/v4/' }
              ),
              'GitHub GraphQL API'
            ),
            ' is very well documented, and even though the focus of this tutorial isn’t learning and using GraphQL, it’s a great opportunity to fetch Carbon-related data for this Carbon tutorial.'
          ),
          Object(a.b)(
            'p',
            null,
            'To do so, we’ll be using Apollo Client, the front-end component of the ',
            Object(a.b)(
              'a',
              p(
                { parentName: 'p' },
                { href: 'https://www.apollographql.com/docs/intro/platform' }
              ),
              'Apollo Platform'
            ),
            '. Apollo provides several open source tools for using GraphQL throughout your application’s stack. Apollo Client is a sophisticated GraphQL client that manages data and state in an application.'
          ),
          Object(a.b)(
            'p',
            null,
            'A ',
            Object(a.b)(
              'a',
              p(
                { parentName: 'p' },
                { href: 'https://react-step-4--carbon-tutorial.netlify.com' }
              ),
              'preview'
            ),
            ' of what you will build (see repositories page):'
          ),
          Object(a.b)(r.a, {
            height: '400',
            title: 'Carbon Tutorial Step 3',
            src: 'https://react-step-4--carbon-tutorial.netlify.com',
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
              p(
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
              p(
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
              p({ parentName: 'pre' }, { className: 'language-bash' }),
              '$ git fetch upstream\n$ git checkout -b react-step-3 upstream/react-step-3\n'
            )
          ),
          Object(a.b)('h3', null, 'Build and start app'),
          Object(a.b)('p', null, 'Install the app’s dependencies:'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p({ parentName: 'pre' }, { className: 'language-bash' }),
              '$ yarn\n'
            )
          ),
          Object(a.b)('p', null, 'Then, start the app:'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p({ parentName: 'pre' }, { className: 'language-bash' }),
              '$ yarn start\n'
            )
          ),
          Object(a.b)(
            'p',
            null,
            'You should see something similar to where the ',
            Object(a.b)(
              'a',
              p({ parentName: 'p' }, { href: '/tutorial/react/step-2' }),
              'previous step'
            ),
            ' left off. Stop your app with ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'CTRL-C'),
            ' and let’s get everything installed.'
          ),
          Object(a.b)('h2', null, 'Install dependencies'),
          Object(a.b)(
            'p',
            null,
            'We’ll need to install three new dependencies to incorporate Apollo into our application.'
          ),
          Object(a.b)(
            'ul',
            null,
            Object(a.b)(
              'li',
              { parentName: 'ul' },
              Object(a.b)('inlineCode', { parentName: 'li' }, 'apollo-boost'),
              ' - package containing everything you need to set up Apollo Client'
            ),
            Object(a.b)(
              'li',
              { parentName: 'ul' },
              Object(a.b)('inlineCode', { parentName: 'li' }, 'graphql'),
              ' - parses your GraphQL queries'
            ),
            Object(a.b)(
              'li',
              { parentName: 'ul' },
              Object(a.b)('inlineCode', { parentName: 'li' }, 'react-apollo'),
              ' - Apollo integration for React'
            )
          ),
          Object(a.b)('p', null, 'Install them with the command:'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p({ parentName: 'pre' }, { className: 'language-bash' }),
              '$ yarn add apollo-boost graphql react-apollo\n'
            )
          ),
          Object(a.b)('h2', null, 'Create access token'),
          Object(a.b)(
            'p',
            null,
            'You’ll need a personal access token from your GitHub account in order to make requests to the GitHub API. Check out ',
            Object(a.b)(
              'a',
              p(
                { parentName: 'p' },
                {
                  href:
                    'https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line',
                }
              ),
              'this guide'
            ),
            ' to see how to get one.'
          ),
          Object(a.b)(
            'p',
            null,
            'When you get to the scope/permissions step, you can leave them all unchecked. We don’t need any special permissions, we just need access to the public API.'
          ),
          Object(a.b)(
            'p',
            null,
            'Once you have your token, we need to put it in a place where create-react-app can use it. When your application is being built and developed, create-react-app will parse environmental variables in any file that starts with ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '.env'),
            ' and make them available under ',
            Object(a.b)(
              'inlineCode',
              { parentName: 'p' },
              'process.env.MY_VARIABLE'
            ),
            '.'
          ),
          Object(a.b)(
            'p',
            null,
            'One caveat is that we need to start our variables with ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'REACT_APP_'),
            '. You can read more about environmental variables in ',
            Object(a.b)(
              'a',
              p(
                { parentName: 'p' },
                {
                  href:
                    'https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables',
                }
              ),
              'create-react-app’s guide'
            ),
            '.'
          ),
          Object(a.b)(
            'p',
            null,
            'Since we don’t want to commit this file to Git, we can put it in ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '.env.local'),
            ' which is in our ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '.gitignore'),
            ' list. Your file should just have a single line like this one, where the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'x'),
            's are replaced with your unique token.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-bash',
                  metastring: 'path=.env.local',
                  path: '.env.local',
                }
              ),
              'REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN=xxxxxx\n'
            )
          ),
          Object(a.b)(
            'p',
            null,
            'Go ahead and start your app with ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'yarn start'),
            ', or, if your app is running, you’ll need to restart it to get access to this token.'
          ),
          Object(a.b)('h2', null, 'Connect to Apollo'),
          Object(a.b)(
            'p',
            null,
            'The ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'react-apollo'),
            ' library gives us a component that we need to put at the base of our application. Typically the best place for things that need to wrap the entire application is at the root of the application. For us, that’s at ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'src/index.js'),
            '.'
          ),
          Object(a.b)(
            'p',
            null,
            'Add these two imports to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'src/index.js'),
            ':'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/index.js',
                  path: 'src/index.js',
                }
              ),
              "import ApolloClient from 'apollo-boost';\nimport { ApolloProvider } from 'react-apollo';\n"
            )
          ),
          Object(a.b)(
            'p',
            null,
            'Next, make your client by providing a URI for the GitHub GraphQL API as well as an authorization header using the environmental variable you just added to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '.env.local'),
            '.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/index.js',
                  path: 'src/index.js',
                }
              ),
              "const client = new ApolloClient({\n  uri: 'https://api.github.com/graphql',\n  headers: {\n    authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,\n  },\n});\n"
            )
          ),
          Object(a.b)(
            'p',
            null,
            'Now we can wrap our application with ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'ApolloProvider'),
            '. At the same time, we’ll pass in the client we just made as a prop to the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'ApolloProvider'),
            ' component. Replace:'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-html',
                  metastring: 'path=src/index.js',
                  path: 'src/index.js',
                }
              ),
              '<Router>\n  <App />\n</Router>\n'
            )
          ),
          Object(a.b)('p', null, 'With:'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-html',
                  metastring: 'path=src/index.js',
                  path: 'src/index.js',
                }
              ),
              '<ApolloProvider client={client}>\n  <Router>\n    <App />\n  </Router>\n</ApolloProvider>\n'
            )
          ),
          Object(a.b)('h2', null, 'Fetch data'),
          Object(a.b)('h3', null, 'Imports'),
          Object(a.b)(
            'p',
            null,
            'Add the following imports at the top of ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'RepoPage.js'),
            ':'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/content/RepoPage/RepoPage.js',
                  path: 'src/content/RepoPage/RepoPage.js',
                }
              ),
              "import { gql } from 'apollo-boost';\nimport { Query } from 'react-apollo';\n"
            )
          ),
          Object(a.b)('h3', null, 'Query'),
          Object(a.b)(
            'p',
            null,
            'Next we’ll assemble our GraphQL query to fetch only the data we need from the GraphQL API. We’ll do this using the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'gql'),
            ' helper we just imported. The ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'gql'),
            ' helper lets you write GraphQL queries using interpolated strings (backticks) in JavaScript. In addition, we’ll be using the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Query'),
            ' component from ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'react-apollo'),
            ' which gives us some great information about our query’s loading state in addition to the data.'
          ),
          Object(a.b)(
            'p',
            null,
            'You can use GitHub’s ',
            Object(a.b)(
              'a',
              p(
                { parentName: 'p' },
                { href: 'https://developer.github.com/v4/explorer/' }
              ),
              'explorer'
            ),
            ' tool to write and test your own queries. Try copying the query below and experiment with changing the properties. You can also click the “Docs” button in the top right of the explorer to view all of the available data and query parameters.'
          ),
          Object(a.b)(
            'p',
            null,
            'If you’d like some more information regarding writing queries and using the Query component, we recommend ',
            Object(a.b)(
              'a',
              p(
                { parentName: 'p' },
                { href: 'https://www.apollographql.com/docs/tutorial/queries' }
              ),
              'Apollo’s documentation'
            ),
            ' on this topic.'
          ),
          Object(a.b)('p', null, 'Add this after your imports:'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-graphql',
                  metastring: 'path=src/content/RepoPage/RepoPage.js',
                  path: 'src/content/RepoPage/RepoPage.js',
                }
              ),
              'const REPO_QUERY = gql`\n  query REPO_QUERY {\n    # Let\'s use carbon as our organization\n    organization(login: "carbon-design-system") {\n      # We\'ll grab all the repositories in one go. To load more resources\n      # continuously, see the advanced topics.\n      repositories(first: 75, orderBy: { field: UPDATED_AT, direction: DESC }) {\n        totalCount\n        nodes {\n          url\n          homepageUrl\n          issues(filterBy: { states: OPEN }) {\n            totalCount\n          }\n          stargazers {\n            totalCount\n          }\n          releases(first: 1) {\n            totalCount\n            nodes {\n              name\n            }\n          }\n          name\n          updatedAt\n          createdAt\n          description\n          id\n        }\n      }\n    }\n  }\n`;\n'
            )
          ),
          Object(a.b)('h3', null, 'Helpers'),
          Object(a.b)(
            'p',
            null,
            'Below that, we should have our table headers set in a previous step that are good to go. Let’s also keep our example rows below that.'
          ),
          Object(a.b)(
            'p',
            null,
            'Our last column in the data table will be a comma-separated list of repository and home page links, so let’s create a component called ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'LinkList'),
            '.'
          ),
          Object(a.b)(
            'p',
            null,
            'Import ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Link'),
            ' at the top of ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'RepoPage.js'),
            '.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/content/RepoPage/RepoPage.js',
                  path: 'src/content/RepoPage/RepoPage.js',
                }
              ),
              "import { Link } from 'carbon-components-react';\n"
            )
          ),
          Object(a.b)(
            'p',
            null,
            'Then use ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Link'),
            ' in this component that has two props (',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'url'),
            ' and ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'homepageUrl'),
            ') and returns an unordered list. If the repository does not have a home page URL, only render the repository link.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/content/RepoPage/RepoPage.js',
                  path: 'src/content/RepoPage/RepoPage.js',
                }
              ),
              "const LinkList = ({ url, homepageUrl }) => (\n  <ul style={{ display: 'flex' }}>\n    <li>\n      <Link href={url}>GitHub</Link>\n    </li>\n    {homepageUrl && (\n      <li>\n        <span>&nbsp;|&nbsp;</span>\n        <Link href={homepageUrl}>Homepage</Link>\n      </li>\n    )}\n  </ul>\n);\n"
            )
          ),
          Object(a.b)(
            'p',
            null,
            'As a final helper, let’s create a function that transforms row data to our expected header keys. Notice how we’re using our new ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'LinkList'),
            ' component to generate the value of the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'links'),
            ' key in each row.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/content/RepoPage/RepoPage.js',
                  path: 'src/content/RepoPage/RepoPage.js',
                }
              ),
              'const getRowItems = rows =>\n  rows.map(row => ({\n    ...row,\n    key: row.id,\n    stars: row.stargazers.totalCount,\n    issueCount: row.issues.totalCount,\n    createdAt: new Date(row.createdAt).toLocaleDateString(),\n    updatedAt: new Date(row.updatedAt).toLocaleDateString(),\n    links: <LinkList url={row.url} homepageUrl={row.homepageUrl} />,\n  }));\n'
            )
          ),
          Object(a.b)('h3', null, 'Query component'),
          Object(a.b)(
            'p',
            null,
            'At this point, we should run our query and ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'console.log()'),
            ' the results to verify that the request is working.'
          ),
          Object(a.b)(
            'p',
            null,
            'The ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Query'),
            ' component from ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'react-apollo'),
            ' lets us render different content based on the state of our request. When ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'loading'),
            ' is true, we’ll render ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Loading...'),
            ' for the time being. If there’s an issue, we’ll render the corresponding error message.'
          ),
          Object(a.b)(
            'p',
            null,
            'Finally, if neither of those are true, it means we have our data! One nice advantage of GraphQL is that as long as there are no errors, we can be certain the properties on the data we requested aren’t ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'undefined'),
            '.'
          ),
          Object(a.b)(
            'p',
            null,
            'We need to render the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'RepoTable'),
            ' in ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Query'),
            '’s ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'return()'),
            ' statement once the request is no longer loading and when there are no errors. To do so, replace the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'RepoTable'),
            ' line with the following ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Query'),
            '.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/content/RepoPage/RepoPage.js',
                  path: 'src/content/RepoPage/RepoPage.js',
                }
              ),
              '<RepoTable headers={headers} rows={rows} />\n'
            )
          ),
          Object(a.b)(
            'p',
            null,
            'Notice how we’re passing the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'REPO_QUERY'),
            ' that we previously defined into the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'query'),
            ' prop.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/content/RepoPage/RepoPage.js',
                  path: 'src/content/RepoPage/RepoPage.js',
                }
              ),
              "<Query query={REPO_QUERY}>\n  {({ loading, error, data }) => {\n    // Wait for the request to complete\n    if (loading) return 'Loading...';\n\n    // Something went wrong with the data fetching\n    if (error) return `Error! ${error.message}`;\n\n    // If we're here, we've got our data!\n    console.log(data.organization);\n\n    return (\n      <>\n        <RepoTable headers={headers} rows={rows} />\n      </>\n    );\n  }}\n</Query>\n"
            )
          ),
          Object(a.b)(
            'p',
            null,
            'The page will look the same as we’re still rendering our static example rows, but if you view your browser’s console (e.g. ',
            Object(a.b)(
              'a',
              p(
                { parentName: 'p' },
                {
                  href:
                    'https://developers.google.com/web/tools/chrome-devtools/',
                }
              ),
              'Chrome DevTools'
            ),
            '), you should see the response from GitHub!'
          ),
          Object(a.b)('h2', null, 'Populate data table'),
          Object(a.b)(
            'p',
            null,
            'Now that we have that data, let’s populate the data table. Replace\n',
            Object(a.b)(
              'inlineCode',
              { parentName: 'p' },
              'console.log(data.organization);'
            ),
            ' with the following that destructures\nthe ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'data.organization'),
            ' object. Once we have the repositories, we can\ncall our ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'getRowItems()'),
            ' helper to build the data table rows.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/content/RepoPage/RepoPage.js',
                  path: 'src/content/RepoPage/RepoPage.js',
                }
              ),
              "// If we're here, we've got our data!\nconst { repositories } = data.organization;\nconst rows = getRowItems(repositories.nodes);\n"
            )
          ),
          Object(a.b)(
            'p',
            null,
            'Then, towards the top of ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'RepoPage.js'),
            ' delete the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'rows'),
            ' array because we no longer need the example rows.'
          ),
          Object(a.b)('h3', null, 'Render repository descriptions'),
          Object(a.b)(
            'p',
            null,
            'The data table component and its pieces use a common React pattern called ',
            Object(a.b)(
              'a',
              p(
                { parentName: 'p' },
                { href: 'https://reactjs.org/docs/render-props.html' }
              ),
              'render props'
            ),
            '. This a really powerful way for libraries to give developers control of rendering and manipulating their data.'
          ),
          Object(a.b)(
            'p',
            null,
            'Revisiting ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'RepoTable.js'),
            ', we are already passing in our row objects along with headers for each column. The ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'render'),
            ' prop is being used to tell the data table how to render the headers and rows. That prop takes a function that receives the processed headers and rows as arguments as well as some helper functions for rendering the table.'
          ),
          Object(a.b)(
            'p',
            null,
            'One common hurdle with the data table is how to access data that might not correspond with a table column but is needed to compute the value of a cell that does. The data table component processes and controls only the row properties which corresponds to headers (columns). Because of this, the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'rows'),
            ' object you get access to in the render prop function is ',
            Object(a.b)('em', { parentName: 'p' }, 'different'),
            ' than the one you passed in to the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'rows'),
            ' prop.'
          ),
          Object(a.b)(
            'p',
            null,
            'We need to modify one aspect of the data table because if you expand a row, it says ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Row description'),
            '. We want to update that with the repository description coming from the GitHub API. This is an example of where we need a simple look-up function to find the data we care about - data that does not directly correspond to a column.'
          ),
          Object(a.b)(
            'p',
            null,
            'To do so, in ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'RepoTable.js'),
            ', add this look-up function as the first lines inside the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'RepoTable'),
            '. This should go immediately before the component’s ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'return()'),
            '.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/content/RepoPage/RepoTable.js',
                  path: 'src/content/RepoPage/RepoTable.js',
                }
              ),
              "const getRowDescription = rowId => {\n  const row = rows.find(({ id }) => id === rowId);\n  return row ? row.description : '';\n};\n"
            )
          ),
          Object(a.b)(
            'p',
            null,
            'Finally, in ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'RepoTable.js'),
            ', replace ',
            Object(a.b)(
              'inlineCode',
              { parentName: 'p' },
              '<p>Row description</p>'
            ),
            ' with:'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-html',
                  metastring: 'path=src/content/RepoPage/RepoTable.js',
                  path: 'src/content/RepoPage/RepoTable.js',
                }
              ),
              '<p>{getRowDescription(row.id)}</p>\n'
            )
          ),
          Object(a.b)('h2', null, 'Add loading'),
          Object(a.b)(
            'p',
            null,
            'At this point, the first time that you visit the repositories page, we’re querying the GitHub API and rendering the response through the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'DataTable'),
            ' component. We could stop here, but there’s more to be done! Let’s replace the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Loading...'),
            ' string with the ',
            Object(a.b)(
              'a',
              p(
                { parentName: 'p' },
                {
                  href:
                    'http://react.carbondesignsystem.com/?selectedKind=DataTableSkeleton',
                }
              ),
              'DataTableSkeleton component'
            ),
            '.'
          ),
          Object(a.b)(
            'p',
            null,
            'To do so, back to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'RepoPage.js'),
            ', add the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'DataTableSkeleton'),
            ' import by modifying the existing ',
            Object(a.b)(
              'inlineCode',
              { parentName: 'p' },
              'carbon-components-react'
            ),
            ' import.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/content/RepoPage/RepoPage.js',
                  path: 'src/content/RepoPage/RepoPage.js',
                }
              ),
              "import { Link, DataTableSkeleton } from 'carbon-components-react';\n"
            )
          ),
          Object(a.b)(
            'p',
            null,
            'Then replace the ',
            Object(a.b)(
              'inlineCode',
              { parentName: 'p' },
              "if (loading) return 'Loading...';"
            ),
            ' with:'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/content/RepoPage/RepoPage.js',
                  path: 'src/content/RepoPage/RepoPage.js',
                }
              ),
              'if (loading)\n  return (\n    <DataTableSkeleton\n      columnCount={headers.length + 1}\n      rowCount={10}\n      headers={headers}\n    />\n  );\n'
            )
          ),
          Object(a.b)(
            'p',
            null,
            'We need to tell the loading skeleton how many rows to render, so let’s use 10 skeleton rows to prepare for the next enhancement…'
          ),
          Object(a.b)('h2', null, 'Add pagination'),
          Object(a.b)(
            'p',
            null,
            'Pagination! Instead of rendering every repository, let’s add pagination to the data table to only render 10 at a time. Depending on your specific requirements, you may need to fetch new data each time that you interact with the pagination component, but for simplicity, we’re going to make one request to fetch all data, and then paginate the in-memory row data.'
          ),
          Object(a.b)(
            'p',
            null,
            'We’ll be using ',
            Object(a.b)(
              'a',
              p(
                { parentName: 'p' },
                { href: 'https://reactjs.org/docs/hooks-intro.html' }
              ),
              'React Hooks'
            ),
            ' to manage our state. Hooks are a relatively new React API that allows us to author a React component’s stateful logic in a function component rather than a class component. Using hooks means we don’t need to worry about complex lifecycle methods.'
          ),
          Object(a.b)(
            'p',
            null,
            'Import React’s ',
            Object(a.b)(
              'a',
              p(
                { parentName: 'p' },
                { href: 'https://reactjs.org/docs/hooks-state.html' }
              ),
              'useState'
            ),
            ' by modifying the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'React'),
            ' import.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/content/RepoPage/RepoPage.js',
                  path: 'src/content/RepoPage/RepoPage.js',
                }
              ),
              "import React, { useState } from 'react';\n"
            )
          ),
          Object(a.b)(
            'p',
            null,
            'Then initialize the new state variables that we’ll use for pagination as the first lines inside the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'RepoPage'),
            ' component, above the outer ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'return()'),
            '.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/content/RepoPage/RepoPage.js',
                  path: 'src/content/RepoPage/RepoPage.js',
                }
              ),
              'const RepoPage = () => {\n  const [totalItems, setTotalItems] = useState(0);\n  const [firstRowIndex, setFirstRowIndex] = useState(0);\n  const [currentPageSize, setCurrentPageSize] = useState(10);\n...\n'
            )
          ),
          Object(a.b)(
            'p',
            null,
            'This initializes the total number of rows and the index of the first row to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '0'),
            ', and the page size to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, '10'),
            ' as we also specified in our loading skeleton.'
          ),
          Object(a.b)(
            'p',
            null,
            'Next we need to use the function that updates the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'totalItems'),
            ' state,\n',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'setTotalItems()'),
            ', after we destructure our\n',
            Object(a.b)(
              'inlineCode',
              { parentName: 'p' },
              'data.organization.repositories'
            ),
            '. Your block that transforms row data\nshould look like:'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/content/RepoPage/RepoPage.js',
                  path: 'src/content/RepoPage/RepoPage.js',
                }
              ),
              "// If we're here, we've got our data!\nconst { repositories } = data.organization;\nsetTotalItems(repositories.totalCount);\nconst rows = getRowItems(repositories.nodes);\n"
            )
          ),
          Object(a.b)(
            'p',
            null,
            'Then we need to update our ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'RepoTable'),
            ' ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'rows'),
            ' prop to only render the subset of rows for the current “page”. Update ',
            Object(a.b)(
              'inlineCode',
              { parentName: 'p' },
              '<RepoTable headers={headers} rows={rows} />'
            ),
            ' to:'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/content/RepoPage/RepoPage.js',
                  path: 'src/content/RepoPage/RepoPage.js',
                }
              ),
              '<RepoTable\n  headers={headers}\n  rows={rows.slice(\n    firstRowIndex,\n    firstRowIndex + currentPageSize\n  )}\n/>\n'
            )
          ),
          Object(a.b)(
            u,
            { mdxType: 'InlineNotification' },
            Object(a.b)(
              'p',
              null,
              Object(a.b)('strong', { parentName: 'p' }, 'Note:'),
              ' We only pass the rows that we want our table to display. We can do this by slicing the our array of rows depending on the first item and the page size.'
            )
          ),
          Object(a.b)(
            'p',
            null,
            'Finally, let’s add the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Pagination'),
            ' to update our state variables and cause the data table to render new rows.'
          ),
          Object(a.b)(
            'p',
            null,
            'Import ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Pagination'),
            ' by updating the ',
            Object(a.b)(
              'inlineCode',
              { parentName: 'p' },
              'carbon-components-react'
            ),
            ' import.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/content/RepoPage/RepoPage.js',
                  path: 'src/content/RepoPage/RepoPage.js',
                }
              ),
              "import { Link, DataTableSkeleton, Pagination } from 'carbon-components-react';\n"
            )
          ),
          Object(a.b)(
            'p',
            null,
            'Immediately after the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'RepoTable'),
            ' closing tag (',
            Object(a.b)('inlineCode', { parentName: 'p' }, '/>'),
            '), add the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Pagination'),
            ' component using the state variables that we previously initialized.'
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p(
                { parentName: 'pre' },
                {
                  className: 'language-javascript',
                  metastring: 'path=src/content/RepoPage/RepoPage.js',
                  path: 'src/content/RepoPage/RepoPage.js',
                }
              ),
              '<Pagination\n  totalItems={totalItems}\n  backwardText="Previous page"\n  forwardText="Next page"\n  pageSize={currentPageSize}\n  pageSizes={[5, 10, 15, 25]}\n  itemsPerPageText="Items per page"\n  onChange={({ page, pageSize }) => {\n    if (pageSize !== currentPageSize) {\n      setCurrentPageSize(pageSize);\n    }\n    setFirstRowIndex(pageSize * (page - 1));\n  }}\n/>\n'
            )
          ),
          Object(a.b)(
            u,
            { mdxType: 'InlineNotification' },
            Object(a.b)(
              'p',
              null,
              Object(a.b)('strong', { parentName: 'p' }, 'Note:'),
              ' The ',
              Object(a.b)('inlineCode', { parentName: 'p' }, 'Pagination'),
              ' component isn’t inherently connected in any way to the ',
              Object(a.b)('inlineCode', { parentName: 'p' }, 'DataTable'),
              ' - we need to tell it what to do when a change occurs using the ',
              Object(a.b)('inlineCode', { parentName: 'p' }, 'onChange'),
              ' prop. This includes both page size changes and displaying different rows.'
            )
          ),
          Object(a.b)(
            u,
            { mdxType: 'InlineNotification' },
            Object(a.b)(
              'p',
              null,
              Object(a.b)('strong', { parentName: 'p' }, 'Note:'),
              ' Like the other Carbon React components, ',
              Object(a.b)('inlineCode', { parentName: 'p' }, 'Pagination'),
              ' component examples can be found in ',
              Object(a.b)(
                'a',
                p(
                  { parentName: 'p' },
                  {
                    href:
                      'http://react.carbondesignsystem.com/?selectedKind=Pagination',
                  }
                ),
                'Storybook'
              ),
              ' by browsing the story and knobs.'
            )
          ),
          Object(a.b)(
            'p',
            null,
            'That does it! Your data table should fetch GitHub data on first render. You can expand each row to see the repository’s description. You can modify the pagination items per page and cycle through pages or jump to a specific page of repositories.'
          ),
          Object(a.b)('h2', null, 'Submit pull request'),
          Object(a.b)(
            'p',
            null,
            'We’re going to submit a pull request to verify completion of this tutorial step.'
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
              p({ parentName: 'pre' }, { className: 'language-bash' }),
              '$ yarn ci-check\n'
            )
          ),
          Object(a.b)(
            u,
            { mdxType: 'InlineNotification' },
            Object(a.b)(
              'p',
              null,
              Object(a.b)('strong', { parentName: 'p' }, 'Note:'),
              ' Having issues running the CI check? ',
              Object(a.b)(
                'a',
                p(
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
              p({ parentName: 'pre' }, { className: 'language-bash' }),
              '$ git add --all && git commit -m "feat(tutorial): complete step 3"\n'
            )
          ),
          Object(a.b)('p', null, 'Then, push to your repository:'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              p({ parentName: 'pre' }, { className: 'language-bash' }),
              '$ git push origin react-step-3\n'
            )
          ),
          Object(a.b)(
            u,
            { mdxType: 'InlineNotification' },
            Object(a.b)(
              'p',
              null,
              Object(a.b)('strong', { parentName: 'p' }, 'Note:'),
              ' Having issues pushing your changes? ',
              Object(a.b)(
                'a',
                p(
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
              p(
                { parentName: 'p' },
                {
                  href:
                    'https://github.com/carbon-design-system/carbon-tutorial',
                }
              ),
              'carbon-tutorial'
            ),
            ' to “Compare & pull request”. In doing so, make sure that you are comparing to ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'react-step-3'),
            ' into ',
            Object(a.b)(
              'inlineCode',
              { parentName: 'p' },
              'base: react-step-3'
            ),
            '.'
          ),
          Object(a.b)(
            u,
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
      g.isMDXComponent = !0;
    },
  },
]);
//# sourceMappingURL=component---src-pages-tutorial-react-step-3-mdx-d2795369453ec11cff26.js.map
