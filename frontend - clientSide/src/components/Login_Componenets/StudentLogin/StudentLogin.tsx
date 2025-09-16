import { useEffect, useRef } from "react";
import SectionHeading from "../../SectionHeading/SectionHeading";
import "./StudentLogin.scss";
import { useValidationSchema_StudentLogin } from "../../../utils/form-validation/useValidationSchema_StudentLogin";
import BackButton from "../../BackButton/BackButton";
import LoginMethodToggle from "../TeacherLogin/LoginMethodToggle/LoginMethodToggle";
import LoginField from "../TeacherLogin/LoginField/LoginField";
import PasswordField from "../TeacherLogin/PasswordField/PasswordField";
import FormFooter from "../TeacherLogin/FormFooter/FormFooter";
import SubmitButton from "../TeacherLogin/SubmitButton/SubmitButton";
import FormIcon from "../TeacherLogin/FormIcon/FormIcon";

const StudentLogin = () => {
	const formik = useValidationSchema_StudentLogin();
	const prevIsEmailRef = useRef<boolean | null>(null);

	const isEmail = formik.values.loginMethod === "email";
	const loginFieldName = isEmail ? "email" : "id";
	const loginPlaceholder = isEmail ? "Email address" : "Student ID";
	const loginAutoComplete = isEmail ? "email" : "username";

	// Determine animation direction based on previous value
	const swapDirection = (() => {
		const prev = prevIsEmailRef.current;
		if (prev === null) return "left";
		if (isEmail && prev === false) return "left";
		if (!isEmail && prev === true) return "right";
		return "left";
	})();

	useEffect(() => {
		prevIsEmailRef.current = isEmail;
	}, [isEmail]);

	return (
		<div className="Student-Login relative">
			{/* ===================== Back Button ===================== */}
			<div className="back-button-container absolute top-[-55px] lg:top-[-30px] left-0">
				<BackButton to="/login" text="Back" />
			</div>

			{/* ===================== Header ===================== */}
			<header className="flex flex-col items-center gap-4">
				<SectionHeading
					title="Student Login"
					subtitle="Access your student portal to view your courses, assignments and grades"
					classNameTitle="page-title letter-spacing-tight"
					maxWidth="750px"
				/>
			</header>

			{/* ===================== Form ===================== */}
			<form
				className="student-login-form flex flex-col gap-5 w-full max-w-[650px] mx-auto white-bg p-6 lg:p-8 pt-20 lg:pt-20 rounded-lg light-shadow relative mt-10"
				onSubmit={formik.handleSubmit}
			>
				<FormIcon userType="student" />

				<LoginMethodToggle
					isEmail={isEmail}
					onToggle={(method) =>
						formik.setFieldValue("loginMethod", method)
					}
				/>

				<LoginField
					fieldName={loginFieldName as "email" | "id"}
					placeholder={loginPlaceholder}
					autoComplete={loginAutoComplete}
					value={formik.values[loginFieldName as "email" | "id"]}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={isEmail ? formik.errors.email : formik.errors.id}
					touched={isEmail ? formik.touched.email : formik.touched.id}
					swapDirection={swapDirection}
				/>

				<PasswordField
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.password}
					touched={formik.touched.password}
				/>

				<FormFooter role="student" />

				<SubmitButton isSubmitting={formik.isSubmitting} />
			</form>
		</div>
	);
};

export default StudentLogin;
