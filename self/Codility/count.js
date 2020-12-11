function count(X, arr) {
   checker = [];
   checked = false;
   for (let i = 1; i <= X; i++) {
      checker.push(i);
   }
   checker = new Set(checker);

   for (let i = 0; i < arr.length; i++) {
      if (checker.has(arr[i])) {
         checker.delete(arr[i]);
      }
      console.log(checker, i);
      if (arr[i] === X) {
         checked = true;
      }
      console.log(checker, i, arr[i]);

      if (checked && checker.size == 0) {
         return i;
      }
   }

   return -1;
}

console.log(count(3, [1, 3, 1, 3, 2, 1, 3]));
