#include <string.h>
#include <stdio.h>
#include <stdint.h>

int32_t ctoi(char c)
{
  switch (c)
  {
  case '0':
    return 0;
  case '1':
    return 1;
  case '2':
    return 2;
  case '3':
    return 3;
  case '4':
    return 4;
  case '5':
    return 5;
  case '6':
    return 6;
  case '7':
    return 7;
  case '8':
    return 8;
  case '9':
    return 9;
  default:
    return -1;
  }
}

#define maxloop 0x100

char *ltrim(char *s)
{
  int loops = maxloop;
  while (*s != '\0' && (*s == ' ' || *s == '\t') && loops-- > 0)
    s++;
  return s;
}

int32_t myAtoi(char *s)
{
  int res = 0;
  int loops = maxloop;
  int sign = 1;
  s = ltrim(s);
  if (*s == '-')
  {
    sign = -1;
    s++;
  }
  else if (*s == '+')
  {
    sign = 1;
    s++;
  }
  while (*s != '\0' && loops-- > 0)
  {
    int c = ctoi(*s++);
    if (c < 0)
      return res;
    int64_t value = (int64_t)res * 10 + sign * c;
    res = value > INT32_MAX ? INT32_MAX : value < INT32_MIN ? INT32_MIN
                                                            : value;
  }
  return res;
}

void main()
{
  int32_t result = myAtoi("    -42");
  printf("result %d\n", result);
}
