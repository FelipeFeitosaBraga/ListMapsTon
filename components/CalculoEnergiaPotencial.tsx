import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../constants/styles';
import { useEnergiaPotencial } from '../hooks/useEnergiaPotencial';

const CalculoEnergiaPotencial = () => {
  const { massa, setMassa, altura, setAltura, energiaPotencial, calcularEnergiaPotencial } = useEnergiaPotencial();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>
        Calculadora de Energia Potencial Gravitacional
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Massa (kg)"
        keyboardType="numeric"
        value={massa}
        onChangeText={setMassa}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <TouchableOpacity style={styles.button} onPress={calcularEnergiaPotencial}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {energiaPotencial !== null && (
        <Text style={styles.result}>Energia Potencial: {energiaPotencial.toFixed(2)} Joules</Text>
      )}
    </View>
  );
};

export default CalculoEnergiaPotencial;
