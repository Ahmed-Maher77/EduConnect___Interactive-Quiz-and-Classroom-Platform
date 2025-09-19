import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar";
import { useAppSelector } from "../utils/redux-toolkit/hooks";
import { useEffect } from "react";
import Footer from "../common/Footer/Footer";
import ScrollToTop from "../common/Animations/ScrollToTop";

const Layout = () => {
	const location = useLocation();
	const lang = useAppSelector((state) => state.globalStates.lang);
	const themeMode = useAppSelector((state) => state.globalStates.themeMode);

	// Hide Navbar if current route isn't one of the defined routes
	const definedRoutes = [
		"/",
		"/about",
		"/login",
		"/create-account",
		"/forgot-password",
		"/contact",
		"/complain",
		"/dashboard",
	];
	const showNavbar = definedRoutes.includes(location.pathname);

	// Set theme mode on <html> element
	useEffect(() => {
		document.documentElement.className = themeMode;
	}, [themeMode]);

	// Set lang on <html> element
	useEffect(() => {
		document.documentElement.lang = lang.code;
	}, [lang]);

	return (
		<>
			{showNavbar && <Navbar />}
			<Outlet />
			{showNavbar && <Footer />}
			<ScrollToTop />
		</>
	);
};

export default Layout;
