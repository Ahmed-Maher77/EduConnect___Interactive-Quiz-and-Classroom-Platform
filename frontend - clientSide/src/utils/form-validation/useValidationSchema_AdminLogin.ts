import { useFormik } from "formik";
import * as Yup from "yup";

const submitSchema = Yup.object().shape({
	email: Yup.string()
		.email("Enter a valid email")
		.matches(
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
			"Enter a valid email with a top-level domain (e.g., .com, .net)"
		)
		.required("Email is required"),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.required("Password is required"),
});

export const useValidationSchema_AdminLogin = () => {
	return useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: submitSchema,
		validateOnBlur: true,
		validateOnChange: true,
		onSubmit: (values, { resetForm }) => {
			console.log("Admin Login:", JSON.stringify(values, null, 2));
			resetForm();
		},
	});
};
