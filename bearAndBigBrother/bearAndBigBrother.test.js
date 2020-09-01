const bearAndBigBrother = require("./bearAndBigBrother");

test("Limak weighs 4 and Bob weighs 7 initially. Limak became larger than Bob after two years", () => {
  expect(bearAndBigBrother(4, 7)).toBe(2);
});

test("Limak weighs 4 and Bob weighs 9 initially. Limak became larger than Bob after three years", () => {
  expect(bearAndBigBrother(4, 9)).toBe(3);
});

test("Limak weighs 1 and Bob weighs 1 initially. Limak became larger than Bob after one years", () => {
  expect(bearAndBigBrother(1, 1)).toBe(1);
});
