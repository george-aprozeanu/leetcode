function romanToInt(s: string): number {
  const map = (c: string) => {
    switch (c) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      default:
        throw new Error();
    }
  };
  let prev = 0;
  let sum = 0;
  let value = 0; // uses less memory;
  for (let i = s.length - 1; i >= 0; i--) {
    value = map(s[i]);
    if (value < prev) sum -= value;
    else sum += value;
    prev = value;
  }
  return sum;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
