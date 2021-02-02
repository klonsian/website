import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"
// import firebase from "gatsby-plugin-firebase"
// import { AuthContext } from "../context/auth"
import Logo from "./logo"
import lottie from "lottie-web"
import animation from "../_data/animations/dark-mode-toggle.json"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import HeaderLink from "./headerLink"

const Header = ({ siteTitle }) => {
	// const { user } = useContext(AuthContext)

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
	}, [animationContainer])

	return (
		<div className="site-wrapper">
			<div class="bx--grid">
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
							)}
						</ThemeToggler>
						<HeaderLink to="/projects" title="Projects" />
						<HeaderLink to="/about" title="About" />
					</div>
					{/* <h6>
						{!user ? (
							<>
								<Link to="/login">Login</Link>
								<Link to="/register">Register</Link>
							</>
						) : (
							<Link onClick={handleLogout} to="/#!">
								Logout
							</Link>
						)}
					</h6> */}
				</header>
			</div>
		</div>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
