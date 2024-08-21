import React, { useState } from 'react';
import { Grid, Button, Pagination } from '@mui/material';
import QuestionCard from './QuestionCard';
import EditQuestionModal from './EditQuestionModal';
import AddQuestionModal from './AddQuestionModal';

const QuestionsList = ({ isAddModalOpen, setIsAddModalOpen }) => {
  const [questions, setQuestions] = useState([]);

  const [editingQuestion, setEditingQuestion] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 6;

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

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  // Calculate which questions to display
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  return (
    <>
      <Grid container spacing={2}>
        {currentQuestions.map(question => (
          <Grid item xs={12} sm={6} md={4} key={question.id}>
            <QuestionCard
              question={question}
              onDelete={() => handleDelete(question.id)}
              onEdit={() => handleEdit(question)}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(questions.length / questionsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}
      />
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
