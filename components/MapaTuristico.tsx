import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Dimensions } from 'react-native';

const MapaTuristico = () => {
  const cotiaPoints = [
    {
      id: 1,
      title: "Templo Zu Lai",
      description: "Um dos maiores templos budistas da América Latina.",
      coordinate: { latitude: -23.5413, longitude: -47.5178 }
    },
    {
      id: 2,
      title: "Granja Viana",
      description: "Área conhecida por sua tranquilidade e belezas naturais.",
      coordinate: { latitude: -23.5920, longitude: -47.5311 }
    },
    {
      id: 3,
      title: "Parque Cemucam",
      description: "Parque de preservação ambiental com diversas trilhas.",
      coordinate: { latitude: -23.5989, longitude: -47.4853 }
    }
  ];

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: -23.5896,
        longitude: -47.5131,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      {cotiaPoints.map((point) => (
        <Marker key={point.id} coordinate={point.coordinate}>
          <Callout>
            <View>
              <Text style={styles.calloutTitle}>{point.title}</Text>
              <Text>{point.description}</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MapaTuristico;
