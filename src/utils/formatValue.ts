const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency', // estilo moeda
    currency: 'BRL', // moeda BR
  }).format(value); // TODO

export default formatValue;
