/* eslint-disable react/jsx-props-no-spreading */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
