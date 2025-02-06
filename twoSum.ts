function twoSum(nums: number[], target: number): number[] {
  const map = new Map(nums.map((num, index) => [num, index]));
  for (let i = 0; i < nums.length; i++) {
    const index = map.get(target - nums[i]);
    if (index !== undefined && index != i) {
      return [i, index];
    }
  }
  throw new Error();
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));