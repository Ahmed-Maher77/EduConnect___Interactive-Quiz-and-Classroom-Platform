import { useEffect, useState } from "react";
import Toast from "../../components/Toast/Toast";
import { useAppDispatch } from "../../utils/redux-toolkit/hooks";
import { resetRegistration } from "../../utils/redux-toolkit/registrationSlice";
import { store } from "../../utils/redux-toolkit/store";
import { useNavigate } from "react-router-dom";

const RegistrationSubmitListener = () => {
	const [show, setShow] = useState(false);
	const [msg, setMsg] = useState("Account created successfully!");
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const handler = () => {
			const data = store.getState().registration;
			console.log("[CreateAccount] Submission payload:", data);
			// TODO: Send data to backend + register user

			setMsg("Account created successfully!");
			setShow(true);
			dispatch(resetRegistration());
            navigate("/dashboard");
		};
		window.addEventListener("registration:submit", handler);
		return () => window.removeEventListener("registration:submit", handler);
	}, [dispatch, navigate]);

	return (
		<Toast
			show={show}
			message={msg}
			type="success"
			onClose={() => setShow(false)}
		/>
	);
};

export default RegistrationSubmitListener;
