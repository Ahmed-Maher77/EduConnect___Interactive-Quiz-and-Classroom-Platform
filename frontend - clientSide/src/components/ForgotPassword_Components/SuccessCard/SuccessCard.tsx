import { Link } from "react-router-dom";

const SuccessCard = () => {
	return (
		<div className="success-card">
			<div className="success-icon">
				<i className="fa-solid fa-check"></i>
			</div>
			<h2>Check Your Email</h2>
			<p>We've sent password reset instructions to your email address.</p>
			<div className="success-actions">
				<Link to="/login" className="btn-main-blue p-3 px-5">
					Back to Login
				</Link>
			</div>
		</div>
	);
};

export default SuccessCard;
