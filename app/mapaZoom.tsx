import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { styles } from '../constants/styles';

export default function MapaTuristicoScreen() {
  const [region, setRegion] = useState({
    latitude: -23.6213,
    longitude: -46.8978,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [zoomLevel, setZoomLevel] = useState(region.latitudeDelta); // Controla o nível de zoom

  const pontosTuristicos = [
    { 
      latitude: -23.6213, longitude: -46.8978, nome: "Templo Zu Lai", 
      descricao: "Templo Budista", 
      imagem: "https://via.placeholder.com/100?text=Templo+Zu+Lai"
    },
    { 
      latitude: -23.5760, longitude: -46.8736, nome: "Granja Viana", 
      descricao: "Centro Comercial e Residencial", 
      imagem: "https://via.placeholder.com/100?text=Granja+Viana"
    },
    { 
      latitude: -23.5456, longitude: -46.9120, nome: "Parque Cemucam", 
      descricao: "Parque Natural", 
      imagem: "https://via.placeholder.com/100?text=Parque+Cemucam"
    },
  ];

  const explorarArea = () => {
    setRegion({
      ...region,
      latitude: -23.5600, // Nova latitude para a área comercial
      longitude: -46.8800, // Nova longitude para a área comercial
      latitudeDelta: 0.015, // Zoom mais próximo
      longitudeDelta: 0.015,
    });
    setZoomLevel(0.015);
  };

  const handleZoomChange = (zoom) => {
    setZoomLevel(zoom.latitudeDelta);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={handleZoomChange} // Atualiza o nível de zoom
      >
        {pontosTuristicos.map((ponto, index) => (
          <Marker key={index} coordinate={{ latitude: ponto.latitude, longitude: ponto.longitude }}>
            <Callout>
              <View>
                <Text>{ponto.nome}</Text>
                <Text>{ponto.descricao}</Text>
                <img src={ponto.imagem} alt={ponto.nome} style={{ width: 100, height: 100 }} />
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <Button title="Explorar" onPress={explorarArea} />
      <Text>Zoom atual: {Math.round(zoomLevel * 100)}</Text>
    </View>
  );
}
