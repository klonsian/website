import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<div className="bx--row">
				<div className="bx--col">
					<p>Hi people</p>
				</div>
				<div className="bx--col">
					<p>Welcome to your new Gatsby site.</p>
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
