import { useRide } from '@/hooks/useRide';
import '@/styles/routeMapImg.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
export default function RouteMapImg() {
  const { estimateRide } = useRide();

  const decodePolyline = str => {
    let index = 0;
    let lat = 0;
    let lng = 0;
    const coordinates: number[][] = [];
    let shift: number;
    let result: number;
    let byte: any;

    while (index < str.length) {
      shift = 0;
      result = 0;
      do {
        byte = str.charCodeAt(index++) - 63;
        result |= (byte & 0x1f) << shift;
        shift += 5;
      } while (byte >= 0x20);
      const deltaLat = result & 1 ? ~(result >> 1) : result >> 1;
      lat += deltaLat;

      shift = 0;
      result = 0;
      do {
        byte = str.charCodeAt(index++) - 63;
        result |= (byte & 0x1f) << shift;
        shift += 5;
      } while (byte >= 0x20);
      const deltaLng = result & 1 ? ~(result >> 1) : result >> 1;
      lng += deltaLng;

      coordinates.push([lat / 1e5, lng / 1e5]);
    }

    return coordinates;
  };

  const polylineCoords = estimateRide?.polyline && decodePolyline(estimateRide!.polyline);

  // Defina a posição inicial como o primeiro ponto do polyline
  const startPosition = polylineCoords && polylineCoords[0];

  return (
    <div className="route-map-img">
      {!estimateRide?.polyline ? (
        <p>Carregando...</p>
      ) : (
        <MapContainer center={startPosition} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Polyline positions={polylineCoords} color="red" />
        </MapContainer>
      )}
    </div>
  );
}
