import { NavLink, useNavigate } from "react-router-dom";
import {
	createHomeScrollHandler,
	smoothScrollTo,
} from "../../../utils/functions/smoothScroll";

interface DesktopNavigationProps {
	isAuth: boolean;
	onLinkClick: () => void;
}

const DesktopNavigation = ({ isAuth, onLinkClick }: DesktopNavigationProps) => {
	const navigate = useNavigate();

	return (
		<ul className="Navbar-List hidden lg:flex gap-5">
			{/* Home Link */}
			<li className="Navbar-Item text-lg">
				<NavLink
					to="/"
					onClick={(e) => {
						// If already on home page, scroll to top
						if (window.location.pathname === "/") {
							e.preventDefault();
							smoothScrollTo(""); // Scroll to top of page
						}
						onLinkClick();
					}}
				>
					Home
				</NavLink>
			</li>
			{/* About Link */}
			<li className="Navbar-Item text-lg">
				<a
					href="#about-developer"
					onClick={(e) => {
						createHomeScrollHandler(
							"about-developer",
							90,
							navigate
						)(e);
						onLinkClick();
					}}
				>
					About
				</a>
			</li>
			{/* Contact Link */}
			<li className="Navbar-Item text-lg">
				<NavLink to="/contact" onClick={onLinkClick}>
					Contact
				</NavLink>
			</li>
			{/* Dashboard Link */}
			<li className="Navbar-Item text-lg">
				{isAuth ? (
					// Dashboard Link
					<NavLink to="/dashboard" onClick={onLinkClick}>
						Dashboard
					</NavLink>
				) : (
					// Login Link 
					<NavLink to="/login" onClick={onLinkClick}>
						Login
					</NavLink>
				)}
			</li>
		</ul>
	);
};

export default DesktopNavigation;
