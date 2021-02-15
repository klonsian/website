/* eslint-disable react/jsx-props-no-spreading */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const HeaderLink = ({ title, ...rest }) => {
	return (
		<Link className="header--menu-item" {...rest}>
			<p>{title}</p>
		</Link>
	)
}

HeaderLink.propTypes = {
	title: PropTypes.string.isRequired,
}

export default HeaderLink
