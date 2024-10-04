import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location'; // For user location (assuming Expo)
import { Ionicons } from '@expo/vector-icons'; // For location icon

const EmergencyServicesScreen = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [mapRegion, setMapRegion] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
      setMapRegion({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });

      fetchEmergencyServices(loc.coords.latitude, loc.coords.longitude);
    })();
  }, []);

  const fetchEmergencyServices = async (latitude, longitude) => {
    const radius = 10000;

    const query = `
      [out:json];
      (
        node["amenity"="hospital"](around:${radius},${latitude},${longitude});
        node["amenity"="police"](around:${radius},${latitude},${longitude});
        node["amenity"="fire_station"](around:${radius},${latitude},${longitude});
        node["amenity"="clinic"](around:${radius},${latitude},${longitude});
        node["amenity"="doctor"](around:${radius},${latitude},${longitude});
        node["amenity"="pharmacy"](around:${radius},${latitude},${longitude});
        node["emergency"="ambulance_station"](around:${radius},${latitude},${longitude});
      );
      out body;
    `;

    try {
      const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`);
      const data = await response.json();

      const services = data.elements.map((service) => ({
        name: service.tags.name || 'Unknown Name',
        latitude: service.lat,
        longitude: service.lon,
        type: service.tags.amenity || service.tags.emergency || 'Unknown Type',
      }));

      setServices(services);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching emergency services:', error);
    }
  };

  const zoomToCurrentLocation = () => {
    if (location) {
      setMapRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.005, // Zoom level adjustment for a closer view
        longitudeDelta: 0.005,
      });
    }
  };

  if (loading) {
    return <ActivityIndicator style={styles.loader} size="large" color="#73828c" />;
  }

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          region={mapRegion}
          showsUserLocation={true}
          onRegionChangeComplete={(region) => setMapRegion(region)}
        >
          <Circle
            center={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            radius={10000}
            strokeWidth={2}
            strokeColor="rgba(135,206,250, 1)"
            fillColor="rgba(135,206,250, 0.3)"
          />
          {services.map((service, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: service.latitude,
                longitude: service.longitude,
              }}
              title={service.name}
              description={service.type}
              pinColor={getMarkerColor(service.type)}
            />
          ))}
        </MapView>
      )}
      
    </View>
  );
};

const getMarkerColor = (type) => {
  switch (type) {
    case 'hospital':
      return 'green';
    case 'police':
      return 'red';
    case 'fire_station':
      return 'orange';
    case 'clinic':
    case 'doctor':
    case 'pharmacy':
      return 'purple';
    default:
      return 'blue';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default EmergencyServicesScreen;
