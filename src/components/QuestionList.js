import React from 'react';

function QuestionList({ questions, editQuestion, deleteQuestion }) {
  return (
    <div>
      <h2>Danh sách câu hỏi</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.text}
            <button onClick={() => editQuestion(question.id, 'Nội dung mới')}>
              Sửa
            </button>
            <button onClick={() => deleteQuestion(question.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
