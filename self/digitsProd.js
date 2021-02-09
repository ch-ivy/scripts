function digitsProduct(product) {
   if (product == 0) return 10;
   if (product == 1) return 1;
   var divisor = 10,
      power = 1,
      result = 0;
   while (product > 1) {
      if (--divisor == 1) return -1;
      while (product % divisor == 0) {
         product /= divisor;
         result += divisor * power;
         power *= 10;
      }
   }
   return result;
}

/* 
    Returns the minimum digits you can multiply to get products
    Ex => product is 12, the result = 26 because 2*6 = 12

*/
