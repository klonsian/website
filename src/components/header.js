import PropTypes from "prop-types"
import React from "react"
// import Switch from "react-switch"
import Switch from "./switch"
// import firebase from "gatsby-plugin-firebase"
// import { AuthContext } from "../context/auth"
import HeaderLink from "./headerLink"
import SiteWrapper from "./siteWrapper"
import { Grid } from "carbon-components-react"

const Header = ({ siteTitle, theme }) => {
	// const { user } = useContext(AuthContext)

	// const handleLogout = async () => {
	// 	await firebase.auth().signOut()
	// 	navigate("/login")
	// }

	return (
		<section id="header">
			<SiteWrapper>
				<header className="header--box">
					<Grid className="header--container">
						<HeaderLink to="/" title="Fabian Klonsdorf" />
						<div className="header--menu">
							<HeaderLink
								to="/projects"
								title="Projects"
							/>
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
								<Link to="/register">Register</Link>
							</>
						) : (
							<Link onClick={handleLogout} to="/#!">
								Logout
							</Link>
						)}
					</h6> */}
					</Grid>
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
