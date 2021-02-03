import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

// const data = [{section: "Typography" {"token": "@include font('xxxl')", "headline": "xxxl"}}]

const IndexPage = () => {
	return (
		<Layout>
			<div className="bx--row">
				<div className="bx--col">
					<p>Type Tokens</p>
				</div>
				<div className="bx--col">
					<p className="heading-01">H1</p>
				</div>
				<div className="bx--col">
					<p>Now go build something great.</p>
				</div>
				<div className="bx--col">
					<p>
						<Link to="/projects/page-2/">
							Go to page 2
						</Link>
					</p>
				</div>
			</div>
		</Layout>
	)
}

export default IndexPage
