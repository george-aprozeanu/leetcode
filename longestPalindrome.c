#include <stdio.h>

char *findEvenPalindrome(char *s)
{
  for (char *cursor = s + 1; *cursor != '\0'; cursor++)
    if (*cursor == *(cursor - 1))
      return cursor - 1;
  return NULL;
}

char *findOddPalindrome(char *s)
{
  for (char *cursor = s; *cursor != '\0'; cursor++)
  {
    char *back = cursor - 2;
    if (back >= s && *cursor == *back)
      return back;
  }
  return NULL;
}

unsigned expandPalindrome(char *start, char *cursor, unsigned length)
{
  for (char *left = cursor, *right = cursor + length - 1;
       left != start && *right != '\0';
       left--, right++)
  {
    if (*left != *right)
      return 0;
  }
}

static inline unsigned max(unsigned a, unsigned b)
{
  return a > b ? a : b;
}

char *longestPalindrome(char *s)
{
  unsigned length = 0;
  for (char *c = findOddPalindrome(s); c != NULL && *c != '\0'; c = findOddPalindrome(c + 1))
  {
    length = max(length, expandPalindrome(s, c, 3));
  }
  for (char *c = findEvenPalindrome(s); c != NULL && *c != '\0'; c = findEvenPalindrome(c + 1))
  {
    length = max(length, expandPalindrome(s, c, 2));
  }
}

int main()
{
  char *ret = longestPalindrome("cbabacabeffed");
}