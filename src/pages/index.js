import React from "react"

import CustomLink from "../components/customLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<div>
				<div>
					<p>Hi people</p>
				</div>
				<div>
					<p>Welcome to your new Gatsby site.</p>
				</div>
				<div>
					<p>Now go build something great.</p>
				</div>
				<div>
					<p>
						<CustomLink
							to="/work/page-2/"
							title="Go to page 2"
						/>
					</p>
					<p>
						<CustomLink
							to="/work/page-3/"
							title="Go to page 3"
						/>
					</p>
				</div>
			</div>
		</Layout>
	)
}

export default IndexPage
