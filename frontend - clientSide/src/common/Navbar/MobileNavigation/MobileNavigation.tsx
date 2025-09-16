import { NavLink, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../utils/redux-toolkit/hooks";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import {
	createHomeScrollHandler,
	smoothScrollTo,
} from "../../../utils/functions/smoothScroll";

interface MobileNavigationProps {
	isOpen: boolean;
	onLinkClick: () => void;
}

const MobileNavigation = ({ isOpen, onLinkClick }: MobileNavigationProps) => {
	const navigate = useNavigate();
	const isAuth = useAppSelector((state) => state.userInfo.isAuth);

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
				<li className="mobile-nav-item">
					<NavLink to="/contact" onClick={onLinkClick}>
						Contact
					</NavLink>
				</li>
				{/* Dashboard Link */}
				<li className="mobile-nav-item">
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
			<div className="mobile-nav-buttons">
				{/* Profile Dropdown */}
				{isAuth ? (
					<ProfileDropdown />
				) : (
					// Get Started Button
					<button className="btn-main-blue p-3" onClick={onLinkClick}>
						Get Started
					</button>
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
