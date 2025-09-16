import { useFormik } from "formik";
import * as Yup from "yup";

const submitSchema = Yup.object().shape({
	loginMethod: Yup.mixed<"email" | "id">().oneOf(["email", "id"]).required(),
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
		otherwise: (schema) => schema.notRequired().strip(),
	}),
	id: Yup.string().when("loginMethod", {
		is: "id",
		then: (schema) =>
			schema
				.trim()
				.min(3, "ID must be at least 3 characters")
				.max(32, "ID must be at most 32 characters")
				.matches(
					/^[A-Za-z0-9_-]+$/,
					"ID can contain letters, numbers, '_' and '-' only"
				)
				.required("ID is required"),
		otherwise: (schema) => schema.notRequired().strip(),
	}),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.required("Password is required"),
});

export const useValidationSchema_TeacherLogin = () => {
	return useFormik({
		initialValues: {
			loginMethod: "email" as "email" | "id",
			email: "",
			id: "",
			password: "",
		},
		validationSchema: submitSchema,
		validateOnBlur: true,
		validateOnChange: true,
		onSubmit: (values, { resetForm }) => {
			console.log(JSON.stringify(values, null, 2));
			// Example API error handling
			// formik.setFieldError(values.loginMethod === 'email' ? 'email' : 'id', 'Invalid credentials');
			resetForm();
		},
	});
};
