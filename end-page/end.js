//selecting elements
const container=document.querySelector('.container')
const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
// setting function that takes user's name and saves it in local storage
const setNewName=function(){
  const names=JSON.parse( localStorage.getItem('names'))|| []
  names.push(username.value)
  localStorage.setItem('names',JSON.stringify(names))

}

// handling situation when user don't write anything
saveScoreBtn.style.cursor = "not-allowed";
saveScoreBtn.disabled = true;

username.addEventListener("input", () => {
  if (!username.value) {
    saveScoreBtn.disabled = true;
  } else {
    saveScoreBtn.disabled = false;
    saveScoreBtn.style.cursor = "pointer"
  }
});
saveScoreBtn.addEventListener('click',e=>{
    if(username.value) setNewName()
    else e.preventDefault();
})