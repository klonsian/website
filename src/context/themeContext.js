import React, { useState, useEffect } from "react"

export const ThemeContext = React.createContext({
	name: "light",
	updateTheme: () => {},
})

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		localStorage.getItem("usedTheme") || "light"
	)

	useEffect(() => {
		localStorage.setItem("usedTheme", theme)
	}, [theme])

	return (
		<ThemeContext.Provider
			value={{
				name: theme,
				updateTheme: setTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
