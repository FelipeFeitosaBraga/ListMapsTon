import { useState } from 'react';

export function useEnergiaPotencial() {
  const [massa, setMassa] = useState('');
  const [altura, setAltura] = useState('');
  const [energiaPotencial, setEnergiaPotencial] = useState<number | null>(null);

  const calcularEnergiaPotencial = () => {
    if (!massa || !altura) {
      alert('Preencha todos os campos!');
      return;
    }

    const m = parseFloat(massa);
    const h = parseFloat(altura);

    if (isNaN(m) || isNaN(h) || m < 0 || h < 0) {
      alert('Insira valores válidos! Massa e altura não podem ser negativos.');
      return;
    }

    const g = 9.8; // Aceleração gravitacional em m/s²
    const energia = m * g * h;
    setEnergiaPotencial(energia);
  };

  return {
    massa,
    setMassa,
    altura,
    setAltura,
    energiaPotencial,
    calcularEnergiaPotencial,
  };
}
