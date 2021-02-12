import { Router } from "@reach/router"
import React from "react"

import PrivateRoute from "../../components/privateRoute"

import SecondPage from "./page-2"
import ThirdPage from "./page-3"

const Work = () => {
	return (
		<Router basepath="/work">
			<PrivateRoute path="/page-2" component={SecondPage} />
			<PrivateRoute path="/page-3" component={ThirdPage} />
		</Router>
	)
}

export default Work
