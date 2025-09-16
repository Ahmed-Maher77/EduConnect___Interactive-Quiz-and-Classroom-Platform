import Logo from "../Logo";
import DesktopNavigation from "../DesktopNavigation/DesktopNavigation";
import DesktopButtons from "../DesktopButtons/DesktopButtons";
import MobileMenuButton from "../MobileMenuButton/MobileMenuButton";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useAppSelector } from "../../../utils/redux-toolkit/hooks";

interface NavbarContainerProps {
	isMenuOpen: boolean;
	onToggleMenu: () => void;
	onCloseMenu: () => void;
}

const NavbarContainer = ({
	isMenuOpen,
	onToggleMenu,
	onCloseMenu,
}: NavbarContainerProps) => {
	const isAuth = useAppSelector((state) => state.userInfo.isAuth);
	const themeMode = useAppSelector((state) => state.globalStates.themeMode);
	const isDarkMode = themeMode === "dark";

	return (
		<div className="Navbar relative">
			<div className="container flex justify-between items-center py-4">
				<Logo />

				<DesktopNavigation isAuth={isAuth} onLinkClick={onCloseMenu} />

				<DesktopButtons />

				{/* Mobile Switchers - Always Visible */}
				<div className="mobile-switchers flex items-center gap-3 lg:hidden">
					<LanguageSwitcher />
					<ThemeSwitcher screen="mobile" isDarkMode={isDarkMode} />
				</div>

				<MobileMenuButton isOpen={isMenuOpen} onToggle={onToggleMenu} />
			</div>

			<MobileNavigation isOpen={isMenuOpen} onLinkClick={onCloseMenu} />
		</div>
	);
};

export default NavbarContainer;
