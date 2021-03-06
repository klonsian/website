/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { ThemeContext } from "../context/themeContext"

import CustomLink from "./customLink"
import Header from "./header"
import HeaderMobileMenu from "./headerMobileMenu"
import SiteWrapper from "./siteWrapper"

const themes = {
	light: {
		foreground: "#222222",
		background: "#ffffff",
	},
	dark: {
		foreground: "#ffffff",
		background: "#222222",
	},
}

const ThemedLayout = styled.div`
	min-height: 100vh;
	background-color: ${(props) =>
		themes[props.theme.name].background};
	color: ${(props) => themes[props.theme.name].foreground};

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
					<HeaderMobileMenu />
					<Header
						siteTitle={
							data.site.siteMetadata.title || `Title`
						}
						theme={theme}
					/>

					<SiteWrapper>
						<div>
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
						</div>
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
