import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RoleSelector from "../../components/Login_Componenets/RoleSelector/RoleSelector";
import PageSwap from "../../common/Animations/PageSwap";
import LoginContent from "./LoginContent/LoginContent";

const Login = () => {
	const [selectedRole, setSelectedRole] = useState<string | null>(null);
	const [searchParams, setSearchParams] = useSearchParams();
	const [prevRole, setPrevRole] = useState<string | null>(null);

	// Normalize role from URL
	const roleFromUrl = useMemo(() => {
		const r = searchParams.get("role");
		return r ? r.toLowerCase() : null;
	}, [searchParams]);

	// When user selects a role, update both state and URL
	useEffect(() => {
		if (roleFromUrl) {
			setPrevRole(selectedRole);
			setSelectedRole(roleFromUrl);
		} else {
			setPrevRole(selectedRole);
			setSelectedRole(null);
		}
	}, [roleFromUrl, selectedRole]);

	const order = ["teacher", "student", "admin"] as const;
	const dir = (() => {
		if (!selectedRole || !prevRole) return "left" as const;
		const a = order.indexOf(prevRole as (typeof order)[number]);
		const b = order.indexOf(selectedRole as (typeof order)[number]);
		if (a === -1 || b === -1) return "left" as const;
		return b > a ? "left" : "right"; // slide direction
	})();

	// When user selects a role, update both state and URL
	const handleSelectRole = (role: string) => {
		const normalized = role.toLowerCase();
		setSelectedRole(normalized);
		setSearchParams({ role: normalized });
	};

	return (
		<div className="Login-Page main-page  my-[60px]">
			<div className="container">
				<PageSwap id={selectedRole ?? "none"} direction={dir}>
					{!selectedRole ? (
						<RoleSelector handleSelectRole={handleSelectRole} />
					) : (
						<LoginContent selectedRole={selectedRole} />
					)}
				</PageSwap>
			</div>
		</div>
	);
};

export default Login;
