import { Navigate, useSearchParams } from "react-router-dom";

const CreateAccount = () => {
	// get the role from the url
	const [searchParams, setSearchParams] = useSearchParams();
	const role = searchParams.get("role");

	// If there is no role, redirect to the login page
	if (!role) {
		return <Navigate to="/login" />;
	}

	return (
		<div className="Create-Account-Page main-page mt-[70px] my-[60px]">
			<div className="container">
				<div className="create-account-content">
					<h1>Create Account as {role}</h1>
				</div>
			</div>
		</div>
	);
};

export default CreateAccount;
