function bearAndBigBrother(a, b) {
  let limak = a;
  let bob = b;
  let index = 0;
  while (limak <= bob) {
    limak *= 3;
    bob *= 2;
    index++;
  }
  return index;
}

module.exports = bearAndBigBrother;
