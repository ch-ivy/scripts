const fetch = require("node-fetch");
async function getWinnerTotalGoals(competition, year) {
   var url = `https://jsonmock.hackerrank.com/api/football_competitions?name=${competition}&year=${year}`;
   const team = await fetch(url);
   var teamData = await team.json();
   var winner = teamData.data[0].winner;

   getTotalGoals(winner, year);
}
async function getTotalGoals(team, year) {
   var url = "https://jsonmock.hackerrank.com/api/football_matches?";
   var team1 = `${url}year=${year}&team1=${team}`;
   var team2 = `${url}year=${year}&team2=${team}`;
   var sum = 0;

   const team1res = await fetch(team1);
   var team1Data = await team1res.json();
   if (team1Data.total_pages > 0) {
      for (let i = 0; i < team1Data.total_pages; i++) {
         let doc = await fetch(team1 + "&page" + i);
         let docs = await doc.json();
         // console.log(docs);
         team1Data.data.push(...docs.data);
      }
      console.log("1", team1Data);
   }
   for (let i = 0; i < team1Data.total; i++) {
      let a = +team1Data.data[i].team1goals;
      sum += a;
   }
   const team2res = await fetch(team2);
   var team2Data = await team2res.json();
   if (team2Data.total_pages > 1) {
      for (let i = 0; i < team2Data.total_pages; i++) {
         for (let i = 0; i < team2Data.total_pages; i++) {
            let doc = await fetch(team1 + "&page" + i);
            let docs = await doc.json();
            team2Data.data.push(...docs.data);
         }
      }
   }
   for (let i = 0; i < team2Data.total; i++) {
      let b = +team2Data.data[i]?.team2goals;
      sum += b;
   }
   console.log(sum);
   return sum;
}

console.log(getWinnerTotalGoals("UEFA Champions League", "2011"));
