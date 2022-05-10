const quizData = [
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    a: "in",
    b: "is in",
    c: "exists",
    d: "lies",
    correct: "a",
  },
  {
    question: "What is the use of the <noscript> tag in Javascript?",
    a: "The contents are displayed by non Javascript based browsers",
    b: "Clears cookies and cache",
    c: "Both A and B",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?",
    a: "Object serialization",
    b: "Object encapsulation",
    c: "Object Inheritance",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "Which function is used to serialize an object into a JSON string in Javascript?",
    a: "parse()",
    b: "stringify()",
    c: "convert()",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "Which of the following is not a Javascript framework?",
    a: "Node",
    b: "Vue",
    c: "React",
    d: "Cassandra",
    correct: "d",
  },
];

const questionEl = document.getElementById("question");
const aText = document.getElementById("aText");
const bText = document.getElementById("bText");
const cText = document.getElementById("cText");
const dText = document.getElementById("dText");
const submitBtn = document.getElementById("submit");
const answerElmt = document.querySelectorAll(".answer");
const quizContainer = document.querySelector(".quiz-container");

let currentQuestion = 0;

let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerHTML = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerElmt.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
      // clear the radio button for next question
      answerEl.checked = false;
    }
  });

  return answer;
}

//When clicking the submit button
submitBtn.addEventListener("click", () => {
  //get the answer from the function
  const answer = getSelected();
  //check if answer matches with correct answer from the quiz data
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }
  }

  // Go to next question
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    quizContainer.innerHTML = `<h2>${score} of ${quizData.length} answered correctly</h2>
    <button onClick ="location.reload()">Reload</button>`;
  }
});
