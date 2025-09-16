import { useAppSelector } from "../../../utils/redux-toolkit/hooks";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";

const DesktopButtons = () => {
	const themeMode = useAppSelector((state) => state.globalStates.themeMode);
	const isDarkMode = themeMode === "dark";
	const isAuth = useAppSelector((state) => state.userInfo.isAuth);

	return (
		<div className="Navbar-Buttons hidden lg:flex gap-3 items-center">
			<ThemeSwitcher screen="desktop" isDarkMode={isDarkMode} />
			<LanguageSwitcher />

			{isAuth ? (
				<ProfileDropdown />
			) : (
				<button className="btn-main-blue">Get Started</button>
			)}
		</div>
	);
};

export default DesktopButtons;
