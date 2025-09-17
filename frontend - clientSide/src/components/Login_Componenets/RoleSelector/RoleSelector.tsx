import SectionHeading from "../../SectionHeading/SectionHeading";
import RoleChoiceCard from "../RoleChoiceCard/RoleChoiceCard";
import "./RoleSelector.scss";
// Images
import teacherImage from "../../../assets/images/teacher.png";
import studentImage from "../../../assets/images/student.png";
import adminImage from "../../../assets/images/admin.png";

const roles = [
	{
		role: "Teacher",
		roleImage: teacherImage,
		roleDescription: "Teach & Manage Classes",
		roleIcon: "fa-solid fa-user-graduate",
		gradient: "from-blue-500 to-purple-600",
		features: [
			"Create Courses",
			"Manage Students",
			"Track Progress",
			"Assign Quizzes",
		],
	},
	{
		role: "Student",
		roleImage: studentImage,
		roleDescription: "Learn & Track Progress",
		roleIcon: "fa-solid fa-user",
		gradient: "from-green-500 to-teal-600",
		features: [
			"Access Courses",
			"Take Quizzes",
			"Track Progress",
			"Get Certificates",
		],
	},
	{
		role: "Admin",
		roleImage: adminImage,
		roleDescription: "Manage Platform",
		roleIcon: "fa-solid fa-user-shield",
		gradient: "from-orange-500 to-red-600",
		features: [
			"Manage Users",
			"System Settings",
			"Analytics",
			"Content Moderation",
		],
	},
];

const RoleSelector = ({
	handleSelectRole,
}: {
	handleSelectRole: (role: string) => void;
}) => {
	return (
		<div className="Role-Selector">
			<div className="role-selector-content">
				<SectionHeading
					title="Choose Your Role"
					subtitle="Select your role to get started with EduConnect"
					classNameTitle="page-title"
				/>

				<main className="role-choices">
					{roles.map((role) => (
						<RoleChoiceCard
							key={role.role}
							role={role.role}
							roleImage={role.roleImage}
							roleDescription={role.roleDescription}
							roleIcon={role.roleIcon}
							gradient={role.gradient}
							features={role.features}
							onSelectRole={handleSelectRole}
						/>
					))}
				</main>
			</div>
		</div>
	);
};

export default RoleSelector;
