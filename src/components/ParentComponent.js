import React, { useState } from 'react';
import QuestionList from './QuestionList';
import AddQuestionForm from './AddQuestionForm';

function ParentComponent() {
  const [questions, setQuestions] = useState([
    { id: 1, text: 'Câu hỏi 1' },
    { id: 2, text: 'Câu hỏi 2' },
  ]);

  // Thêm câu hỏi
  const addQuestion = (newQuestion) => {
    setQuestions([...questions, { id: questions.length + 1, text: newQuestion }]);
  };

  // Sửa câu hỏi
  const editQuestion = (id, updatedText) => {
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question, text: updatedText } : question
      )
    );
  };

  // Xóa câu hỏi
  const deleteQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  return (
    <div>
      <h1>Quản lý câu hỏi</h1>
      <AddQuestionForm addQuestion={addQuestion} />
      <QuestionList
        questions={questions}
        editQuestion={editQuestion}
        deleteQuestion={deleteQuestion}
      />
    </div>
  );
}

export default ParentComponent;
