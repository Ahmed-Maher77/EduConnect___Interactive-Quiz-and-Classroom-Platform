import "./AppGoogleMap.scss";

const AppGoogleMap = () => {
	// Direct Google Maps embed URL for Cairo, Egypt (no API key required)
	const mapEmbedUrl =
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.5!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzM5LjgiTiAzMcKwMTQnMDguNSJF!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg";

	return (
		<div className="map-container rounded-lg p-4 light-shadow bg-white w-full h-[500px]">
			<iframe
				src={mapEmbedUrl}
				width="100%"
				height="100%"
				style={{ border: 0, borderRadius: "8px" }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				title="EduConnect Location Map - Cairo, Egypt"
			></iframe>
		</div>
	);
};

export default AppGoogleMap;
