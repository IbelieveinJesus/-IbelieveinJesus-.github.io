document.addEventListener('DOMContentLoaded', function () {
  // Define quiz questions and answers
  const quizData = [
    {
      question: "Who is known as the 'Prince of Peace'?",
      options: ["Moses", "Abraham", "Jesus", "Buddha"],
      correctAnswer: "Jesus"
    },
    {
      question: "Where was Jesus born?",
      options: ["Bethlehem", "Jerusalem", "Nazareth", "Capernaum"],
      correctAnswer: "Bethlehem"
    },
    // Add more questions as needed
  ];

  // Function to start the quiz
  function startQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    let score = 0;
    let currentQuestionIndex = 0;

    function displayQuestion() {
      const currentQuestion = quizData[currentQuestionIndex];
      const optionsHtml = currentQuestion.options.map(option =>
        `<label><input type="radio" name="answer" value="${option}">${option}</label>`
      ).join('');

      quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <form id="quiz-form">
          ${optionsHtml}
          <button type="button" onclick="checkAnswer()">Submit Answer</button>
        </form>
      `;
    }

    function checkAnswer() {
      const selectedAnswer = document.querySelector('input[name="answer"]:checked');
      if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
      }

      const userAnswer = selectedAnswer.value;
      const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

      if (userAnswer === correctAnswer) {
        score++;
      }

      currentQuestionIndex++;

      if (currentQuestionIndex < quizData.length) {
        displayQuestion();
      } else {
        displayResults();
      }
    }

    function displayResults() {
      quizContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score} out of ${quizData.length}</p>
      `;
    }

    displayQuestion();
  }

  // Call the startQuiz function when the page is loaded
  startQuiz();
});
