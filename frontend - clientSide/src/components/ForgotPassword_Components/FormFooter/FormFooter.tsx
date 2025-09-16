import { Link } from "react-router-dom";

interface FormFooterProps {
	role: string;
}

const FormFooter = ({ role }: FormFooterProps) => {
	return (
		<div className="form-footer">
			<p>
				Remembered your password?{" "}
				<Link to="/login" className="link-primary">
					Login
				</Link>
			</p>
			<p>
				Don't have an account?{" "}
				<Link
					to={`/create-account?role=${role}`}
					className="link-primary"
				>
					Register
				</Link>
			</p>
		</div>
	);
};

export default FormFooter;
