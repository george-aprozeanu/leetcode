function indexOfSorted(array: number[], n: number) {
  let head = 0, tail = array.length - 1;
  let loops = array.length + 1;
  while (head < tail && loops-- > 0) {
    let pivot = (tail + head) / 2 | 0;
    if (array[pivot] == n) return pivot;
    else if (array[pivot] > n) tail = pivot;
    else head = pivot;
  }
  return n > array[head] ? (n > array[tail] ? tail + 1 : tail) : head;
}

function findk2(array: number[], k2: number) {
  if (array.length == 0) return -1;
  let odd = (k2 - 1) % 2;
  let pivot = (k2 - 1) / 2 | 0;
  if (odd) return (array[pivot] + array[pivot + 1]) / 2;
  else return array[pivot];
}

function median(array: number[]) {
  return findk2(array, array.length);
}

function solve1(a: number, b: number, k2: number) {
  console.log(`solve1`, { a, b, k2 });
  if (k2 == 0) {
    return a <= b ? a : b;
  } else if (k2 == 1) {
    return (a + b) / 2;
  } else {
    return a > b ? a : b;
  }
}

function findK2(nums1: number[], nums2: number[], k2: number, loops: number) {
  if (loops <= 0) return -1;
  if (nums1.length == 0) return findk2(nums2, k2);
  if (nums2.length == 0) return findk2(nums1, k2);
  let [work, cut] = nums1.length >= nums2.length ? [nums1, nums2] : [nums2, nums1];
  let workPivot = work.length / 2 | 0;
  let cutPivot = indexOfSorted(cut, work[workPivot]);
  let thisk2 = (workPivot + cutPivot) * 2;
  console.log({
    work: work.join(','),
    cut: cut.join(','),
    thisk2,
    k2,
    pivot: work[workPivot], 
    workPivot, 
    cutPivot, 
    loops
  });
  if (nums1.length == 1 && nums2.length == 1) return solve1(nums1[0], nums2[0], k2);
  if (thisk2 > k2) {
    return findK2(work.slice(0, workPivot), cut.slice(0, cutPivot), k2, loops - 1);
  } else {
    return findK2(work.slice(workPivot), cut.slice(cutPivot), k2 - thisk2, loops - 1);
  }
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  return findK2(nums1, nums2, nums1.length + nums2.length - 1, 2 * (nums1.length + nums2.length));
};

function trivialSolve(a: number[], b: number[]) {
  return median([...a, ...b].sort((a, b) => a - b));
}

function solve(a: number[], b: number[]) {
  return ({
    trivial: trivialSolve(a, b),
    solution: findMedianSortedArrays(a, b)
  })
}

console.log(solve([1, 2, 10], [7, 8, 9]));