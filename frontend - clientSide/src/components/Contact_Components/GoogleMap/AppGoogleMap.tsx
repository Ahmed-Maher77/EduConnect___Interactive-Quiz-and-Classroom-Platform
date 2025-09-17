import {
	GoogleMap as GoogleMapComponent,
	Marker,
	useJsApiLoader,
} from "@react-google-maps/api";
import "./AppGoogleMap.scss";
const googleMapApiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const center = {
	lat: 30.0444, // Location: Cairo
	lng: 31.2357,
};

const containerStyle = { width: "100%", height: "100%" };

const AppGoogleMap = () => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: googleMapApiKey || "",
	});

	return (
		<div className="map-container rounded-lg p-4 light-shadow bg-white w-full h-[500px]">
			{isLoaded && (
				<GoogleMapComponent mapContainerStyle={containerStyle} center={center} zoom={12}>
					<Marker position={center} />
				</GoogleMapComponent>
			)}
		</div>
	);
};

export default AppGoogleMap;
