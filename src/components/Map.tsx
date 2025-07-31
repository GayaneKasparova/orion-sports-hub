import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from "@/components/ui/button";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [44.5152, 40.1792], // Yerevan coordinates
      zoom: 14,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add marker for gym location
    new mapboxgl.Marker({
      color: 'hsl(180, 85%, 50%)', // Using primary color
    })
      .setLngLat([44.5152, 40.1792])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML('<div class="text-center"><strong>Orion Sports Club</strong><br/>123 Fitness Street<br/>Yerevan, Armenia</div>')
      )
      .addTo(map.current);

    // Add atmosphere effects
    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(25, 25, 35)',
        'high-color': 'rgb(50, 50, 70)',
        'horizon-blend': 0.3,
      });
    });

    setIsMapLoaded(true);
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isMapLoaded) {
    return (
      <div className="bg-card/50 border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Interactive Map</h3>
        <p className="text-muted-foreground mb-4 text-sm">
          To display the map, please enter your Mapbox public token. 
          Get yours at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
        </p>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter Mapbox public token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground text-sm"
          />
          <Button onClick={handleTokenSubmit} size="sm">
            Load Map
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-lg shadow-card border border-border">
      <div ref={mapContainer} className="w-full h-80" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/5 rounded-lg" />
    </div>
  );
};

export default Map;