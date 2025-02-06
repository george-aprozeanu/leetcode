function dist(a: string, b: string, skip: number) {
  let dist = 0;
  for (let i = 0; i < a.length; i++) {
    dist +=
      i != skip && a.charCodeAt(i) != b.charCodeAt(i)
        ? a.charCodeAt(i) == b.charCodeAt(skip) &&
          a.charCodeAt(skip) == b.charCodeAt(i)
          ? 1
          : 2
        : 0;
  }
  return dist;
}

function areAlmostEqual(s1: string, s2: string): boolean {
  let swap_count = 0;
  if (s1 == s2) return true;
  for (let i = 0; i < s1.length; i++) {
    if (dist(s1, s2, i) == 1) swap_count++;
  }
  return swap_count == 2;
}

console.log(areAlmostEqual("bank", "kanb"));
console.log(areAlmostEqual("kelb", "kelb"));
console.log(areAlmostEqual("attack", "defend"));
console.log(areAlmostEqual("aa", "ac"));
console.log(areAlmostEqual("caa", "aaz"));
