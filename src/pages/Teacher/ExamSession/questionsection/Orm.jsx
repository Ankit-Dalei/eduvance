import React, { useState } from 'react';
import { Alert, Button, Card } from 'flowbite-react';

const questions = [
  {
    question: "The examination of everyday human social interactions on a small scale describes:",
    options: ["functionalism", "macrosociology", "cultural anthropology", "microsociology"],
    correct: 3,
  },
  {
    question: "Which theory emphasizes the role of power and coercion in producing social order?",
    options: ["Functionalism", "Conflict Theory", "Symbolic Interactionism", "Feminist Theory"],
    correct: 1,
  },
  {
    question: "Who is considered the father of sociology?",
    options: ["Max Weber", "Karl Marx", "Emile Durkheim", "Auguste Comte"],
    correct: 3,
  },
  {
    question: "Which method involves the detailed, systematic study of a single case?",
    options: ["Survey", "Ethnography", "Experiment", "Case Study"],
    correct: 3,
  },
  {
    question: "What is a latent function of education according to functionalists?",
    options: ["Socialization", "Transmission of culture", "Social integration", "Maintaining social inequality"],
    correct: 3,
  },
  {
    question: "Which perspective focuses on how people use shared symbols and construct society through everyday interactions?",
    options: ["Functionalism", "Conflict Theory", "Symbolic Interactionism", "Feminist Theory"],
    correct: 2,
  },
  {
    question: "What term refers to the unintended consequences of an action?",
    options: ["Manifest function", "Dysfunction", "Latent function", "Social fact"],
    correct: 2,
  },
  {
    question: "Which theory would analyze the role of the media in shaping social norms and values?",
    options: ["Functionalism", "Conflict Theory", "Symbolic Interactionism", "Postmodernism"],
    correct: 2,
  },
  {
    question: "Which research method involves asking a sample of people questions about their attitudes and behaviors?",
    options: ["Observation", "Survey", "Experiment", "Ethnography"],
    correct: 1,
  },
  {
    question: "Which perspective focuses on gender inequalities and how they shape social structures?",
    options: ["Functionalism", "Conflict Theory", "Symbolic Interactionism", "Feminist Theory"],
    correct: 3,
  },
  {
    question: "The examination of everyday human social interactions on a small scale describes:",
    options: ["functionalism", "macrosociology", "cultural anthropology", "microsociology"],
    correct: 3,
  },
  {
    question: "Which theory emphasizes the role of power and coercion in producing social order?",
    options: ["Functionalism", "Conflict Theory", "Symbolic Interactionism", "Feminist Theory"],
    correct: 1,
  },
  {
    question: "Who is considered the father of sociology?",
    options: ["Max Weber", "Karl Marx", "Emile Durkheim", "Auguste Comte"],
    correct: 3,
  },
  {
    question: "Which method involves the detailed, systematic study of a single case?",
    options: ["Survey", "Ethnography", "Experiment", "Case Study"],
    correct: 3,
  },
  {
    question: "What is a latent function of education according to functionalists?",
    options: ["Socialization", "Transmission of culture", "Social integration", "Maintaining social inequality"],
    correct: 3,
  },
  {
    question: "Which perspective focuses on how people use shared symbols and construct society through everyday interactions?",
    options: ["Functionalism", "Conflict Theory", "Symbolic Interactionism", "Feminist Theory"],
    correct: 2,
  },
  {
    question: "What term refers to the unintended consequences of an action?",
    options: ["Manifest function", "Dysfunction", "Latent function", "Social fact"],
    correct: 2,
  },
  {
    question: "Which theory would analyze the role of the media in shaping social norms and values?",
    options: ["Functionalism", "Conflict Theory", "Symbolic Interactionism", "Postmodernism"],
    correct: 2,
  },
  {
    question: "Which research method involves asking a sample of people questions about their attitudes and behaviors?",
    options: ["Observation", "Survey", "Experiment", "Ethnography"],
    correct: 1,
  },
  {
    question: "Which perspective focuses on gender inequalities and how they shape social structures?",
    options: ["Functionalism", "Conflict Theory", "Symbolic Interactionism", "Feminist Theory"],
    correct: 3,
  },
];

const Orm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [skippedQuestions, setSkippedQuestions] = useState(new Set());

  const totalRows = Math.ceil(questions.length / 5);

  const handleAnswer = (index) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);

    const newSkippedQuestions = new Set(skippedQuestions);
    newSkippedQuestions.delete(currentQuestion);
    setSkippedQuestions(newSkippedQuestions);
  };

  const nextQuestion = () => {
    const newSkippedQuestions = new Set(skippedQuestions);
    if (answers[currentQuestion] === null) {
      newSkippedQuestions.add(currentQuestion);
    }
    setSkippedQuestions(newSkippedQuestions);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToQuestion = (index) => {
    setCurrentQuestion(index);
  };

  const allAnswered = answers.every(answer => answer !== null);

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row text-black w-[90%]">
      <div className="flex-shrink-0 w-full md:w-64 bg-white rounded-lg  mb-4 md:mb-0 md:mr-6">
        <h3 className="font-bold mb-2">Legend:</h3>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-yellow-500 mr-2"></div>
            <span>Current Question</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-green-500 mr-2"></div>
            <span>Answered Question</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-red-500 mr-2"></div>
            <span>Skipped Question</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-300 mr-2"></div>
            <span>Unanswered Question</span>
          </div>
        </div>
      </div>

      <div className="flex-grow mb-4 md:mb-0">
        <Card>
          <h2 className="text-xl font-bold mb-4">Question {currentQuestion + 1}</h2>
          <p className="mb-4">{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              className={`block w-full p-2 mb-2 text-left ${
                answers[currentQuestion] === index ? 'bg-green-500 text-white' : 'bg-black'
              }`}
              onClick={() => handleAnswer(index)}
            >
              {String.fromCharCode(65 + index)}. {option}
            </Button>
          ))}
        </Card>
        <div className="flex justify-between mt-4">
          <Button color="gray" onClick={prevQuestion} disabled={currentQuestion === 0}>
            Previous
          </Button>
          {allAnswered ? (
            <Button color="green">
              Submit
            </Button>
          ) : (
            <Button color="dark" onClick={nextQuestion} disabled={currentQuestion === questions.length - 1}>
              Next
            </Button>
          )}
        </div>
      </div>

      <div className="flex-shrink-0 w-full md:w-64 p-4 bg-white rounded-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-4">
          {Array(totalRows).fill().map((_, rowIndex) => (
            <div className="flex space-x-4" key={rowIndex}>
              {questions.slice(rowIndex * 5, rowIndex * 5 + 5).map((q, colIndex) => {
                const questionIndex = rowIndex * 5 + colIndex;
                const isCurrent = questionIndex === currentQuestion;
                const isAnswered = answers[questionIndex] !== null;
                const isSkipped = skippedQuestions.has(questionIndex);

                return (
                  <Button
                    key={colIndex}
                    className={`w-12 h-12 flex items-center justify-center rounded-full ${
                      isCurrent ? 'bg-yellow-500' : isAnswered ? 'bg-green-500' : isSkipped ? 'bg-red-500' : 'bg-gray-300'
                    }`}
                    color="light"
                    onClick={() => goToQuestion(questionIndex)}
                  >
                    {questionIndex + 1}
                  </Button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orm;
