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
			<label htmlFor={id} className="switch--toggle" />
		</div>
	)
}

Switch.propTypes = {
	onChange: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
}

export default Switch
