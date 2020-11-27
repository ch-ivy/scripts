function distanceFromOrigin(x, y) {
   return Math.sqrt(Math.pow(x - 0, 2) + Math.pow(y - 0, 2));
}

function Solution(S, X, Y) {
   const tagsOfConsideration = {}; // stores the list of candidate tags based on which the limit for the circle will be set
   const duplicateCheck = {};

   const distancesFromOrigin = S.split("").reduce((acc, tag, index) => {
      const distance = distanceFromOrigin(X[index], Y[index]);
      const tagRecord = { distance, coord: [X[index], Y[index]] };
      if (acc[tag]) {
         if (duplicateCheck[tag] && !tagsOfConsideration[tag]) {
            tagsOfConsideration[tag] = duplicateCheck[tag];
         }
         if (distance < acc[tag].distance) {
            acc[tag] = tagRecord;
         }
         if (distance > acc[tag].distance) {
            tagsOfConsideration[tag] = tagRecord;
         }
      } else {
         acc[tag] = tagRecord;
      }
      duplicateCheck[tag] = tagRecord;
      return acc;
   }, {});

   let distanceLimit;
   for (let tag in tagsOfConsideration) {
      if (!distanceLimit) {
         distanceLimit = tagsOfConsideration[tag].distance;
      } else if (tagsOfConsideration[tag].distance < distanceLimit) {
         distanceLimit = tagsOfConsideration[tag].distance;
      }
   }

   if (distanceLimit === undefined) {
      console.log(typeof distancesFromOrigin);
      console.log(Object.entries(distancesFromOrigin));
      return Object.keys(distancesFromOrigin).length; //correct object keys
   }

   const pointsWithinCircle = Object.values(distancesFromOrigin).filter(
      (record) => {
         if (record.distance < distanceLimit) {
            return true;
         } else {
            return false;
         }
      }
   );

   return pointsWithinCircle.length;
}

console.log(Solution("CD", [1, 2], [1, -2]));
