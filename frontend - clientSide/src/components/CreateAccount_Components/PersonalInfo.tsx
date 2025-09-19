import { useState } from "react";
import {
	useAppDispatch,
	useAppSelector,
} from "../../utils/redux-toolkit/hooks";
import { setPersonal } from "../../utils/redux-toolkit/registrationSlice";
import ProfileImageUploader from "./ProfileImageUploader/ProfileImageUploader";
import FormField from "./FormField/FormField";
import FormSection from "./FormSection/FormSection";
import PasswordField from "./PasswordField/PasswordField";

const PersonalInfo = () => {
	const dispatch = useAppDispatch();
	const registration = useAppSelector((s) => s.registration);
	const [, setProfileImageUrl] = useState<string | null>(null);

	// Remove inline uploader state/logic; handled in child component

	return (
		<div className="Personal-Info flex flex-col gap-8">
			{/* Profile Picture Section */}
			<FormSection columns={1}>
				<h3 className="main-label" style={{ marginBottom: "-10px" }}>
					Profile Picture{" "}
					<span className="text-sm text-[var(--dark3-gray-color)]">
						(Optional)
					</span>
				</h3>
				<ProfileImageUploader onImageChange={setProfileImageUrl} />
			</FormSection>

			{/* Name Section */}
			<FormSection title="Personal Information" columns={2}>
				<FormField
					id="firstName"
					name="firstName"
					label="First Name"
					type="text"
					placeholder="Enter your first name"
					required={true}
					value={registration.personal.firstName}
					onChange={(e) =>
						dispatch(setPersonal({ firstName: e.target.value }))
					}
				/>
				<FormField
					id="lastName"
					name="lastName"
					label="Last Name"
					type="text"
					placeholder="Enter your last name"
					required={true}
					value={registration.personal.lastName}
					onChange={(e) =>
						dispatch(setPersonal({ lastName: e.target.value }))
					}
				/>
			</FormSection>

			{/* Contact Information Section */}
			<FormSection title="Contact Information" columns={1}>
				<FormField
					id="email"
					name="email"
					label="Email Address"
					type="email"
					placeholder="Enter your email address"
					required={true}
					value={registration.personal.email}
					onChange={(e) =>
						dispatch(setPersonal({ email: e.target.value }))
					}
				/>
				<FormField
					id="phone"
					name="phone"
					label="Phone Number"
					type="tel"
					placeholder="Enter your phone number"
					required={true}
					value={registration.personal.phone}
					onChange={(e) =>
						dispatch(setPersonal({ phone: e.target.value }))
					}
				/>
				<div className="privacy-note">
					<i className="fa-solid fa-shield-halved"></i>
					<span>
						Your phone number is only visible to platform admins to
						facilitate contact with you while protecting your
						privacy.
					</span>
				</div>
			</FormSection>

			{/* Password Section */}
			<FormSection title="Security" columns={2}>
				<PasswordField
					id="password"
					name="password"
					label="Password"
					placeholder="Create a password"
					required={true}
					value={registration.personal.password}
					onChange={(e) =>
						dispatch(setPersonal({ password: e.target.value }))
					}
				/>
				<PasswordField
					id="confirmPassword"
					name="confirmPassword"
					label="Confirm Password"
					placeholder="Confirm your password"
					required={true}
					value={registration.personal.confirmPassword}
					onChange={(e) =>
						dispatch(
							setPersonal({ confirmPassword: e.target.value })
						)
					}
				/>
			</FormSection>
		</div>
	);
};

export default PersonalInfo;
