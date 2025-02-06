function convert(s: string, numRows: number): string {
  const ret = new Uint8Array(s.length);
  let pace = numRows * 2 - 2;
  let total_groups = s.length / pace | 0 + 1;
  console.log("max =", s.length);
  for (var i = 0; i < s.length; i++) {
    let group = i / pace | 0;
    let index_in_group = i % pace;
    let vert = index_in_group < numRows | 0;
    let diag = index_in_group >= numRows | 0;
    let index = group + index_in_group * total_groups;
    console.log(s[i], group, index_in_group, vert, diag, '->', index);
    ret[index] = s.charCodeAt(i);
  }
  let buf = "";
  for (let i = 0; i < ret.length; i++) {
    buf += String.fromCharCode(ret[i]);
  }
  return buf;
}

console.log(convert("PAYPALISHIRING", 4));
