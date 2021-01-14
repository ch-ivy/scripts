function solution(A, S) {
   // write your code in JavaScript (Node.js 8.9.4)
   let sum = 0;
   let len = A.length;
   let fh = [];
   let avg;
   let count = 0;
   let fsum = 0;
   for (let i = 0; i < A.length; i++) {
      sum += A[i];
   }
   avg = sum / A.length;
   if (avg === S) count++;
   for (let i = 1; i < A.length; i++) {
      fh.push(A[i - 1]);
      fsum += A[i - 1];
      if (fsum / i === S) count++;
      sum = sum - A[i - 1];
      if (sum / (len - i) === S) count++;
      if (result > 1000000000) return 1000000000;
   }

   return count;
}

console.log(solution([2, 2, 2, 2, 2], 2));
