// select all elements needed
clickableQuestions = document.querySelectorAll('.question');
arrayClickableQuestions = Array.from(clickableQuestions);

arrows = document.getElementsByClassName('arrow');
arrayArrows = Array.from(arrows);

questions = document.querySelectorAll('.question h4');
arrayQuestions = Array.from(questions);

answers = document.querySelectorAll('.answer-details');
arrayAnswers = Array.from(answers);

//write functions

const displayAnswer = (event) => {
  answer = event.currentTarget.nextElementSibling.children[0];
  answer.style.display == "none" || answer.style.display == '' ? answer.style.display = "block" : answer.style.display = "none";

  questionTitle = event.currentTarget.children[0];
  questionTitle.classList.toggle('title-active');

  arrow = event.currentTarget.children[1].children[0];
  arrow.classList.toggle('arrow-active');
};

//listen to event
arrayClickableQuestions.forEach(clickableQuestion => {
  clickableQuestion.addEventListener('click', displayAnswer);
});
