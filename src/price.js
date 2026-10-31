// Fake pricing, used only to give the gate something to test.
export function total(subtotal) {
  const vat = Math.round(subtotal * 7) / 100;
  return Math.round((subtotal + vat) * 100) / 100;
}
