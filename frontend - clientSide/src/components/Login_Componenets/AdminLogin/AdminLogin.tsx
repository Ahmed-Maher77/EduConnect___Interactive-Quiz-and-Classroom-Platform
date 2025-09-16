import SectionHeading from "../../SectionHeading/SectionHeading";
import "./AdminLogin.scss";
import { useValidationSchema_AdminLogin } from "../../../utils/form-validation/useValidationSchema_AdminLogin";
import BackButton from "../../BackButton/BackButton";
import PasswordField from "../TeacherLogin/PasswordField/PasswordField";
// import FormFooter from "../TeacherLogin/FormFooter/FormFooter";
import SubmitButton from "../TeacherLogin/SubmitButton/SubmitButton";
import FormIcon from "../TeacherLogin/FormIcon/FormIcon";

const AdminLogin = () => {
	const formik = useValidationSchema_AdminLogin();

	return (
		<div className="Admin-Login relative">
			{/* ===================== Back Button ===================== */}
			<div className="back-button-container absolute top-[-55px] lg:top-[-30px] left-0">
				<BackButton to="/login" text="Back" />
			</div>

			{/* ===================== Header ===================== */}
			<header className="flex flex-col items-center gap-4">
				<SectionHeading
					title="Admin Portal"
					subtitle="Sign In to manage the entire system and oversee all operations"
					classNameTitle="page-title letter-spacing-tight"
					maxWidth="750px"
				/>
			</header>

			{/* ===================== Form ===================== */}
			<form
				className="admin-login-form flex flex-col gap-5 w-full max-w-[650px] mx-auto white-bg p-6 lg:p-8 pt-20 lg:pt-20 rounded-lg light-shadow relative mt-10"
				onSubmit={formik.handleSubmit}
			>
				<FormIcon userType="admin" />

				{/* ===================== Email Field ===================== */}
				<div className="form-group relative">
					<input
						type="email"
						name="email"
						placeholder="Email address"
						autoComplete="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className={`form-input email-field w-full p-4 border-gray-main rounded-lg transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 trans-3 ${
							formik.values.email ? "active" : ""
						}`}
					/>
					<i className="fa-solid fa-envelope absolute top-[19.5px] text-xl left-4 dark2-gray-color"></i>
					{formik.touched.email && formik.errors.email && (
						<div
							style={{
								color: "red",
								fontSize: "0.9rem",
								marginTop: "6px",
								display: "flex",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<i className="fa-solid fa-circle-exclamation"></i>
							{formik.errors.email}
						</div>
					)}
				</div>

				<PasswordField
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.password}
					touched={formik.touched.password}
				/>

				{/* <FormFooter /> */}

				<SubmitButton isSubmitting={formik.isSubmitting} />
			</form>
		</div>
	);
};

export default AdminLogin;
