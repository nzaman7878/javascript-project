const questions = [
  {
    question: "Which is the biggest superstar in the world",
    answer: [
      {
        text: "Salman Khan",
        correct: false,
      },
      {
        text: "SRK",
        correct: true,
      },
      {
        text: "Amir Khan",
        correct: false,
      },
      {
        text: "Tom Cruise",
        correct: false,
      },
    ],
  },
  {
    question: "One of the worst movies in Bollywood",
    answer: [
      {
        text: "Dhoom 3",
        correct: false,
      },
      {
        text: "Deshdrohi",
        correct: false,
      },
      {
        text: "Adipurush",
        correct: true,
      },
      {
        text: "The Kashmir Files",
        correct: false,
      },
    ],
  },
  {
    question: "Most popular song in Bollywood",
    answer: [
      {
        text: "Tere Meri Prem Kahani",
        correct: false,
      },
      {
        text: "Tu Hi Hai Aashiqui",
        correct: true,
      },
      {
        text: "Naiyo Lagda",
        correct: false,
      },
      {
        text: "Sun Raha Hai Tu",
        correct: false,
      },
    ],
  },
  {
    question: "Highest Grossing Movie in Hindi Cinema",
    answer: [
      {
        text: "3 Idiots",
        correct: false,
      },
      {
        text: "Dakad",
        correct: false,
      },
      {
        text: "Bahubali 2",
        correct: false,
      },
      {
        text: "Dangal",
        correct: true,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  nextButton.style.display = "none";
  showQuestion();
}

function showQuestion() {
  // Clear previous answer buttons
  answerButtons.innerHTML = "";

  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");

    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", () => selectAnswer(answer));
  });
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(answer) {
  const selectBtn = answerButtons.querySelector('[data-correct="true"]');
  const isCorrect = answer.correct;

  if (isCorrect) {
    score++;
  }

  if (selectBtn) {
    selectBtn.classList.add("correct");
  }
  if (isCorrect) {
    answerButtons
      .querySelector('[data-correct="true"]')
      .classList.add("correct");
  } else {
    answerButtons
      .querySelector('[data-correct="true"]')
      .classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    // Quiz is finished
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} questions.`;
    answerButtons.innerHTML = "";
    nextButton.innerHTML = "Restart";
    nextButton.removeEventListener("click", startQuiz);
    nextButton.addEventListener("click", () => {
      startQuiz();
    });
  }
});

startQuiz();
