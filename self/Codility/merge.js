import merge from "../Tuts_code/mergeArrays.mjs";

function mergeSort(arr) {
   if (arr.length <= 1) {
      return arr;
   }

   mergeSort([
      arr.splice(0, Math.floor(arr.length / 2)),
      arr.splice(Math.floor(arr.length / 2), arr.length - 1),
   ]);
   return arr;
}

var res = mergeSort([80, 82, 3, 54, 2, 52, 90, 22, 10, 5]);
console.log(res);
