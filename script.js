// select all elements needed
clickableQuestions = document.querySelectorAll('.question');
arrayClickableQuestions = Array.from(clickableQuestions);

//write functions

const closeAnswer = () => arrayClickableQuestions.forEach(clickableQuestion => {
  clickableQuestion.nextElementSibling.children[0].style.display = "none";
  clickableQuestion.children[0].classList.remove('title-active');
  clickableQuestion.children[1].children[0].classList.remove('arrow-active');
});

const displayAnswer = (event) => {
  const answer = event.currentTarget.nextElementSibling.children[0];
  const questionTitle = event.currentTarget.children[0];
  const arrow = event.currentTarget.children[1].children[0];
  if (answer.style.display == "none") {
  closeAnswer();
  }
  answer.style.display == "none" || answer.style.display == '' ? answer.style.display = "block" : answer.style.display = "none";
  questionTitle.classList.toggle('title-active');
  arrow.classList.toggle('arrow-active');
};

//listen to event
arrayClickableQuestions.forEach(clickableQuestion => {
  clickableQuestion.addEventListener('click', displayAnswer);
});
