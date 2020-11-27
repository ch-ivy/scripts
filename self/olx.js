function olex(ju, cap) {
   var max = 1;
   let nuju = ju.slice().sort((a, b) => a - b);

   for (let i = 0; i < ju.length; i++) {
      let rem = cap[i] - ju[i];
      let no = 1;
      let dup = 0;
      for (let j = 0; j < nuju.length; j++) {
         if (ju[i] === nuju[j] && dup == 0) {
            dup++;
         } else {
            rem -= nuju[j];
            if (rem >= 0) {
               no++;
               max = no > max ? no : max;
            } else {
               break;
            }
         }
      }
   }
   return max;
}

console.log(olex([2, 3], [3, 4]));
