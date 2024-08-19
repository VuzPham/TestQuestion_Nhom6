import React, { useState } from 'react';

function AddQuestionForm({ addQuestion }) {
  const [newQuestion, setNewQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      addQuestion(newQuestion);
      setNewQuestion('');
    }
  };

  return (
    <div>
      <h2>Add a New Question</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={newQuestion} 
          onChange={(e) => setNewQuestion(e.target.value)} 
          placeholder="Enter your question" 
        />
        <button type="submit">Add Question</button>
      </form>
    </div>
  );
}

export default AddQuestionForm;
