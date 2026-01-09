"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { SITE_CONFIG } from "@/lib/constants";

export default function MapComponent() {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return;

        const { lat, lng } = SITE_CONFIG.location.coordinates;

        // Initialize map
        const map = L.map(mapRef.current, {
            center: [lat, lng],
            zoom: 13,
            scrollWheelZoom: false,
        });

        mapInstanceRef.current = map;

        // Add tile layer with warm styling
        L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
            {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                maxZoom: 19,
            }
        ).addTo(map);

        // Custom marker icon
        const customIcon = L.divIcon({
            className: "custom-marker",
            html: `
        <div style="
          width: 24px;
          height: 24px;
          background: oklch(0.65 0.12 185);
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        "></div>
      `,
            iconSize: [24, 24],
            iconAnchor: [12, 12],
        });

        // Add marker for Anpu
        L.marker([lat, lng], { icon: customIcon })
            .addTo(map)
            .bindPopup(
                `<strong>${SITE_CONFIG.name}</strong><br>${SITE_CONFIG.location.name}`
            );

        // Add markers for nearby places
        SITE_CONFIG.nearbyPlaces.forEach((place) => {
            // Approximate positions (you can replace with real coordinates)
            const offsets: Record<string, [number, number]> = {
                Auroville: [0.02, 0.01],
                Kalarigram: [0.005, -0.005],
                "Adishakti Theatre": [0.008, 0.008],
                Pondicherry: [-0.06, 0.04],
                Matrimandir: [0.025, 0.015],
            };
            const offset = offsets[place.name] || [0, 0];

            const smallIcon = L.divIcon({
                className: "small-marker",
                html: `
          <div style="
            width: 12px;
            height: 12px;
            background: oklch(0.45 0.02 50);
            border: 2px solid white;
            border-radius: 50%;
            box-shadow: 0 1px 4px rgba(0,0,0,0.2);
          "></div>
        `,
                iconSize: [12, 12],
                iconAnchor: [6, 6],
            });

            L.marker([lat + offset[0], lng + offset[1]], { icon: smallIcon })
                .addTo(map)
                .bindPopup(`<strong>${place.name}</strong><br>${place.distance}`);
        });

        return () => {
            map.remove();
            mapInstanceRef.current = null;
        };
    }, []);

    return <div ref={mapRef} className="w-full h-full" />;
}
