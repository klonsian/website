/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "firebase/auth"
import React from "react"
import AuthProvider from "./src/context/auth"
import { ThemeProvider } from "./src/context/themeContext"
import "./src/styles/global.scss"
import "./src/styles/layout.scss"
import "./src/styles/header.scss"
import "./src/styles/login.scss"
import "./src/styles/_mixins.scss"
import "./src/styles/switch.scss"
import "./src/styles/custom.scss"
import "./src/styles/grid.scss"

export const wrapRootElement = ({ element }) => (
	<AuthProvider>
		<ThemeProvider>{element}</ThemeProvider>
	</AuthProvider>
)
