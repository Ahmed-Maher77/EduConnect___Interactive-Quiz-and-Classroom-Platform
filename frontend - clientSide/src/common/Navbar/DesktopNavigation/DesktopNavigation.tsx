import { NavLink } from "react-router-dom";
import { smoothScrollTo } from "../../../utils/functions/smoothScroll";

interface DesktopNavigationProps {
	isAuth: boolean;
	onLinkClick: () => void;
}

const DesktopNavigation = ({ isAuth, onLinkClick }: DesktopNavigationProps) => {
	const handleSameRouteScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		path: string
	) => {
		if (window.location.pathname === path) {
			e.preventDefault();
			smoothScrollTo("");
			onLinkClick();
		}
	};

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
				<NavLink
					to="/about"
					onClick={(e) => handleSameRouteScroll(e, "/about")}
				>
					About
				</NavLink>
			</li>
			{/* Contact Link */}
			<li className="Navbar-Item text-lg">
				<NavLink
					to="/contact"
					onClick={(e) => handleSameRouteScroll(e, "/contact")}
				>
					Contact
				</NavLink>
			</li>
			{/* Dashboard/Login Link */}
			<li className="Navbar-Item text-lg">
				{isAuth ? (
					// Dashboard Link
					<NavLink
						to="/dashboard"
						onClick={(e) => handleSameRouteScroll(e, "/dashboard")}
					>
						Dashboard
					</NavLink>
				) : (
					// Login Link
					<NavLink
						to="/login"
						onClick={(e) => handleSameRouteScroll(e, "/login")}
					>
						Login
					</NavLink>
				)}
			</li>
		</ul>
	);
};

export default DesktopNavigation;
