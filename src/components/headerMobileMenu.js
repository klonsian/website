import React, { useEffect, useRef, useState } from "react"
import lottie from "lottie-web"
import animation from "../_data/anim_menu.json"

const HeaderMobileMenu = () => {
	const [open, setOpen] = useState(false)

	const animationContainer = useRef()

	useEffect(() => {
		const anim = lottie.loadAnimation({
			container: animationContainer.current,
			renderer: "svg",
			loop: false,
			autoplay: false,
			animationData: animation,
		})
		return () => anim.destroy() // optional clean up for unmounting
	}, [])

	return (
		<>
			<button
				className="header--mobile-button"
				onClick={() => {
					if (!open) {
						anim.playSegments([0, 60], true),
							setOpen(true)
					} else {
						anim.playSegments([60, 119], true),
							setOpen(false)
					}
				}}
			>
				<div
					className="header--mobile-icon"
					ref={animationContainer}
				/>
			</button>
			<div className="header--mobile-container">
				<div className="header--mobile-menu">Link 1</div>
			</div>
		</>
	)
}

export default HeaderMobileMenu
