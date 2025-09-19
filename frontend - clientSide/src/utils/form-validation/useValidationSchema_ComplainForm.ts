import { useFormik } from "formik";
import * as Yup from "yup";
import type { ComplainFormValues } from "../../common/Types/Interfaces";

const complainSchema = Yup.object({
	complainTitle: Yup.string()
		.min(5, "Complain title must be at least 5 characters")
		.max(100, "Complain title must be less than 100 characters")
		.required("Complain title is required"),
	complainSubject: Yup.string()
		.min(10, "Complain subject must be at least 10 characters")
		.max(1000, "Complain subject must be less than 1000 characters")
		.required("Complain subject is required"),
	name: Yup.string()
		.min(2, "Name must be at least 2 characters")
		.max(50, "Name must be less than 50 characters")
		.required("Name is required"),
	email: Yup.string()
		.email("Enter a valid email")
		.matches(
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
			"Enter a valid email with a top-level domain (e.g., .com, .net)"
		)
		.required("Email is required"),
	role: Yup.string()
		.oneOf(["student", "teacher"], "Please select a valid user type")
		.required("User type is required"),
	userId: Yup.string()
		.min(3, "User ID must be at least 3 characters")
		.max(20, "User ID must be less than 20 characters")
		.required("User ID is required"),
});

export const useValidationSchema_ComplainForm = (initialValues?: Partial<ComplainFormValues>) => {
	return useFormik({
		initialValues: {
			complainTitle: "",
			complainSubject: "",
			name: "",
			email: "",
			role: "",
			userId: "",
			...initialValues,
		},
		validationSchema: complainSchema,
		validateOnBlur: true,
		validateOnChange: true,
		onSubmit: (values, { resetForm }) => {
            console.log(
                "Complain Form submitted:",
                JSON.stringify(values, null, 2)
            );
            // Here you would typically send the data to your backend
            // Example: await submitComplain(values);
            resetForm();
        },
	});
};
