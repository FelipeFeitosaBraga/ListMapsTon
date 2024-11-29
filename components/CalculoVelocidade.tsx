import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../constants/styles';
import { useVelocidade } from '../hooks/useVelocidade';

const CalculoVelocidade = () => {
  const { distancia, setDistancia, tempo, setTempo, velocidade, calcularVelocidade } =
    useVelocidade();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>
        Calculadora de Velocidade Média
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Distância percorrida (m)"
        keyboardType="numeric"
        value={distancia}
        onChangeText={setDistancia}
      />
      <TextInput
        style={styles.input}
        placeholder="Tempo gasto (s)"
        keyboardType="numeric"
        value={tempo}
        onChangeText={setTempo}
      />

      <TouchableOpacity style={styles.button} onPress={calcularVelocidade}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {velocidade !== null && (
        <Text style={styles.result}>Velocidade média: {velocidade.toFixed(2)} m/s</Text>
      )}
    </View>
  );
};

export default CalculoVelocidade;
