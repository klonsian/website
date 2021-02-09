import PropTypes from "prop-types"
import React, { useContext } from "react"
import { Link, navigate } from "gatsby"
import Switch from "./switch"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../context/auth"
import HeaderLink from "./headerLink"
import SiteWrapper from "./siteWrapper"

const Header = ({ siteTitle, theme }) => {
	const { user } = useContext(AuthContext)

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
