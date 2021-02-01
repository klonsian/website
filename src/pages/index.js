import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<div class="bx--row">
				<div class="bx--col">
					<p>Hi people</p>
				</div>
				<div class="bx--col">
					<p>Welcome to your new Gatsby site.</p>
				</div>
				<div class="bx--col">
					<p>Now go build something great.</p>
				</div>
				<div class="bx--col">
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
