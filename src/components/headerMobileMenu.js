import cx from "classnames"
import lottie from "lottie-web"
import React, { useEffect, useRef, useState } from "react"

import animation from "../_data/anim_menu.json"

const HeaderMobileMenu = () => {
	const [open, setOpen] = useState(false)

	const animationContainer = useRef()

	const anim = useRef(null) // store anim variable independetntly from (re)rendering

	useEffect(() => {
		anim.current = lottie.loadAnimation({
			container: animationContainer.current,
			renderer: "svg",
			loop: false,
			autoplay: false,
			animationData: animation,
		})
		return () => anim.current.destroy() // optional clean up for unmounting
	}, [])

	const handleClick = () => {
		if (!open) {
			anim.current.playSegments([0, 60], true)
			setOpen(true)
			console.log(open)
		} else {
			anim.current.playSegments([60, 119], true)
			setOpen(false)
			console.log(open)
		}
	}

	return (
		<>
			<button
				type="button"
				className="header--mobile-button"
				onClick={handleClick}
			>
				<div
					className="header--mobile-icon"
					ref={animationContainer}
				/>
			</button>
			<div
				className={cx("header--mobile-container", {
					"header--mobile-container__open": open,
				})}
			>
				<div className="header--mobile-menu">Link 1</div>
			</div>
		</>
	)
}

export default HeaderMobileMenu
