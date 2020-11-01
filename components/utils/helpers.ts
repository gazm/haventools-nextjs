// Convert number to real value (/1000000000000)
export const nomValue = (n, dec) => {
  return parseFloat((n / 1000000000000).toFixed(dec));
};
