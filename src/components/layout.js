/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "../context/themeContext"
import styled from "@emotion/styled"
import Header from "./header"
import SiteWrapper from "./siteWrapper"
import { Grid } from "carbon-components-react"
import CustomLink from "./customLink"

const themes = {
	light: {
		foreground: "inherit",
		background: "inherit",
	},
	dark: {
		foreground: "#ffffff",
		background: "#222222",
	},
}

const ThemedLayout = styled.div`
	color: ${(props) => themes[props.theme.name].foreground};
	background-color: ${(props) =>
		themes[props.theme.name].background};
	min-height: 100vh;

	& a {
		color: ${(props) =>
			props.theme.name === "dark" ? "#ffffff" : "inherit"};
	}
`

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<ThemeContext.Consumer>
			{(theme) => (
				<ThemedLayout theme={theme}>
					<Header
						siteTitle={
							data.site.siteMetadata.title || `Title`
						}
						theme={theme}
					/>
					<SiteWrapper>
						<Grid>
							<main>{children}</main>
							<footer
								style={{
									marginTop: `2rem`,
								}}
							>
								© {new Date().getFullYear()}, Built
								with
								{` `}
								<CustomLink
									external
									href="https://www.gatsbyjs.com"
									title="Gatsby"
								/>
							</footer>
						</Grid>
					</SiteWrapper>
				</ThemedLayout>
			)}
		</ThemeContext.Consumer>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
