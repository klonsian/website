import React from "react"
import { Link } from "gatsby"
import { Column, Row } from "carbon-components-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CustomLink from "../components/customLink"

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<Row>
				<Column md={2}>
					<p>Hi people</p>
				</Column>
				<Column md={2}>
					<p>Welcome to your new Gatsby site.</p>
				</Column>
				<Column md={2}>
					<p>Now go build something great.</p>
				</Column>
				<Column md={2}>
					<CustomLink
						to="/projects/page-2/"
						title="Go to page 2"
					/>
				</Column>
			</Row>
		</Layout>
	)
}

export default IndexPage
