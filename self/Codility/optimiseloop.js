function solution(A) {
   var N = A.length;
   var result = 0;
   var i, j;

   for (i = 0; i < N; i++) {
      for (j = N - 1; j >= 0; j--) {
         if (A[i] != A[j]) {
            result = Math.max(result, j - i);
         }
         if (result >= j - i) {
            return result;
         }
      }
   }

   return result;
}
console.log(solution([4, 4, 4, 4, 4, 5, 6, 7, 5, 4, 4, 4, 4, 4, 4]));
