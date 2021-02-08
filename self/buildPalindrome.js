function buildPalindrome(st) {
   let a = [...st].reverse().join("");
   if (a == st) return st;
   let extra = "";
   let sub = a;
   let temp = st;
   for (let i = 0; i < temp.length; i++) {
      if (st !== a) {
         st = temp.substring(i + 1);
         extra = sub.substring(sub.length - (i + 1));
      } else break;
      a = a.slice(0, -1);
   }

   return temp + extra;
}

console.log(buildPalindrome("abcabc"));
