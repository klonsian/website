/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { navigate } from "gatsby"
import React, { useContext, useEffect } from "react"

import { AuthContext } from "../context/auth"

const PrivateRoute = ({
	component: Component,
	location,
	...rest
}) => {
	useEffect(() => {
		localStorage.setItem("privateUrl", location.pathname)
	}, [location.pathname])

	const { user } = useContext(AuthContext)

	return <>{!user ? navigate("/login") : <Component {...rest} />}</>
}

export default PrivateRoute
