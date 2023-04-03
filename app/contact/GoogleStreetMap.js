"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import "./styles/map.scss";

const GoogleStreetMap = () => {
  return (
    <MapContainer
      center={[13.772862614224383, 109.22734518177253]}
      zoom={13}
      style={{ height: "400px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[13.772862614224383, 109.22734518177253]}>
        <Popup>56 ba trieu</Popup>
      </Marker>
    </MapContainer>
  );
};

export default GoogleStreetMap;
