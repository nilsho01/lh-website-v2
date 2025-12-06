// src/components/common/StreetViewPanoramaView.jsx
import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useGoogleMaps } from "../../../hooks/useGoogleMaps";

const StreetViewPanoramaView = ({ position, pov }) => {
  const containerRef = useRef(null);
  const mapsLoaded = useGoogleMaps();

  useEffect(() => {
    if (!mapsLoaded || !containerRef.current) return;
    if (!window.google || !window.google.maps) return;

    let pano = null;
    let cancelled = false;

    const init = async () => {
      try {
        // 1) Neuer Weg: importLibrary ist vorhanden
        if (typeof window.google.maps.importLibrary === "function") {
          const { StreetViewPanorama } =
            await window.google.maps.importLibrary("streetView");

          if (cancelled || !containerRef.current) return;

          pano = new StreetViewPanorama(containerRef.current, {
            position,
            pov: {
              heading: pov?.heading ?? 0,
              pitch: pov?.pitch ?? 0,
              zoom: pov?.zoom ?? 1,
            },
            disableDefaultUI: true,
            zoomControl: false,
            panControl: false,
            addressControl: false,
            linksControl: true,
            fullscreenControl: false,
            motionTracking: false,
            motionTrackingControl: false,
          });
          return;
        }

        // 2) Fallback: klassischer Constructor vorhanden?
        if (typeof window.google.maps.StreetViewPanorama === "function") {
          if (cancelled || !containerRef.current) return;

          pano = new window.google.maps.StreetViewPanorama(
            containerRef.current,
            {
              position,
              pov: {
                heading: pov?.heading ?? 0,
                pitch: pov?.pitch ?? 0,
                zoom: pov?.zoom ?? 1,
              },
              disableDefaultUI: true,
              zoomControl: false,
              panControl: false,
              addressControl: false,
              linksControl: true,
              fullscreenControl: false,
              motionTracking: false,
              motionTrackingControl: false,
            }
          );
          return;
        }

        // 3) Weder noch → sauber abbrechen
        console.error(
          "Street View API not available in this Google Maps JS version."
        );
      } catch (err) {
        console.error("Error initializing Street View:", err);
      }
    };

    init();

    return () => {
      cancelled = true;
      if (pano) {
        pano.setVisible(false);
      }
    };
  }, [
    mapsLoaded,
    position?.lat,
    position?.lng,
    pov?.heading,
    pov?.pitch,
    pov?.zoom,
  ]);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default StreetViewPanoramaView;
