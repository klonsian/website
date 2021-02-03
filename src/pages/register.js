import React, { useState, useContext } from "react"
import firebase from "gatsby-plugin-firebase"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { AuthContext } from "../context/auth"

const Register = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
		error: null,
	})

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
				.createUserWithEmailAndPassword(
					data.email,
					data.password
				)
			setUser(result)
			navigate("/")
		} catch (err) {
			setData({ ...data, error: err.message })
		}
	}

	return (
		<Layout>
			<SEO title="Register" />
			<h4>Register</h4>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Email</label>
					<br />
					<input
						type="text"
						name="email"
						value={data.email}
						onChange={handleChange}
					/>
					<br />
					<br />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<br />
					<input
						type="password"
						name="password"
						value={data.password}
						onChange={handleChange}
					/>
					<br />
					<br />
				</div>
				{data.error ? (
					<p style={{ color: "red" }}>{data.error}</p>
				) : null}
				<input type="submit" value="Register" />
			</form>
		</Layout>
	)
}

export default Register
