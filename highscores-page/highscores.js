const highScores = document.getElementById("highScoresList");
const names=JSON.parse(localStorage.getItem('names'))
const scores = JSON.parse(localStorage.getItem("scores"));
const namesObject=names.map((username,i)=>{
   return {
        name:username,
      score:scores[i]
     }
})
 const usersSorted=namesObject.sort((a,b)=> b.score-a.score)

 usersSorted.forEach(user=>{
    highScores.innerHTML += `<li class="high-score">${user.name}-${user.score}</li>`;
 })