import { useState } from 'react';

export function useForcaAceleracao() {
  const [massa, setMassa] = useState('');
  const [aceleracao, setAceleracao] = useState('');
  const [forca, setForca] = useState<number | null>(null);
  const [calcularForca, setCalcularForca] = useState(true); // Controle de escolha entre força ou aceleração

  const calcular = () => {
    if (!massa || !aceleracao) {
      alert('Preencha todos os campos!');
      return;
    }

    const m = parseFloat(massa);
    const a = parseFloat(aceleracao);

    if (isNaN(m) || isNaN(a)) {
      alert('Insira valores válidos!');
      return;
    }

    if (calcularForca) {
      setForca(m * a); // Fórmula para calcular força
    } else {
      if (m === 0) {
        alert('A massa não pode ser zero para calcular aceleração!');
        return;
      }
      setForca(a / m); // Fórmula para calcular aceleração
    }
  };

  return {
    massa,
    setMassa,
    aceleracao,
    setAceleracao,
    forca,
    calcularForca,
    setCalcularForca,
    calcular,
  };
}
