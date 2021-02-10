/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const CustomLink = ({ title, external, ...rest }) => {
	return external === true ? (
		<a className="custom--link" {...rest}>
			{title}
		</a>
	) : (
		<Link className="custom--link" {...rest}>
			{title}
		</Link>
	)
}

CustomLink.propTypes = {
	title: PropTypes.string.isRequired,
	external: PropTypes.bool,
}

export default CustomLink
