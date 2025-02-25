#include <stdio.h>

inline static int my_min(int a, int b)
{
  return a < b ? a : b;
}

inline static int my_max(int a, int b)
{
  return a > b ? a : b;
}

int maxArea(int *height, int heightSize)
{
  int left = 0;
  int right = heightSize - 1;
  int max_area = 0;
  while (left < right)
  {
    int this_height = my_min(height[left], height[right]);
    int this_width = right - left;
    int area = this_width * this_height;
    max_area = my_max(max_area, area);
    if (height[left] <= height[right])
      left++;
    else
      right--;
  }
  return max_area;
}

void main()
{
  int input[] = {1, 8, 6, 2, 5, 4, 8, 3, 7};
  int value = maxArea(input, sizeof(input) / sizeof(int));
  printf("max area %d\n", value);
}