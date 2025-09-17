import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
	return (
		<div className="not-found-page">
			<div className="not-found-container">
				<div className="error-code">404</div>
				<h1 className="error-title">Page Not Found</h1>
				<p className="error-message">
					Sorry, the page you are looking for doesn't exist or has
					been moved.
				</p>
				<div className="error-actions">
					<Link to="/" className="btn btn-primary">
						Go Home
					</Link>
					<button
						className="btn btn-secondary"
						onClick={() => window.history.back()}
					>
						Go Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
