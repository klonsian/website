/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react"
import { navigate } from "gatsby"
import { AuthContext } from "../context/auth"

const PrivateRoute = ({
	component: Component,
	location,
	...rest
}) => {
	const { user } = useContext(AuthContext)

	return <>{!user ? navigate("/login") : <Component {...rest} />}</>
}

export default PrivateRoute