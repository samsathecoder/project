import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const IstanbulMap = () => {
  useEffect(() => {
    // Haritanın bir kez başlatıldığını kontrol et
    if (!document.getElementById('map')._leaflet_id) {
      const map = L.map('map').setView([41.0082, 28.9784], 12); // İstanbul koordinatları

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([41.0082, 28.9784]).addTo(map).bindPopup('İstanbul').openPopup();
    }
  }, []); // Bağımlılık dizisi boş, sadece ilk renderda çalışacak

  return                 <div id="map" className="w-full h-full flex items-center justify-center text-gray-500">
</div>;
};

export default IstanbulMap;
