import { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl";
import { getCenter } from "geolib";
import searchResult from "../json/result.json";
import "mapbox-gl/dist/mapbox-gl.css";

function Maps() {
  // { latitude: 52.516272, longitude: 13.377722 }

  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  console.log(selectedLocation);

  const center = getCenter(coordinates);
  return (
    <Map
      mapLib={import("mapbox-gl")}
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      mapStyle="mapbox://styles/sunilv/clko8xz4x00lu01pccf623nek"
      mapboxAccessToken={process.env.mapbox_key}
    >
      <div>
        <NavigationControl />
      </div>
      {searchResult.map((item) => (
        <div key={item.lat}>
          <Marker longitude={item.long} latitude={item.lat} anchor="bottom">
            <p
              onClick={() => setSelectedLocation(item)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === item.long ? (
            <Popup
              onClose={() => setSelectedLocation({ selectedLocation })}
              closeOnClick="true"
              latitude={item.lat}
              longitude={item.long}
            >
              {item.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
}

export default Maps;
