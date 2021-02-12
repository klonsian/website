import PropTypes from "prop-types"
import React from "react"

const SiteWrapper = ({ children }) => {
	return <div className="site-wrapper">{children}</div>
}

SiteWrapper.propTypes = {
	children: PropTypes.node.isRequired,
}

export default SiteWrapper
