import React from "react"
import { Router } from "@reach/router"
import IndexPage from "./index"
import Login from "./login"
import PrivateRoute from "../components/privateRoute"
import Register from "./register"
import SecondPage from "./page-2"

const Projects = () => {
	return (
		<Router basepath="/projects">
			<Register path="/register" />
			<PrivateRoute path="/page-2" component={SecondPage} />
			<Login path="/login" />
			<IndexPage path="/" />
		</Router>
	)
}

export default Projects
