import React from 'react';
import { View } from 'react-native';
import CalculoForcaAceleracao from '../components/CalculoForcaAceleracao';

const ForcaAcaoScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <CalculoForcaAceleracao />
    </View>
  );
};

export default ForcaAcaoScreen;
