import { useState } from "react";
import "./Navbar.scss";
import NavbarContainer from "./NavbarContainer/NavbarContainer";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<NavbarContainer
			isMenuOpen={isMenuOpen}
			onToggleMenu={toggleMenu}
			onCloseMenu={closeMenu}
		/>
	);
};

export default Navbar;
