import PropTypes from "prop-types"
<<<<<<< HEAD
import React, { useEffect, useRef } from "react"
// import firebase from "gatsby-plugin-firebase"
// import { AuthContext } from "../context/auth"
import lottie from "lottie-web"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Logo from "./logo"
import animation from "../_data/animations/dark-mode-toggle.json"
=======
import React, { useContext } from "react"
import { Link, navigate } from "gatsby"
import Switch from "./switch"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../context/auth"
>>>>>>> 5bde3e8bc84052be1e34200ddcbe61c7dbb0e7a8
import HeaderLink from "./headerLink"
import SiteWrapper from "./siteWrapper"

const Header = ({ siteTitle, theme }) => {
	const { user } = useContext(AuthContext)

<<<<<<< HEAD
	// const handleLogout = async () => {
	// 	await firebase.auth().signOut()
	// 	navigate("/login")
	// }

	const animationContainer = useRef(null)

	let anim = null

	useEffect(() => {
		anim = lottie.loadAnimation({
			container: animationContainer.current,
			renderer: "svg",
			loop: false,
			autoplay: false,
			animationData: animation,
		})
	}, [])

	return (
		<div className="site-wrapper">
			<div className="bx--grid">
				<header className="header--container">
					<Logo />
					<div className="header--menu">
						<ThemeToggler>
							{({ theme, toggleTheme }) => (
								<label>
									<input
										className="header--input"
										type="checkbox"
										onChange={(e) => {
											toggleTheme(
												e.target.checked
													? "dark"
													: "light"
											)
											if (!e.target.checked) {
												anim?.playSegments(
													[24, 48],
													true
												)
											} else {
												anim?.playSegments(
													[0, 24],
													true
												)
											}
										}}
										checked={theme === "dark"}
									/>
									<div
										className="header--darkmode--toggle"
										ref={animationContainer}
									/>
								</label>
=======
	const handleLogout = async () => {
		await firebase.auth().signOut()
		navigate("/login")
	}

	return (
		<section id="header">
			<SiteWrapper>
				<header className="header--box">
					<div className="header--container">
						<HeaderLink to="/" title="Fabian Klonsdorf" />
						<div className="header--menu">
							<HeaderLink to="/work" title="Work" />
							<HeaderLink to="/blog" title="Blog" />
							<HeaderLink to="/about" title="About" />
							<Switch
								onChange={() =>
									theme.updateTheme(
										theme.name === "light"
											? "dark"
											: "light"
									)
								}
								checked={theme.name === "dark"}
								id="darkmode"
								label="Dark Mode"
							/>
						</div>
						{/* <h6>
							{!user ? (
								<>
									<Link to="/login">Login</Link>
									<Link to="/register">
										Register
									</Link>
								</>
							) : (
								<Link onClick={handleLogout} to="/#!">
									Logout
								</Link>
>>>>>>> 5bde3e8bc84052be1e34200ddcbe61c7dbb0e7a8
							)}
						</h6> */}
					</div>
				</header>
			</SiteWrapper>
		</section>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
