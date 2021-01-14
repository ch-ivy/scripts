// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
   let count = 0;
   let start = A.indexOf(0);
   if (start < 0) return count;
   for (let i = start; i < A.length; i++) {
      count += A[i];
   }
   let newCount = count;
   for (let i = start + 1; i < A.length; i++) {
      if (A[i] === 0) {
         count += newCount;
      }
      if (A[i] === 1) {
         newCount -= 1;
      }
      if (count > 1000000000) return -1;
   }
   return count;
}

console.log(solution([1, 1]));
