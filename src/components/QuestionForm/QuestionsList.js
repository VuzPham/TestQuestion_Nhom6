import React, { useState, useEffect } from 'react';
import { Grid, Pagination, CircularProgress, Typography } from '@mui/material';
import QuestionCard from './QuestionCard';
import EditQuestionModal from './EditQuestionModal';
import AddQuestionModal from './AddQuestionModal';
import DeleteQuestionModal from './DeleteQuestionModal';

const QuestionsList = ({ isAddModalOpen, setIsAddModalOpen }) => {
  const [questions, setQuestions] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const questionsPerPage = 6;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("https://66bf5cf442533c403145f070.mockapi.io/api/question-answer/id");
        if (!response.ok) throw new Error('Failed to fetch questions');
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [questions]);

  const confirmDelete = async (id) => {
    try {
      const response = await fetch(`https://66bf5cf442533c403145f070.mockapi.io/api/question-answer/id/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setQuestions(questions.filter(question => question.id !== id));
        setIsDeleteModalOpen(false);
      } else {
        console.error('Failed to delete question');
      }
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const handleEdit = (question) => {
    setEditingQuestion(question);
    setIsEditModalOpen(true);
  };

  const handleSave = async (updatedQuestion) => {
    try {
      const response = await fetch(`https://66bf5cf442533c403145f070.mockapi.io/api/question-answer/id/${updatedQuestion.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedQuestion),
      });

      if (response.ok) {
        const savedQuestion = await response.json();
        setQuestions(questions.map(question =>
          question.id === savedQuestion.id ? savedQuestion : question
        ));
        setIsEditModalOpen(false);
      } else {
        console.error('Failed to save question');
      }
    } catch (error) {
      console.error('Error saving question:', error);
    }
  };

  const handleAdd = (newQuestion) => {
    setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <>
      <Grid container spacing={2}>
        {currentQuestions.map(question => (
          <Grid item xs={12} sm={6} md={4} key={question.id}>
            <QuestionCard
              question={question}
              onDelete={() => {
                setQuestionToDelete(question.id);
                setIsDeleteModalOpen(true);
              }}
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
      {isDeleteModalOpen && (
        <DeleteQuestionModal
          open={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          confirmDelete={confirmDelete} // Sử dụng confirmDelete cho modal xóa
          questionId={questionToDelete}
        />
      )}
    </>
  );
};

export default QuestionsList;
