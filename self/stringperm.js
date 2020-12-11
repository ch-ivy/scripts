function permAlone(str) {
   if (str.length === 0) return "";
   if (str.length === 1) return str;
   let result = [];
   for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      const remainingChars = str.slice(0, i) + str.slice(i + 1);
      for (let j = 0; j < remainingChars.length; j++) {
         result.push(currentChar + permAlone(remainingChars)[j]);
      }
   }
   return result;
}

console.log(permAlone("aab"));
