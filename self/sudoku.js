//Another sudoku solution below
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

//Another evaluation

function sudoku(grid) {
   for (let i = 0; i < 9; i++) {
      let a = eval(grid[i].join("*")) == 362880;
      let _b = grid.map((x) => x[i]);
      let b = eval(_b.join("*")) == 362880;
      let _c = grid[i].map((x, y) => {
         let d = 3 * ((i / 3) | 0) + ((y / 3) | 0);
         let e = 3 * (i % 3) + (y % 3);
         return grid[d][e];
      });
      let c = eval(_c.join("*")) == 362880;
      if (a && b && c) continue;
      else return false;
   }
   return true;
}
