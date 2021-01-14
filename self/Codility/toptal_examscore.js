// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(T, R) {
   // write your code in JavaScript (Node.js 8.9.4)
   let scorePair = {};
   let passed = 0;
   T = T.map((x) => x.replace(/\D/g, ""));
   let groups = new Set(T);
   console.log(groups.size);
   var paired = [];
   var pairedCheck;
   for (let i = 0; i < R.length; i++) {
      if (scorePair[T[i]]) {
         scorePair[T[i]] += ` & ${R[i]}`;
      } else {
         scorePair[T[i]] = R[i];
      }
   }
   console.log(scorePair);
   for (let val in scorePair) {
      if (scorePair[val] === "OK") {
         passed++;
      } else {
         paired = scorePair[val].split("&");
      }
   }
   pairedCheck = paired.every((x) => {
      x === "OK";
   });
   if (pairedCheck) passed++;
   console.log(passed);
   let a = 100 / groups.size;
   return Math.floor(a * passed);
}

//Optimised Solution
function O_solution(T, R) {
   // write your code in JavaScript (Node.js 8.9.4)
   let scorePair = {};
   let passed = 0;
   let pos = T[0].split(/\d/i)[0].length;
   T = T.map((x) => x.substr(pos, 1));
   let groups = new Set(T);

   for (let i = 0; i < R.length; i++) {
      let isPassed = R[i] === "OK";
      if (T[i] in scorePair) {
         if (scorePair[T[i]] && !isPassed) {
            passed--;
         }
         scorePair[T[i]] = isPassed && scorePair[T[i]];
      } else {
         if (isPassed) {
            passed++;
         }
         scorePair[T[i]] = isPassed;
      }
   }

   console.log(scorePair);
   let a = 100 / groups.size;
   return Math.floor(a * passed);
}

console.log(
   solution(
      ["codility1", "codility3", "codility2", "codility4b", "codility4a"],
      ["Wrong answer", "OK", "OK", "Time limit exceeded", "OK"]
   )
);
console.log(
   solution(
      ["test1a", "test2", "test1b", "test1c", "test3"],
      ["Wrong Answer", "OK", "Runtime Error", "OK", "Time limit exceeded"]
   )
);
