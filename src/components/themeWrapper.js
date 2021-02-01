import React from "react"
import PropTypes from "prop-types"

const ThemeWrapper = ({ children }) => {
	return (
		<div
			style={{
				backgroundColor: "var(--bg)",
				color: "var(--textNormal)",
				transition: "0.2s linear",
				minHeight: "100vh",
			}}
		>
			{children}
		</div>
	)
}

ThemeWrapper.propTypes = {
	children: PropTypes.node.isRequired,
}

export default ThemeWrapper
