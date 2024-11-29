import { useState } from 'react';

export function useVelocidade() {
  const [distancia, setDistancia] = useState('');
  const [tempo, setTempo] = useState('');
  const [velocidade, setVelocidade] = useState<number | null>(null);

  const calcularVelocidade = () => {
    if (!distancia || !tempo) {
      alert('Preencha todos os campos!');
      return;
    }

    const d = parseFloat(distancia);
    const t = parseFloat(tempo);

    if (isNaN(d) || isNaN(t) || t === 0) {
      alert('Insira valores válidos! O tempo deve ser maior que zero.');
      return;
    }

    setVelocidade(d / t);
  };

  return {
    distancia,
    setDistancia,
    tempo,
    setTempo,
    velocidade,
    calcularVelocidade,
  };
}
