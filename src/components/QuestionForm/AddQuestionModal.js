import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const AddQuestionModal = ({ open, onClose }) => {
  const [text, setText] = useState('');

  const handleAdd = async () => {
    if (text.trim()) {
      try {
        const response = await fetch("https://66bf5cf442533c403145f070.mockapi.io/api/question-answer/id", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: "Intern", 
            question: text,
            answer: " " 
          }),
        });

        if (response.ok) {
          alert('Question added successfully');
          setText('');
          onClose(); 
        } else {
          console.error('Failed to add question');
        }
      } catch (error) {
        console.error('Error adding question:', error);
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: 'modal-content' }}>
      <DialogTitle className="modal-title">Add New Question</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Question"
          type="text"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} className="modal-button">Cancel</Button>
        <Button onClick={handleAdd} className="modal-button">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddQuestionModal;
