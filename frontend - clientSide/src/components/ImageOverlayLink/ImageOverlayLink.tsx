import "./ImageOverlayLink.scss";

const ImageOverlayLink = ({
	href,
	className,
}: {
	href: string;
	className?: string;
}) => {
	return (
		<div className="image-overlay-link group overlay absolute top-0 left-0 w-0 group-hover:w-full h-full bg-black/50 transition-all duration-300 overflow-hidden flex items-center justify-center tran-3">
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={className}
			>
				<i className="fa-solid fa-arrow-up-right-from-square text-2xl main-color trans-3"></i>
			</a>
		</div>
	);
};

export default ImageOverlayLink;
