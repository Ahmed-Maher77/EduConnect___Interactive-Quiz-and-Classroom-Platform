import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const googleMapApiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const center = {
    lat: 30.0444, // Example: Cairo
    lng: 31.2357
  };

const GoogleMap = () => {
  return (
    <div className='map-container w-full h-[400px]'>
      <LoadScript googleMapsApiKey={googleMapApiKey}>
      <GoogleMap mapContainerStyle={{width: '100%', height: '100%'}} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

export default GoogleMap
