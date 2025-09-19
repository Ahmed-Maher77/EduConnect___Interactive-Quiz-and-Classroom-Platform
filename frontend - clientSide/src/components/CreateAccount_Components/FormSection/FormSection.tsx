import React from "react";
import "./FormSection.scss";

interface FormSectionProps {
	title?: string;
	description?: string;
	children: React.ReactNode;
	className?: string;
	columns?: 1 | 2;
}

const FormSection: React.FC<FormSectionProps> = ({
	title,
	description,
	children,
	className = "",
	columns = 1,
}) => {
	return (
		<div className={`form-section ${className}`}>
			{(title || description) && (
				<div className="form-section-header">
					{title && <h3 className="form-section-title">{title}</h3>}
					{description && (
						<p className="form-section-description">
							{description}
						</p>
					)}
				</div>
			)}
			<div
				className={`form-section-content ${
					columns === 2 ? "grid-cols-2" : "grid-cols-1"
				}`}
			>
				{children}
			</div>
		</div>
	);
};

export default FormSection;
