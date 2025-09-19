import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import { lazy, Suspense, useState, useEffect } from "react";
import { ToastProvider } from "./components/Toast/ToastContext";

// Import Pages
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import PageLoader from "./components/Loader/PageLoader/PageLoader";
const ForgotPassword = lazy(
	() => import("./pages/ForgotPassword/ForgotPassword")
);
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Complain = lazy(() => import("./pages/Complain/Complain"));
const Login = lazy(() => import("./pages/Login/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount/CreateAccount"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Show loader for 2 seconds
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, []);

	const router = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				// Home Page
				{ path: "/", element: <Home /> },
				// Contact Page
				// About Page
				{
					path: "/about",
					element: (
						<Suspense fallback={<PageLoader />}>
							{" "}
							<About />{" "}
						</Suspense>
					),
				},
				{
					path: "/contact",
					element: (
						<Suspense fallback={<PageLoader />}>
							{" "}
							<Contact />{" "}
						</Suspense>
					),
				},
				// Login Page
				{
					path: "/login",
					element: (
						<Suspense fallback={<PageLoader />}>
							<Login />
						</Suspense>
					),
				},
				// Create Account Page
				{
					path: "/create-account",
					element: (
						<Suspense fallback={<PageLoader />}>
							<CreateAccount />
						</Suspense>
					),
				},
				// Fotgot Password Page
				{
					path: "/forgot-password",
					element: (
						<Suspense fallback={<PageLoader />}>
							{" "}
							<ForgotPassword />{" "}
						</Suspense>
					),
				},
				// Dashboard Page
				{
					path: "/dashboard",
					element: (
						<Suspense fallback={<PageLoader />}>
							<Dashboard />
						</Suspense>
					),
				},
				// Complain Page
				{
					path: "/complain",
					element: (
						<Suspense fallback={<PageLoader />}>
							{" "}
							<Complain />{" "}
						</Suspense>
					),
				},

				// {path: "/products", element:  <Suspense fallback={<PageLoader />}> <Products /> </Suspense>, children: [
				//     {path: "new", element: <NewProducts />}
				//   ]
				// },

				// Not Found Page
				{ path: "*", element: <NotFound /> },
			],
		},
	]);

	// Show PageLoader while app is loading
	if (isLoading) {
		return <PageLoader />;
	}

	return (
		<ToastProvider>
			<RouterProvider router={router} />
		</ToastProvider>
	);
}

export default App;
