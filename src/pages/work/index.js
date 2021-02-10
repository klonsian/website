import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../../components/privateRoute"
import SecondPage from "./page-2"
import ThirdPage from "./page-3"

const Work = () => {
	return (
		<Router basepath="/work">
			<PrivateRoute path="/page-2" component={SecondPage} />
			<ThirdPage path="/page-3" />
		</Router>
	)
}

export default Work
