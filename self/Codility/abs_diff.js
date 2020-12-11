function diff(arr) {
   var first_half = arr[0];
   var second_half = 0;
   var diff = 0;
   var min = Infinity;
   for (let i = 1; i < arr.length; i++) {
      second_half += arr[i];
   }
   diff = Math.abs(first_half - second_half);
   min = diff;
   for (let i = 1; i < arr.length - 1; i++) {
      first_half += arr[i];
      second_half -= arr[i];
      diff = Math.abs(first_half - second_half);
      if (diff < min) {
         min = diff;
      }
   }
   return min;
}

console.log(diff([1, 2, 3, 4, 1, 3]));
