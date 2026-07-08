// src/hooks/useGoogleMaps.js
import { useEffect, useState } from "react";

export const useGoogleMaps = () => {
  const [loaded, setLoaded] = useState(
    () => typeof window !== "undefined" && !!(window.google && window.google.maps)
  );

  useEffect(() => {
    if (loaded) return;

    const existingScript = document.querySelector(
      'script[src^="https://maps.googleapis.com/maps/api/js"]'
    );
    if (existingScript) {
      existingScript.addEventListener("load", () => setLoaded(true));
      return;
    }

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      console.error("VITE_GOOGLE_MAPS_API_KEY is missing");
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly&loading=async&libraries=maps,streetView`;
    script.async = true;
    script.defer = true;
    script.onload = () => setLoaded(true);
    script.onerror = () =>
      console.error("Failed to load Google Maps JavaScript API");
    document.head.appendChild(script);
  }, [loaded]);

  return loaded;
};
