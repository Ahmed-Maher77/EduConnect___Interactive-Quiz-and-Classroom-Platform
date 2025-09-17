import { Navigate, useSearchParams } from "react-router-dom";

const CreateAccount = () => {
	// get the role from the url
	const [searchParams] = useSearchParams();
	const role = searchParams.get("role");

	// If there is no role, redirect to the login page
	if (!role) {
		return <Navigate to="/login" />;
	}

	return (
		<div className="Create-Account-Page main-page  my-[60px]">
			<div className="container">
				<div className="toggler-container">
					{/* Handle this based on the role */}
					<button className="btn-main-blue">Student</button>
					<button className="btn-main-blue">Teacher</button>
				</div>

				<div className="create-account-content">
					<h1>Create Account as {role}</h1>
				</div>
			</div>
		</div>
	);
};

export default CreateAccount;
