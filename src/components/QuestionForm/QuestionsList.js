import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import QuestionCard from './QuestionCard';
import EditQuestionModal from './EditQuestionModal';
import AddQuestionModal from './AddQuestionModal'; // Import the add question modal
import './styles.css'; // Import the styles

const QuestionsList = () => {
  const [questions, setQuestions] = useState([
    { id: 1, text: 'How long do we have for the test?' },
    { id: 2, text: 'Can you explain sexual and asexual reproduction?' },
    // Add more questions if needed
  ]);

  const [editingQuestion, setEditingQuestion] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleDelete = (id) => {
    setQuestions(questions.filter(question => question.id !== id));
  };

  const handleEdit = (question) => {
    setEditingQuestion(question);
    setIsEditModalOpen(true);
  };

  const handleSave = (updatedQuestion) => {
    setQuestions(questions.map(question =>
      question.id === updatedQuestion.id ? updatedQuestion : question
    ));
  };

  const handleAdd = (text) => {
    const newQuestion = {
      id: questions.length + 1,
      text
    };
    setQuestions([...questions, newQuestion]);
  };

  return (
    <>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => setIsAddModalOpen(true)}
        className="add-question-button"
      >
        Add Question
      </Button>
      <Grid container spacing={2} className="grid-container">
        {questions.map(question => (
          <Grid item xs={12} sm={6} md={4} key={question.id}>
            <QuestionCard
              question={question}
              onDelete={() => handleDelete(question.id)}
              onEdit={() => handleEdit(question)}
            />
          </Grid>
        ))}
      </Grid>
      {editingQuestion && (
        <EditQuestionModal
          open={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          question={editingQuestion}
          onSave={handleSave}
        />
      )}
      <AddQuestionModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAdd}
      />
    </>
  );
};

export default QuestionsList;
