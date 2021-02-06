/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const HeaderLink = ({ title, ...rest }) => {
	return (
		<Link className="header--menu-item" {...rest}>
			{title}
		</Link>
	)
}

HeaderLink.propTypes = {
	title: PropTypes.string.isRequired,
}

export default HeaderLink
