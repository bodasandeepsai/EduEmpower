import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      // Clean up previous map instance if it exists
      mapRef.current.remove();
    }

    // Initialize the map
    mapRef.current = L.map(mapContainerRef.current).setView([51.505, -0.09], 13);

    // Set up the OSM layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapRef.current);

    // Add a marker
    L.marker([51.505, -0.09]).addTo(mapRef.current)
      .bindPopup('NGO Location')
      .openPopup();

    // Cleanup function to remove the map on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div ref={mapContainerRef} style={{ height: '400px', width: '100%' }}></div>
  );
};

export default Map;
