import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, {
	useContext,
	createRef,
	useEffect,
	useState,
} from "react"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../context/auth"
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

	let animationContainer = createRef()

	const [isDark, setIsDark] = useState(false)
	useEffect(() => {
		const anim = lottie.loadAnimation({
			container: animationContainer.current,
			renderer: "svg",
			loop: false,
			autoplay: false,
			animationData: animation,
		})

		animationContainer.current.addEventListener("click", (e) => {
			if (isDark === false) {
				anim.playSegments([0, 24], true)
				setIsDark(true)
			} else {
				anim.playSegments([24, 48], true)
				setIsDark(false)
			}
			console.log(isDark)
		})
		return () => anim.destroy()
	}, [])

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
										type="checkbox"
										onChange={(e) =>
											toggleTheme(
												e.target.checked
													? "dark"
													: "light"
											)
										}
										checked={theme === "dark"}
									/>{" "}
									Dark mode
								</label>
							)}
						</ThemeToggler>
						<div
							className="header--darkmode--toggle"
							ref={animationContainer}
						/>
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
