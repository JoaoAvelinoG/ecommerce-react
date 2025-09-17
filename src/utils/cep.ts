// Valida se o CEP está no formato 00000-000
export const isValidCep = (cep: string) => {
  const cepRegex = /^\d{5}-\d{3}$/;
  return cepRegex.test(cep);
};

export const formatCep = (value: string) => {
  // Remove tudo que não é número
  const numericValue = value.replace(/\D/g, '');

  // Limita a 8 dígitos
  const limitedValue = numericValue.slice(0, 8);

  // Adiciona o hífen após os 5 primeiros números
  if (limitedValue.length > 5) {
    return `${limitedValue.slice(0, 5)}-${limitedValue.slice(5)}`;
  }
  return limitedValue;
};
