const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Mars", "Venus", "Jupiter", "Mercury"],
      correctAnswer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      question: "What is the largest mammal on Earth?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale"
    }
  ];
  
  const quizContainer = document.getElementById('quizContainer');
  const resultContainer = document.getElementById('resultContainer');
  const startBtn = document.getElementById('startBtn');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    startBtn.style.display = 'none';
    showQuestion();
  }
  
  function showQuestion() {
    if (currentQuestionIndex < questions.length) {
      const questionData = questions[currentQuestionIndex];
      let optionsHTML = '';
      
      questionData.options.forEach((option) => {
        optionsHTML += `<div class="form-check option">
                          <input type="radio" class="form-check-input" name="answer" value="${option}">
                          <label class="form-check-label">${option}</label>
                        </div>`;
      });
      
      const questionHTML = `
        <div class="question">${questionData.question}</div>
        <form>${optionsHTML}</form>
        <button class="btn btn-primary" onclick="checkAnswer()">Submit</button>
      `;
      
      quizContainer.innerHTML = questionHTML;
      quizContainer.style.display = 'block';
    } else {
      showResults();
    }
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (selectedOption) {
      const userAnswer = selectedOption.value;
      const correctAnswer = questions[currentQuestionIndex].correctAnswer;
      
      if (userAnswer === correctAnswer) {
        score++;
      }
      
      currentQuestionIndex++;
      showQuestion();
    }
  }
  
  function showResults() {
    const resultHTML = `<h3>Your Score: ${score} / ${questions.length}</h3>`;
    resultContainer.innerHTML = resultHTML;
    resultContainer.style.display = 'block';
  }
  
  startBtn.addEventListener('click', startQuiz);
  