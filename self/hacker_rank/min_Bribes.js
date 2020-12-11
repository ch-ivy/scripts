function minimumBribes(arr) {
   let count = 0;
   let ex1 = 1;
   let ex2 = 2;
   let ex3 = 3;

   for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
         case ex1:
            ex1 = ex2;
            ex2 = ex3;
            ex3++;
            break;
         case ex2:
            count++;
            ex2 = ex3;
            ex3++;
            break;
         case ex3:
            count += 2;
            ex3++;
            break;
         default:
            console.log("Too chaotic");
            return "Too chaotic";
            break;
      }
   }

   return count;
}
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
