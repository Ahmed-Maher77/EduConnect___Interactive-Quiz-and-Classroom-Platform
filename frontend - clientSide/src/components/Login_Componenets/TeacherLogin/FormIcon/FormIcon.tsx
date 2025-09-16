interface FormIconProps {
	userType?: "teacher" | "student" | "admin";
}

const FormIcon = ({ userType = "teacher" }: FormIconProps) => {
	const getIcon = () => {
		switch (userType) {
			case "teacher":
				return "fa-user-graduate";
			case "student":
				return "fa-user";
			case "admin":
				return "fa-user-shield";
			default:
				return "fa-user-graduate";
		}
	};

	return (
		<span className="absolute top-[-55px] left-1/2 -translate-x-1/2 white-bg w-[120px] h-[120px] border-body-color flex items-center justify-center rounded-full">
			<i className={`fa-solid ${getIcon()} main-color text-5xl`}></i>
		</span>
	);
};

export default FormIcon;
