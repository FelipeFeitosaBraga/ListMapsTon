import React from 'react';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen name="velocidade" options={{ title: 'Velocidade Média' }} />
      <Drawer.Screen name="forcaAcao" options={{ title: 'Força ou Aceleração' }} />
      <Drawer.Screen name="energiaPotencial" options={{ title: 'Energia Potencial' }} />
      <Drawer.Screen name="mapaTuristico" options={{ title: 'Mapa Turístico' }} />
    </Drawer>
  );
}
