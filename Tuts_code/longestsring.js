function findLongestSubstring(str) {
   let longest = 0;
   let seen = {};
   let start = 0;

   for (let i = 0; i < str.length; i++) {
      if (seen[str[i]]) {
         start = Math.max(start, seen[str[i]]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next str[i] so as to not double count
      seen[str[i]] = i + 1;
   }
   return longest;
}

console.log(findLongestSubstring("longestsubstring"));
