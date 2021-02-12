import { Link } from "gatsby"
import React from "react"

import Icon64 from "../assets/logo.svg"

const Logo = () => {
	return (
		<div className="logo--container">
			<Link to="/">
				<Icon64 className="logo--icon" alt="Logo" />
			</Link>
		</div>
	)
}

export default Logo
