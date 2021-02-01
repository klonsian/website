/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "firebase/auth"
import React from "react"
import AuthProvider from "./src/context/auth"
import "./src/styles/global.scss"
import "./src/styles/layout.scss"
import "./src/styles/header.scss"
import "./src/styles/login.scss"
import "./src/static/fonts/fonts.scss"
import "./src/styles/_mixins.scss"

export const wrapRootElement = ({ element }) => (
	<AuthProvider>{element}</AuthProvider>
)
