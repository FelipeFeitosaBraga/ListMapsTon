import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { styles } from '../constants/styles';

export default function CalcularEnergiaScreen() {
  const [massa, setMassa] = useState('');
  const [altura, setAltura] = useState('');
  const [energia, setEnergia] = useState<number | null>(null);

  const calcularEnergia = () => {
    const massaNum = parseFloat(massa);
    const alturaNum = parseFloat(altura);
    const gravidade = 9.8;

    if (massaNum <= 0 || alturaNum <= 0) {
      Alert.alert('Erro', 'Valores devem ser maiores que zero');
      return;
    }

    const energiaPotencial = massaNum * gravidade * alturaNum;
    setEnergia(energiaPotencial);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calcular Energia Potencial</Text>
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
      <Button title="Calcular" onPress={calcularEnergia} />
      {energia && <Text>Energia Potencial: {energia.toFixed(2)} Joules</Text>}
    </View>
  );
}
