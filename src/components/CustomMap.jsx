import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';

function CustomMap() {
  // Coordinates for New York City
  const position = [51.505, -0.09]

  // Check if the map container is available (optional)
  if (!MapContainer) return null;
  
  return (
    <div className='text-center m-4 mb-16'>
          <Link className='btn2' to = '/'>Return Home</Link>
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>

    </div>
  );
}

export default CustomMap;
