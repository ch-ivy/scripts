function solution(A) {
   // write your code in JavaScript (Node.js 8.9.4)
   A = A.sort((a, b) => a - b);
   let index = 0;
   var max = A[A.length - 1];

   if (A.length < 1) {
      max = 1;
      index = -1
   }
   if (A.length === 1) {
      if (A[0] > 1) {
         max = A[0] - 1;
         index = -1;

      } else {
         max = A[0] + 1;
         index = -(A.length);
      }
   }

   for (let i = A.length - 1; i >= -1; i--) {
      if (max === A[i] && max > 0) {
         max--;
         index = -i;
      }
      if (max <= 0) {
         max = A[A.length - 1] + 1;
         index = -(A.length);
      }
   }
   return { max, index, A };
}

console.log(solution([2, 3, 5, 8, 7]));
