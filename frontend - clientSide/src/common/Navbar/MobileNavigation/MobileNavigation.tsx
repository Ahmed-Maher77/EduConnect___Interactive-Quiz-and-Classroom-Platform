import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../utils/redux-toolkit/hooks";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { smoothScrollTo } from "../../../utils/functions/smoothScroll";

interface MobileNavigationProps {
	isOpen: boolean;
	onLinkClick: () => void;
}

const MobileNavigation = ({ isOpen, onLinkClick }: MobileNavigationProps) => {
	const isAuth = useAppSelector((state) => state.userInfo.isAuth);

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
		<div className={`mobile-menu ${isOpen ? "open" : ""}`}>
			<ul className="mobile-nav-list">
				{/* Home Link */}
				<li className="mobile-nav-item">
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
				<li className="mobile-nav-item">
					<NavLink
						to="/about"
						onClick={(e) => handleSameRouteScroll(e, "/about")}
					>
						About
					</NavLink>
				</li>
				{/* Contact Link */}
				<li className="mobile-nav-item">
					<NavLink
						to="/contact"
						onClick={(e) => handleSameRouteScroll(e, "/contact")}
					>
						Contact
					</NavLink>
				</li>
				{/* Dashboard Link */}
				<li className="mobile-nav-item">
					{isAuth ? (
						// Dashboard Link
						<NavLink
							to="/dashboard"
							onClick={(e) =>
								handleSameRouteScroll(e, "/dashboard")
							}
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
			<div className="mobile-nav-buttons">
				{/* Profile Dropdown */}
				{isAuth ? (
					<ProfileDropdown />
				) : (
					// Get Started Button
					<NavLink to="/create-account?role=student" className="btn-main-blue p-3 text-center" onClick={onLinkClick}>
						Get Started
					</NavLink>
				)}

				{/* Install App Button */}
				<button
					className="btn-main-gray mobile-btn"
					onClick={onLinkClick}
				>
					Install App
				</button>
			</div>
		</div>
	);
};

export default MobileNavigation;
