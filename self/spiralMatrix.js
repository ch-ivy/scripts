function spiralNumbers(n) {
   var res = [...Array(n)].map((_) => []),
      x = 0,
      y = 0,
      pos = 2,
      size = n,
      c = 0;
   for (var i = 1; i <= n * n; i++) {
      res[y][x] = i;
      if (++c == size) {
         pos = (pos + 1) % 4;
         size -= pos % 2;
         c = 0;
      }
      if (pos % 2 == 0) x += pos > 1 ? 1 : -1;
      else y += pos > 1 ? 1 : -1;
   }
   return res;
}

/*
 returns a matrixs of siz nxn with numbers inputed
  in a cricular motion e.g n = 3 
=> [
    [1,2,3],
    [8,9,4],
    [7,6,5]
   ]

*/
