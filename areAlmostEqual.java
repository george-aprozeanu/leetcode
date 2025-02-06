class Solution {
  public int dist(String a, String b, int skip) {
    var dist = 0;
    for (var i = 0; i < a.length(); i++) {
      dist += i != skip && a.codePointAt(i) != b.codePointAt(i)
          ? a.codePointAt(i) == b.codePointAt(skip) &&
              a.codePointAt(skip) == b.codePointAt(i)
                  ? 1
                  : 2
          : 0;
    }
    return dist;
  }

  public boolean areAlmostEqual(String s1, String s2) {
    var swap_count = 0;
    if (s1.equals(s2))
      return true;
    for (var i = 0; i < s1.length(); i++) {
      if (dist(s1, s2, i) == 1)
        swap_count++;
    }
    return swap_count == 2;
  }
}

public static void main(String[] args) {
  var s = new Solution();
  System.out.println(s.areAlmostEqual("bank", "kanb"));
}