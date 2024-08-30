import React, { useState, useEffect } from 'react';
import './Quiz.css';

const questions = [
  { question: 'Which element has the atomic number 1?', options: ['Hydrogen', 'Oxygen', 'Carbon', 'Helium'], answer: 'Hydrogen' },
  { question: 'Which country is the largest by area?', options: ['Russia', 'Canada', 'China', 'USA'], answer: 'Russia' },
  { question: 'Who is the author of "Harry Potter"?', options: ['J.K. Rowling', 'George R.R. Martin', 'J.R.R. Tolkien', 'Stephen King'], answer: 'J.K. Rowling' },
  { question: 'What is the smallest planet in our solar system?', options: ['Mercury', 'Mars', 'Venus', 'Earth'], answer: 'Mercury' },
  { question: 'What year did the Titanic sink?', options: ['1912', '1905', '1898', '1920'], answer: '1912' },
  { question: 'Which language is the most spoken worldwide?', options: ['English', 'Mandarin', 'Spanish', 'Hindi'], answer: 'Mandarin' },
  { question: 'Which organ in the human body is responsible for pumping blood?', options: ['Lungs', 'Liver', 'Heart', 'Kidneys'], answer: 'Heart' },
  { question: 'What is the freezing point of water?', options: ['0°C', '100°C', '32°C', '50°C'], answer: '0°C' },
  { question: 'What is the currency of the United Kingdom?', options: ['Dollar', 'Euro', 'Pound', 'Yen'], answer: 'Pound' },
  { question: 'Which planet is closest to the sun?', options: ['Mercury', 'Venus', 'Earth', 'Mars'], answer: 'Mercury' },
  { question: 'What is the capital city of Australia?', options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'], answer: 'Canberra' },
  { question: 'What year did World War II end?', options: ['1945', '1939', '1941', '1950'], answer: '1945' },
  { question: 'Who was the first person to walk on the moon?', options: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'Michael Collins'], answer: 'Neil Armstrong' },
  { question: 'Which animal is known as the King of the Jungle?', options: ['Lion', 'Tiger', 'Elephant', 'Cheetah'], answer: 'Lion' },
  { question: 'Which continent is the Sahara Desert located on?', options: ['Africa', 'Asia', 'Australia', 'South America'], answer: 'Africa' }
];

const App = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuizQuestions(shuffledQuestions);
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  if (quizQuestions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizQuestions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{quizQuestions.length}
            </div>
            <div className="question-text">{quizQuestions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestion].options.map((option) => (
              <button onClick={() => handleAnswerOptionClick(option === quizQuestions[currentQuestion].answer)} key={option}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
