import { Link } from "react-router-dom";

const FormFooter = ({ role }: { role: "student" | "teacher" | "admin" }) => {
	return (
		<footer className="flex items-center justify-between">
			<fieldset className="flex items-center gap-2">
				<input type="checkbox" id="remember" />
				<label
					htmlFor="remember"
					className="font-medium dark2-gray-color cursor-pointer remember-me"
				>
					Remember me
				</label>
			</fieldset>
			<Link
				to={`/forgot-password?role=${role}`}
				className="font-semibold main-color w-fit animated-hover-mark"
			>
				Forgot your password?
			</Link>
		</footer>
	);
};

export default FormFooter;
