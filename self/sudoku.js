function sudoku2(grid) {
   const valid = (cb) => {
      for (let i = 0; i < 9; i++) {
         const set = new Set();
         for (let j = 0; j < 9; j++) {
            const item = cb(i, j);
            if (item !== ".") {
               if (set.has(item)) {
                  return false;
               } else {
                  set.add(item);
               }
            }
         }
      }
      return true;
   };

   return (
      valid((i, j) => grid[i][j]) &&
      valid((i, j) => grid[j][i]) &&
      valid(
         (i, j) =>
            grid[Math.floor(i / 3) * 3 + Math.floor(j / 3)][
               (i % 3) * 3 + (j % 3)
            ]
      )
   );
}
