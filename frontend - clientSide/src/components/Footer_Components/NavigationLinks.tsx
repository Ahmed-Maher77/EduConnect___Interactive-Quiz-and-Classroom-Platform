import { Link, useNavigate } from "react-router-dom";
import type { NavigationLink } from "../../common/Footer/footerData";
import { useAppSelector } from "../../utils/redux-toolkit/hooks";
import { smoothScrollTo } from "../../utils/functions/smoothScroll";

interface NavigationLinksProps {
	links: NavigationLink[];
}

const NavigationLink = ({
	link,
	navigate,
}: {
	link: NavigationLink;
	navigate: (path: string) => void;
}) => {
	// Handle Home link specially - scroll to top if already on home page
	if (link.to === "/") {
		return (
			<Link
				to={link.to}
				className="footer-link"
				onClick={(e) => {
					// If already on home page, scroll to top
					if (window.location.pathname === "/") {
						e.preventDefault();
						smoothScrollTo(""); // Scroll to top of page
					}
				}}
			>
				{link.label}
			</Link>
		);
	}

	// Handle hash links - convert to About route (legacy section link removed)
	if (link.to.startsWith("#")) {
		return (
			<Link to="/about" className="footer-link">
				{link.label}
			</Link>
		);
	}

	// Handle regular links and enable same-route scroll-to-top
	return (
		<Link
			to={link.to}
			className="footer-link"
			onClick={(e) => {
				if (window.location.pathname === link.to) {
					e.preventDefault();
					smoothScrollTo("");
				}
			}}
		>
			{link.label}
		</Link>
	);
};

const NavigationLinks = ({ links }: NavigationLinksProps) => {
	const navigate = useNavigate();
	const isAuth = useAppSelector((state) => state.userInfo.isAuth);

	return (
		<div className="footer-links">
			{links.map((link) => {
				if (isAuth && link.to === "/login") return null;
				if (!isAuth && link.to === "/dashboard") return null;
				return (
					<NavigationLink
						key={link.to}
						link={link}
						navigate={navigate}
					/>
				);
			})}
		</div>
	);
};

export default NavigationLinks;
