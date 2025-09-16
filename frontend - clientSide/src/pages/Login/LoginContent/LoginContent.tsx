import { Link } from "react-router-dom";
import TeacherLogin from "../../../components/Login_Componenets/TeacherLogin/TeacherLogin";
import StudentLogin from "../../../components/Login_Componenets/StudentLogin/StudentLogin";
import AdminLogin from "../../../components/Login_Componenets/AdminLogin/AdminLogin";

interface LoginContentProps {
	selectedRole: string;
}

const LoginContent = ({ selectedRole }: LoginContentProps) => {
	const getRegisterLink = () => {
		switch (selectedRole) {
			case "teacher":
				return (
					<Link
						to="/create-account?role=teacher"
						className="main-color font-semibold animated-hover-mark"
					>
						Register here
					</Link>
				);
			case "student":
				return (
					<Link
						to="/create-account?role=student"
						className="main-color font-semibold animated-hover-mark"
					>
						Register here
					</Link>
				);
			case "admin":
				return (
					<a
						href="http://ahmedmaher-portfolio.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						title="Ahmed Maher's Portfolio"
						className="main-color font-semibold animated-hover-mark"
					>
						Contact your main administrator
					</a>
				);
			default:
				return null;
		}
	};

	const getLoginComponent = () => {
		switch (selectedRole) {
			case "teacher":
				return <TeacherLogin />;
			case "student":
				return <StudentLogin />;
			case "admin":
				return <AdminLogin />;
			default:
				return null;
		}
	};

	return (
		<div className="role-login-content">
			{getLoginComponent()}

			{/* Don't have an account? */}
			<p className="text-center dark2-gray-color flex items-center justify-center gap-2 mt-6">
				Don't have an account?
				{getRegisterLink()}
			</p>
		</div>
	);
};

export default LoginContent;
