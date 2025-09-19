import { useAppSelector } from "../../utils/redux-toolkit/hooks";
import CustomSelect from "../CustomSelect/CustomSelect";
import ComplainFormField from "./SubComponents/ComplainFormField/ComplainFormField";
import { useValidationSchema_ComplainForm } from "../../utils/form-validation/useValidationSchema_ComplainForm";

const ComplainForm = () => {
	const { name, email, role, id } = useAppSelector(
		(state) => state.userInfo.userInfo
	);

	const roleOptions = [
		{ value: "student", label: "Student" },
		{ value: "teacher", label: "Teacher" },
	];

	const handleResetForm = () => {
		formik.setValues({
			complainTitle: "",
			complainSubject: "",
			name: name || "",
			email: email || "",
			role: role || "",
			userId: id || "",
		});
		formik.setTouched({});
		formik.setErrors({});
	};

	const formik = useValidationSchema_ComplainForm({
		name: name || "",
		email: email || "",
		role: role || "",
		userId: id || "",
	});

	const handleRoleChange = (newRole: string) => {
		formik.setFieldValue("role", newRole);
	};

	return (
		<form
			className="complain-form flex flex-col gap-7 w-full max-w-[750px] mx-auto bg-white p-6 lg:p-8 rounded-lg form-shadow relative"
			onSubmit={formik.handleSubmit}
		>
			{/* Complain Title */}
			<ComplainFormField
				formik={formik}
				fieldName="complainTitle"
				label="Complain Title"
				type="text"
				placeholder="Enter complain title"
				required={true}
			/>

			{/* Complain Subject */}
			<ComplainFormField
				formik={formik}
				fieldName="complainSubject"
				label="Complain Subject"
				type="textarea"
				placeholder="Describe your complain in detail"
				required={true}
				rows={5}
			/>

			{/* User Information Grid */}
			<div className="user-info grid grid-cols-1 md:grid-cols-2 gap-5">
				{/* Name */}
				<ComplainFormField
					formik={formik}
					fieldName="name"
					label="Name"
					type="text"
					placeholder="Your full name"
					required={true}
				/>

				{/* Email */}
				<ComplainFormField
					formik={formik}
					fieldName="email"
					label="Email"
					type="email"
					placeholder="Your email address"
					required={true}
					readOnly={true}
				/>

				{/* User Type */}
				<fieldset>
					<label
						className="block mb-[0.35rem] dark-gray-color text-base font-semibold"
						htmlFor="role"
					>
						User Type <span className="text-red-500">*</span>
					</label>
					<CustomSelect
						name="role"
						options={roleOptions}
						value={formik.values.role}
						onChange={handleRoleChange}
						placeholder="Select user type"
						className="w-full"
					/>
					{formik.touched.role && formik.errors.role && (
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
							{formik.errors.role}
						</div>
					)}
				</fieldset>

				{/* User ID */}
				<ComplainFormField
					formik={formik}
					fieldName="userId"
					label="User ID"
					type="text"
					placeholder="Your user ID"
					required={true}
					readOnly={true}
				/>
			</div>

			{/* Submit Button */}
			<div className="form-actions flex justify-end gap-4 pt-4">
				<button
					type="button"
					className="btn-main-gray px-6 py-3"
					onClick={handleResetForm}
				>
					Reset Form
				</button>
				<button
					type="submit"
					className="btn-main-blue px-6 py-3"
					disabled={formik.isSubmitting}
				>
					{formik.isSubmitting ? "Submitting..." : "Submit Complain"}
				</button>
			</div>
		</form>
	);
};

export default ComplainForm;
