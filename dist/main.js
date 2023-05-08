const questions = document.querySelectorAll(".question");

function boldQuestion() {
  questions.forEach((question) => {
    question.addEventListener("click", (event) => {
      event.target.classList.toggle("font-bold");
    });
  });
}

boldQuestion();
