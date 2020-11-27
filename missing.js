function missing(arr) {
   arr = arr.filter((x) => x > 0).sort((a, b) => a - b);
   console.log(arr);
   var x = 1;

   for (let i = 0; i < arr.length; i++) {
      if (x < arr[i]) return x;
      x = arr[i] + 1;
   }

   return x;
}

console.log(missing([1, 2, 3, 4]));
