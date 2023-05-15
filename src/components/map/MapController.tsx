import { useMap } from "react-leaflet";
import { useEffect } from "react";
import { LatLngTuple } from "leaflet";

const MapController = ({
  selectedPosition,
}: {
  selectedPosition: LatLngTuple;
}) => {
  const map = useMap();
  const flyToDuration = 0.5;

  const flyTo = (location: LatLngTuple) => {
    map.flyTo(location, 15, {
      animate: true,
      duration: flyToDuration,
    });
  };

  const flyToCenter = () => {
    map.flyTo([59.914, 10.734], 13, {
      animate: true,
      duration: flyToDuration,
    });
  };

  useEffect(() => {
    if (selectedPosition) {
      flyTo(selectedPosition);
    } else {
      flyToCenter();
    }
  }, [selectedPosition]);

  return null;
};

export default MapController;
