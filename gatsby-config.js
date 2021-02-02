require("dotenv").config()

module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-dark-mode`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				custom: {
					families: ["Munken Sans"],
					urls: ["/fonts/fonts.css"],
				},
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets/,
				},
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
		{
			resolve: "gatsby-plugin-firebase",
			options: {
				credentials: {
					apiKey: process.env.apiKey,
					authDomain: process.env.authDomain,
					projectId: process.env.projectId,
					storageBucket: process.env.storageBucket,
					messagingSenderId: process.env.messagingSenderId,
					appId: process.env.appId,
				},
			},
		},
		{
			resolve: `gatsby-plugin-create-client-paths`,
			options: { prefixes: [`/projects/*`] },
		},
	],
}