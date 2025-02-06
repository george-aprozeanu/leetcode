function mille(num: number) {
  const value = (num / 1000 | 0) % 10;
  switch(value) {
    case 0: return "";
    case 1: return "M";
    case 2: return "MM";
    case 3: return "MMM";
    default: throw new Error("value: " + value);
  }
}

function centa(num: number) {
  const value = (num / 100 | 0) % 10;
  switch(value) {
    case 0: return "";
    case 1: return "C";
    case 2: return "CC";
    case 3: return "CCC";
    case 4: return "CD";
    case 5: return "D";
    case 6: return "DC";
    case 7: return "DCC";
    case 8: return "DCCC";
    case 9: return "CM";
    default: throw new Error("value: " + value);
  }
}

function deca(num: number) {
  const value = (num / 10 | 0) % 10;
  switch(value) {
    case 0: return "";
    case 1: return "X";
    case 2: return "XX";
    case 3: return "XXX";
    case 4: return "XL";
    case 5: return "L";
    case 6: return "LX";
    case 7: return "LXX";
    case 8: return "LXXX";
    case 9: return "XC";
    default: throw new Error("value: " + value);
  }
}

function uno(num: number) {
  const value = num % 10;
  switch(value) {
    case 0: return "";
    case 1: return "I";
    case 2: return "II";
    case 3: return "III";
    case 4: return "IV";
    case 5: return "V";
    case 6: return "VI";
    case 7: return "VII";
    case 8: return "VIII";
    case 9: return "IX";
    default: throw new Error();
  } 
}

function intToRoman(num: number): string {    
  return mille(num) + centa(num) + deca(num) + uno(num);
};

console.log(intToRoman(3749));
console.log(intToRoman(58));
console.log(intToRoman(1994));