function arrayManipulation(n, queries) {
   var result = [];
   for (let i = 0; i < n + 2; i++) {
      result[i] = 0;
   }
   /* 
   var a = 0;
   var b = queries[a][0];
   while (a < queries.length) {
      if (b <= queries[a][1]) {
         result[b - 1] += queries[a][2];
         b++;
      } else {
         a++;
         if (a < queries.length) b = queries[a][0];
      }
   }

   return Math.max(...result); */

   for (let i = 0; i < queries.length; i++) {
      let key = queries[i];
      let a = key[0];
      let b = key[1];
      let k = key[2];
      result[a] += k;
      result[b + 1] -= k;
   }
   var max = 0;
   var count = 0;
   for (let i = 0; i < result.length; i++) {
      count += result[i];
      max = Math.max(max, count);
   }
   return max;
}

var num = 5;
var query = [
   [1, 2, 100],
   [2, 5, 100],
   [3, 4, 100],
];
console.log(arrayManipulation(num, query));
