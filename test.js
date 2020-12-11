function findSubstring(s, k) {
   // Write your code here
   let str = s.slice(0, k);
   let temp;
   let res = "";
   for (let i = 1; i < s.length; i++) {
      temp = str;
      str = s.slice(i, i + k);
      if (helper(temp) >= helper(str)) {
         res = temp;
      } else {
         res = str;
      }
      if (i + k === s.length) break;
   }

   function helper(str) {
      let count = 0;
      for (let i = 0; i < str.length; i++) {
         if (str[i].match(/[aeiou]/)) {
            count++;
         }
      }
      return count;
   }

   return res;
}

var a = findSubstring("azerdii", 5);
console.log(a);
