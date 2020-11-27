function solution(A) {
   // write your code in JavaScript (Node.js 8.9.4)
   A = A.sort((a, b) => a - b);
   var max = A[A.length - 1];
   if (A.length < 1) {
      return 1;
   }
   if (A.length === 1) {
      if (A[0] > 1) {
         return A[0] - 1;
      } else {
         return A[0] + 1;
      }
   }

   for (let i = A.length - 1; i >= -1; i--) {
      if (max === A[i] && max > 0) {
         max--;
      }
      if (max <= 0) {
         max = A[A.length - 1] + 1;
      }
   }
   return max;
}

console.log(solution([2, 3, 1, 5]));
