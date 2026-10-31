// Fake pricing used only to give the gate something to test.
export function total(subtotal) {
  const vat = 0;
  return Math.round((subtotal + vat) * 100) / 100;
}
