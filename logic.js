// creating questions
const questions = [
  {
    question: "What is 2+2?",
    answers: [4, 5, 22, 7],
    correct: '22',
  },

  {
    question: "a body of mass m=1 kg moves along the axis Ox with a speed V0= 2 m/s. A force F = 4 N is exerted along the direction of motion for a time delay t = 2 s. What is the speed of the body after the end of this force.",
    answers: [10, 25, 'Who cares', 42],
    correct: "Who cares",
  },
  {
    question: "Who is the best character?",
    answers: ["Guts", "Thomas Shelby", 'Naruto', "Ichigo"],
    correct: "Thomas Shelby",
  },
  {
    question:'Гусейн пидор?',
    answers:['Да','Конечно','Очевидно','Конечно нет'],
    correct:'Очевидно'
  }
];

//selecting elements

const questionsContainer=document.querySelector('.questions-container')
const scoreText=document.getElementById('score')
// creating score that keeps track of user's write answers
let score = 0;
// index,that is used to know which question in questions array comes(questions[0]) 
let index=0
scoreText.textContent = score

//function that uptades score and dispalys it to user whenever he answers right
const updateScore=function(){
    score+=100
    scoreText.textContent = score;

}
// function that saves user's score to localStorage
 const setNewScore = function () {
   const scores = JSON.parse(localStorage.getItem("scores")) || [];
   scores.push(score)
    localStorage.setItem('scores', JSON.stringify(scores))

  
 };

// implementing showing questions and answers to user,using questions array
const showQuestion=function(index){
const object=questions[index]  
  const {question} = object;
  const [answer1, answer2, answer3, answer4] = object.answers;
  const html = `<h1 id="question">${question}</h1>
   <div class="choice-container">
    <p class="choice-prefix">A</p>
     <p class="choice-text" data-number="1">${answer1}</p>
</div>
<div class="choice-container">
<p class="choice-prefix">B</p>
<p class="choice-text" data-number="1">${answer2}</p>
</div>
<div class="choice-container">
<p class="choice-prefix">C</p>
<p class="choice-text" data-number="1">${answer3}</p>
</div>
<div class="choice-container">
<p class="choice-prefix">D</p>
<p class="choice-text" data-number="1">${answer4}</p>
`;
  questionsContainer.innerHTML = html;
;}

//showing it right away
showQuestion(index)


// adding event bubbling to questionsContainer
questionsContainer.addEventListener('click',function(e){
    const {correct} = questions[index];
    
    const target=e.target
    const userChoiceContainer= target.closest('.choice-container')
    const userChoiceText=userChoiceContainer.querySelector('.choice-text').textContent

    // handling clicks that wasn't answers field
     if(!userChoiceContainer) return;
     
      // checking if user answered right.If so,add correct class to right answer,which changes answer's color to green
     if (userChoiceText ===correct) {
        updateScore();
         userChoiceContainer.classList.add('correct')
      } else{ 
        userChoiceContainer.classList.add('incorrect')
    }
    // continiue questions until they finish
      if(index<(questions.length)-1){
     index++;
    setTimeout(()=> showQuestion(index),1000)
}else{ 
  setNewScore()
    window.location.href = "/end-page/end.html";
}
})