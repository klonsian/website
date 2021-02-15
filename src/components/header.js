import { useMediaQuery } from "beautiful-react-hooks"
// import { Link, navigate } from "gatsby"
// import firebase from "gatsby-plugin-firebase"
import PropTypes from "prop-types"
import React from "react"

// import { AuthContext } from "../context/auth"

import HeaderLink from "./headerLink"
import SiteWrapper from "./siteWrapper"
import Switch from "./switch"

const Header = ({ siteTitle, theme }) => {
	const isSmall =
		typeof window !== "undefined" &&
		useMediaQuery("(max-width: 671px)")

	// const { user } = useContext(AuthContext)

	// const handleLogout = async () => {
	// 	await firebase.auth().signOut()
	// 	navigate("/login")
	// }

	return (
		<section id="header">
			<SiteWrapper>
				<header className="header--box">
					<div className="header--container">
						<HeaderLink to="/" title="Fabian Klonsdorf" />
						{!isSmall && (
							<div className="header--menu">
								<HeaderLink to="/work" title="Work" />
								<HeaderLink to="/blog" title="Blog" />
								<HeaderLink
									to="/about"
									title="About"
								/>
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
						)}
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
