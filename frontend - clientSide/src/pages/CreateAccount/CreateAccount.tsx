import { Navigate, useSearchParams, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import {
	AnimatedTogglerContainer,
	AnimatedTogglerButton,
	AnimatedContentWrapper,
	AnimatedRoleContent,
} from "../../common/Animations/RoleTogglerAnimation";
import StudentRegistration from "../../components/CreateAccount_Components/StudentRegistration";
import TeacherRegistration from "../../components/CreateAccount_Components/TeacherRegistration";
import RegistrationSubmitListener from "./RegistrationSubmitListener";

const CreateAccount = () => {
	// get the role from the url
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const role = searchParams.get("role");

	// If there is no role, redirect to the login page
	if (!role) {
		return <Navigate to="/login" />;
	}

	// Handle role switching
	const handleRoleSwitch = (newRole: string) => {
		const newSearchParams = new URLSearchParams(searchParams);
		newSearchParams.set("role", newRole);
		navigate(`/create-account?${newSearchParams.toString()}`);
	};

	return (
		<div className="Create-Account-Page main-page mt-[30px] my-[60px]">
			<RegistrationSubmitListener />
			<div className="container">
				{/* Animated Toggler */}
				<AnimatedTogglerContainer>
					<AnimatedTogglerButton
						role="student"
						currentRole={role}
						onClick={() => handleRoleSwitch("student")}
					>
						Student
					</AnimatedTogglerButton>
					<AnimatedTogglerButton
						role="teacher"
						currentRole={role}
						onClick={() => handleRoleSwitch("teacher")}
					>
						Teacher
					</AnimatedTogglerButton>
				</AnimatedTogglerContainer>

				{/* Animated Content */}
				<AnimatePresence mode="wait">
					<AnimatedContentWrapper role={role}>
						{/* Section Heading */}
						<SectionHeading
							title={`Join our community of ${
								role === "student" ? "Students" : "Educators"
							}`}
						/>

						{/* Role-specific content will go here */}
						<AnimatedRoleContent>
							{/* Content based on role */}
							{role === "student" && <StudentRegistration />}
							{role === "teacher" && <TeacherRegistration />}
						</AnimatedRoleContent>
					</AnimatedContentWrapper>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default CreateAccount;
