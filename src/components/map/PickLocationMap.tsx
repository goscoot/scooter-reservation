import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";
import MapController from "./MapController";

type TCord = {
  value: string;
  location: string;
  id: number;
  coordinates: LatLngTuple;
};

export const pickCords: TCord[] = [
  {
    value: "obwodnica-13",
    id: 1,
    location: "Kraków, 1 obwodnica 13",
    coordinates: [50.061555, 19.944512],
  },
  {
    value: "karmelicka-25",
    id: 2,
    location: "Kraków, Karmelicka 25",
    coordinates: [50.066075, 19.930255],
  },
  {
    value: "jerzego-7",
    id: 3,
    location: "Kraków, Jerzego Żuławskiego 7",
    coordinates: [50.072545, 19.933861],
  },
];

type PickLocationMapProps = {
  selectedMarker: LatLngTuple;
};

const PickLocationMap = ({ selectedMarker }: PickLocationMapProps) => {
  const [position, setPosition] = useState<LatLngTuple>(selectedMarker);

  useEffect(() => {
    setPosition(selectedMarker);
  }, [selectedMarker]);

  return (
    <MapContainer center={position} zoom={7} className="map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapController selectedPosition={position} />
      {pickCords.map((point) => (
        <Marker position={point.coordinates} key={point.id}>
          <Popup>
            {point.location} <br /> Punkt odbioru.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default PickLocationMap;
