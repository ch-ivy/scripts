function solution(A) {
   let set = new Set(A);
   let temp1 = 0;
   let tot = 1;
   let days = 1;
   let found = { [A[0]]: 1 };
   let min = A.length;

   for (let i = 1; i < A.length; i++) {
      if (A[i] === A[temp1]) {
         temp1++;
      } else {
         if (!found[A[i]] || found[A[i]] === 0) {
            found[A[i]] = 1;
            tot++;
            days++;
         } else {
            days++;
            found[A[i]]++;
         }
      }

      while (tot >= set.size) {
         min = Math.min(min, days);

         found[A[temp1]]--;
         if (found[A[temp1]] === 0) {
            tot--;
            days--;
         } else {
            days--;
         }

         temp1++;

         if (min === set.size) return min;
      }
   }

   return min;
}

console.log(solution([1, 2, 3, 3, 4, 3, 2, 1, 3, 3, 3, 3, 2, 2, 1]));
console.log(solution([7, 5, 2, 7, 2, 7, 4, 7]));
console.log(solution([7, 3, 7, 3, 1, 3, 4, 1]));
console.log(
   solution([2, 2, 3, 4, 1, 1, 1, 1, 2, 3, 4, 1, 2, 3, 4, 4, 4, 4, 5])
);
