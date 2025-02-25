#include <malloc.h>
#include <stdio.h>

#define maxloop 0x10000
#define maxbuf 0x10000
char *trim(char *s)
{
  int loops = maxloop;
  while (*s != '\0' && *s == ' ' && loops-- > 0)
    s++;
  return s;
}

char *word(char *s, char **buf, char *end)
{
  int loops = maxloop;
  char *start = s;
  while (*s != '\0' && *s != ' ' && loops-- > 0 && *buf < end)
    s++;
  for (char *c = s - 1; c >= start && *buf < end; c--)
    *(++*buf) = *c;
  return s;
}

char *reverseWords(char *s)
{
  char *ret = malloc(maxbuf * sizeof(char));
  char *buf = ret;
  char *end = ret + maxbuf;
  while (*s != '\0')
  {
    s = trim(s);
    s = word(s, &buf, end);
  }
  *(++buf) = '\0';
  return ret;
}

void main() {
  char *ret = reverseWords("the sky is blue");
  printf("solution %s\n", ret);
  free(ret);
}