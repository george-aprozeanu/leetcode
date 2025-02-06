const buffer = { value: 0, exponent: 0 };
const loop = (x: number, buffer: { value: number; exponent: number }) => {
  const r = x % 10 | 0;
  const c = (x / 10) | 0;
  if (c > 0) {
    loop(c, buffer);
    buffer.value = r * buffer.exponent + buffer.value;
    buffer.exponent *= 10;
  } else {
    buffer.value = r;
    buffer.exponent = 10;
  }
};
function reverse(x: number): number {
  loop(x, buffer);
  return buffer.value;
}

function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  const value = reverse(x);
  return value == x;
}

console.log(isPalindrome(123454121));
