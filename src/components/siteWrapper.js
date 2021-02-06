import React from "react"
import PropTypes from "prop-types"

const SiteWrapper = ({ children }) => {
	return <div className="site-wrapper">{children}</div>
}

SiteWrapper.propTypes = {
	children: PropTypes.node.isRequired,
}

export default SiteWrapper
