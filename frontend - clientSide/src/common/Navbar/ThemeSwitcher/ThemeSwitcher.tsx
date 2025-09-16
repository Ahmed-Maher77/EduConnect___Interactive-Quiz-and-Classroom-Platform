import { useAppDispatch } from "../../../utils/redux-toolkit/hooks";
import { changeThemeMode } from "../../../utils/redux-toolkit/globalStates_Slice";
import type { ThemeSwitcherProps } from "../../Types/Interfaces";

const ThemeSwitcher = ({ isDarkMode, screen }: ThemeSwitcherProps) => {
	const dispatch = useAppDispatch();

	const changeTheme = () => {
		const theme = isDarkMode ? "light" : "dark";
		dispatch(changeThemeMode(theme));
	};

	return screen === "mobile" ? (
		<button
			className="theme-toggle-btn"
			onClick={changeTheme}
			aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
		>
			<i className={`fa-solid ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
		</button>
	) : (
		<button
			className="theme-toggle-btn"
			onClick={changeTheme}
			aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
		>
			<i className={`fa-solid ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
		</button>
	);
};

export default ThemeSwitcher;
