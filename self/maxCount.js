function counter(n, arr) {
   var newArr = [];
   var max = 0;
   var maxCount = 0;
   for (let i = 0; i < n; i++) {
      newArr.push(0);
   }

   for (let num of arr) {
      if (num <= n && num >= 1) {
         maxCount = 0;
         newArr[num - 1] += 1;
         if (newArr[num - 1] > max) {
            max = newArr[num - 1];
         }
      } else if (num === n + 1 && maxCount === 0) {
         maxCount = 1;
         for (let i = 0; i < n; i++) {
            newArr[i] = max;
         }
      }
   }
   return newArr;
}
console.log(counter(2, [1, 1, 1, 1, 2, 3, 5, 1, 2]));

//Questions are all on codility
