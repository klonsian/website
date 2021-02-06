import PropTypes from "prop-types"
import React from "react"

const Switch = ({ onChange, id, checked }) => {
	return (
		<div className="switch--container">
			<input
				id={id}
				className="switch--input"
				type="checkbox"
				onChange={onChange}
				checked={checked}
			/>
			<label for={id} className="switch--toggle"></label>
		</div>
	)
}

// Header.propTypes = {
// 	siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
// 	siteTitle: ``,
// }

export default Switch
