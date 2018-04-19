var quiz = new Quiz();

var question1 = new Question("What Color is the Sky?");
var question2 = new Question("What is my Dog's Name?")


quiz.add(question1);
quiz.add(question2);


var quizElement = document.getElementById("question");

quiz.renderInElement(quizElement);

var guess0Button = document.getElementById("guess0");
guess0Button.onclick = function() {
  quiz.next();
  quiz.renderInElement(quizElement);
}

var guess1Button = document.getElementById("guess1");
nextButton.onclick = function() {
  quiz.next();
  quiz.renderInElement(quizElement);
}

