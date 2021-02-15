/* eslint-disable jsx-a11y/label-has-associated-control */
import cx from "classnames"
import { navigate } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import React, { useContext, useState } from "react"

import { AuthContext } from "../context/auth"

const Login = () => {
	const [data, setData] = useState({
		email: "auth@klonsdorf.com",
		password: "",
		error: null,
	})

	const redirectUrl =
		typeof window !== "undefined" &&
		localStorage.getItem("privateUrl")

	const errorMessage =
		"Oops. Something weird happened. Please try again."

	const { setUser } = useContext(AuthContext)

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setData({ ...data, error: null })

		try {
			const result = await firebase
				.auth()
				.signInWithEmailAndPassword(data.email, data.password)
			setUser(result)
			navigate(redirectUrl)
		} catch (err) {
			setData({ ...data, error: errorMessage })
			console.log(err.message)
		}
	}

	const placeholder = "enter code"

	return (
		<div className="site-wrapper">
			<div
				className={cx("login--container", {
					"login--password-err_shake": data.error,
				})}
			>
				<form onSubmit={handleSubmit}>
					<div className="login--email">
						<label htmlFor="email">Email</label>
						<br />
						<input
							type="text"
							name="email"
							value={data.email}
							onChange={handleChange}
							disabled
							readOnly
						/>
						<br />
						<br />
					</div>
					<div className="login--password-container">
						<input
							className="login--password"
							type="password"
							name="password"
							placeholder={placeholder}
							value={data.password}
							onChange={handleChange}
						/>
						<input
							className="login--password-btn"
							type="submit"
							value="→"
						/>
						{data.error ? (
							<div className="login--password-err">
								{data.error}
							</div>
						) : null}
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
