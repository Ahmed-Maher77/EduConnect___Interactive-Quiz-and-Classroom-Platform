import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import { lazy, Suspense } from "react";

// Import Pages
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import PageLoader from "./components/Loader/PageLoader/PageLoader";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Contact from "./pages/Contact/Contact";
const Login = lazy(() => import("./pages/Login/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount/CreateAccount"));

function App() {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			children: [
        // Home Page
        { path: "/", element: <Home /> },
        // Contact Page
        { path: "/contact", element: <Suspense fallback={<PageLoader />}> <Contact /> </Suspense> },
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
        { path: "/forgot-password", element: <Suspense fallback={<PageLoader />}> <ForgotPassword /> </Suspense> },

				// {path: "/products", element:  <Suspense fallback={<PageLoader />}> <Products /> </Suspense>, children: [
				//     {path: "new", element: <NewProducts />}
				//   ]
				// },

        // Not Found Page
				{ path: "*", element: <NotFound /> },
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
