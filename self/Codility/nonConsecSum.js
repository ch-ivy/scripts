function getNonConsecutives(array) {
   array.pop();
   array.shift();
   let newArr = array.reduce((acc, cur, ind, next) => {
      let a = next.slice(ind + 2);
      let arr = a.map((b) => cur + b);
      acc.concat(arr);
   }, []);

   return Math.min(...newArr);
}
function solution(array) {
   array.pop();
   array.shift();
   let n = array.map((x, y) => [x, y]).sort((a, b) => a[0] - b[0]);
   if (Math.abs(n[0][1] - n[1][1]) > 1) {
      return n[0][0] + n[1][0];
   }
   if (Math.abs(n[0][1] - n[2][1]) > 1) return n[0][0] + n[2][0];
   if (Math.abs(n[0][1] - n[3][1]) > 1) {
      if (Math.abs(n[1][1] - n[2][1]) === 1) return n[0][0] + n[3][0];
      else return Math.min(n[0][0] + n[3][0], n[1][0] + n[2][0]);
   }
}

console.log(getNonConsecutives([5, 3, 2, 4, 6, 3, 7]));
