import { useFormik } from "formik";
import * as Yup from "yup";

const submitSchema = Yup.object().shape({
	loginMethod: Yup.string()
		.oneOf(["email", "id"])
		.required("Login method is required"),
	email: Yup.string().when("loginMethod", {
		is: "email",
		then: (schema) =>
			schema
				.email("Enter a valid email")
				.matches(
					/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
					"Enter a valid email with a top-level domain (e.g., .com, .net)"
				)
				.required("Email is required"),
		otherwise: (schema) => schema.notRequired(),
	}),
	id: Yup.string().when("loginMethod", {
		is: "id",
		then: (schema) =>
			schema
				.matches(/^[0-9]+$/, "ID must be a number")
				.min(5, "ID must be at least 5 digits")
				.required("ID is required"),
		otherwise: (schema) => schema.notRequired(),
	}),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.required("Password is required"),
});

export const useValidationSchema_StudentLogin = () => {
	return useFormik({
		initialValues: {
			loginMethod: "email", // Default login method
			email: "",
			id: "",
			password: "",
		},
		validationSchema: submitSchema,
		validateOnBlur: true,
		validateOnChange: true,
		onSubmit: (values, { resetForm }) => {
			console.log("Student Login:", JSON.stringify(values, null, 2));
			resetForm();
		},
	});
};
