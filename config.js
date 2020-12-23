const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://hasura.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    logoLink: 'https://github.com/lotivo/',
    title:
      "<a href='https://hasura.io/learn/'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/lotivo/sequelize-guard',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/iampankajv1" title="Pankaj Vaghela | Twitter" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter Pankaj Vaghela'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://sequelizeguard.slack.com" title="Join Slack" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://image.flaticon.com/icons/png/512/2111/2111615.png' alt={'Join Slack'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Lotivo', link: 'https://github.com/lotivo' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://github.com/lotivo/sequelize-guard'>Sequelize Guard </a><div class='greenCircle'></div>",
  },
  siteMetadata: {
    title: 'Sequelize Guard Documentation',
    description: 'Documentation for Sequelize Guard. An Authorization Library for Sequelize Guard.',
    ogImage: null,
    docsLocation: 'https://github.com/lotivo/sequelize-guard-docs',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Sequelize Guard Documentation',
      short_name: 'Sequelize Guard Docs',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
