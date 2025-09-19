import type { FormikProps } from "formik";
import type { ComplainFormValues } from "../../../../common/Types/Interfaces";

interface ComplainFormFieldProps {
	formik: FormikProps<ComplainFormValues>;
	fieldName: keyof ComplainFormValues;
	label: string;
	type?: "text" | "email" | "textarea";
	placeholder: string;
	required?: boolean;
	rows?: number;
	readOnly?: boolean;
}

const ComplainFormField = ({
	formik,
	fieldName,
	label,
	type = "text",
	placeholder,
	required = false,
	rows = 5,
	readOnly = false,
}: ComplainFormFieldProps) => {
	const isError = formik.touched[fieldName] && formik.errors[fieldName];
	const errorMessage = formik.errors[fieldName];

	return (
		<fieldset>
			{/* Label */}
			<label
				className="block mb-[0.35rem] dark-gray-color text-base font-semibold"
				htmlFor={fieldName}
			>
				{label} {required && <span className="text-red-500">*</span>}
			</label>

			{/* Textarea */}
			{type === "textarea" ? (
				<textarea
					className={`resize-x-none border-gray-main input-bg-color rounded-md p-3 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 trans-3 ${
						isError ? "border-red-500" : ""
					} ${readOnly ? "bg-gray-100 cursor-not-allowed" : ""}`}
					id={fieldName}
					name={fieldName}
					placeholder={placeholder}
					rows={rows}
					value={formik.values[fieldName]}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					readOnly={readOnly}
				/>
			) : (
				// Input Field
				<input
					className={`border-gray-main input-bg-color outline-none rounded-md p-3 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 trans-3 ${
						isError ? "border-red-500" : ""
					} ${readOnly ? "bg-gray-100 cursor-not-allowed" : ""}`}
					type={type}
					id={fieldName}
					name={fieldName}
					placeholder={placeholder}
					value={formik.values[fieldName]}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					readOnly={readOnly}
				/>
			)}

			{/* Error Message */}
			{isError && errorMessage && (
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
					{errorMessage}
				</div>
			)}
		</fieldset>
	);
};

export default ComplainFormField;
