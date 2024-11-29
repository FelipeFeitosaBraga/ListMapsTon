import React from 'react';
import { View, Text, TextInput, TouchableOpacity, RadioButton } from 'react-native';
import styles from '../constants/styles';
import { useForcaAceleracao } from '../hooks/useForcaAceleracao';

const CalculoForcaAceleracao = () => {
  const {
    massa,
    setMassa,
    aceleracao,
    setAceleracao,
    forca,
    calcularForca,
    setCalcularForca,
    calcular,
  } = useForcaAceleracao();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>
        Calculadora de Força ou Aceleração
      </Text>

      <RadioButton.Group
        onValueChange={(value) => setCalcularForca(value === 'forca')}
        value={calcularForca ? 'forca' : 'aceleracao'}
      >
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton value="forca" />
            <Text>Calcular Força</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton value="aceleracao" />
            <Text>Calcular Aceleração</Text>
          </View>
        </View>
      </RadioButton.Group>

      <TextInput
        style={styles.input}
        placeholder="Massa (kg)"
        keyboardType="numeric"
        value={massa}
        onChangeText={setMassa}
      />
      <TextInput
        style={styles.input}
        placeholder={calcularForca ? 'Aceleração (m/s²)' : 'Força (N)'}
        keyboardType="numeric"
        value={aceleracao}
        onChangeText={setAceleracao}
      />

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {forca !== null && (
        <Text style={styles.result}>
          {calcularForca ? `Força: ${forca.toFixed(2)} N` : `Aceleração: ${forca.toFixed(2)} m/s²`}
        </Text>
      )}
    </View>
  );
};

export default CalculoForcaAceleracao;
