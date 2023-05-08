const questions = document.querySelectorAll(".question");

function boldQuestion() {
  questions.forEach((question) => {
    question.addEventListener("click", (event) => {
      event.target.classList.toggle("font-bold");
      event.target.classList.toggle("text-very-dark-desaturated-blue");
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  boldQuestion();
});
