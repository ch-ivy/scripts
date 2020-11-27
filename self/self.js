/* Gets the minimum length of a compressed string if a "K" 
number of characters are removed from the provided string

Example: A compressed reperesentation of the string "ABBBCCDDDCC" is "A3B2C3D2C" and the compressed reperesentation of this string "AAAAAAAAAAABXXAAAAAA" is "11AB2X6A".

for string "AAAAAAAAAAABXXAAAAAA" if K = 3 i.e 3 characters are
removed from the string the minimum length of the compressed 
string would be 3 => 17A

*/
function compress(str, K) {
   var min = Infinity;
   for (let i = 0; i < str.length - K; i++) {
      const first = str.substr(0, i);
      const second = str.substr(K + i, str.length - 1);
      const compressed = comp(first + second);
      if (min > compressed) {
         min = compressed;
      }
   }
   return min;
}

function comp(str) {
   var len = 0;
   var ch = 0;
   var count = len;
   for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[i + 1]) {
         if (ch === 0) {
            len += 1;
            ch = 0;
         } else {
            let res = Math.floor(Math.log10(Math.abs(ch))) + 1;
            len += res + 1;
            ch = 0;
            count++;
         }
      } else {
         ch++;
      }
   }
   return len;
}

console.log(compress("AAAAAAAAAAABXXAAAAAA", 3));
