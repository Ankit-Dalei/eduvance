import React, { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';

const OmrQuestion = () => {
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [questions, setQuestions] = useState([]); 
  const [answers, setAnswers] = useState([]); 
  const [questionCountInput, setQuestionCountInput] = useState(''); 
  const [showSubmitButton, setShowSubmitButton] = useState(false); 

  const handleNumberChange = (e) => {
    setQuestionCountInput(e.target.value);
  };

  const handleCreateQuestions = () => {
    const value = parseInt(questionCountInput, 10);
    if (isNaN(value) || value < 0) {
      setNumberOfQuestions(0);
      setQuestions([]);
      setAnswers([]); 
      setShowSubmitButton(false);
      return;
    }

    setNumberOfQuestions(value);
    setQuestions(Array(value).fill(''));
    setAnswers(Array(value).fill(''));
    setShowSubmitButton(true);
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  return (
    <div className="p-2 max-w-[80%] mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add OMR Questions</h2>
      <div className="mb-4">
        <Label htmlFor="questionCount" value="How many questions do you want to add?" />
        <TextInput
          type="number"
          id="questionCount"
          min="1"
          value={questionCountInput}
          onChange={handleNumberChange}
          className="mt-1"
        />
      </div>
      <Button onClick={handleCreateQuestions} className="mt-4 mb-6" color="dark">
        Create Questions
      </Button>
      {questions.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {questions.map((_, index) => (
            <div key={index} className="mb-4">
              <Label htmlFor={`question-${index}`} value={`Question ${index + 1}:`} />
              <TextInput
                type="text"
                id={`question-${index}`}
                value={questions[index]}
                onChange={(e) => handleQuestionChange(index, e.target.value)}
                className="mt-1"
              />
              <Label htmlFor={`answer-${index}`} value={`Answer for Question ${index + 1}:`} className="mt-4" />
              <TextInput
                type="text"
                id={`answer-${index}`}
                value={answers[index]}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                className="mt-1"
              />
            </div>
          ))}
        </div>
      )}

      {showSubmitButton && (
        <Button onClick={() => console.log({ questions, answers })} className="mt-4" color="dark">
          Submit Questions
        </Button>
      )}
    </div>
  );
};

export default OmrQuestion;
