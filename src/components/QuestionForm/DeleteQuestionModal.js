import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const DeleteQuestionModal = ({ open, onClose, onDelete, questionId }) => {
  const handleDelete = () => {
    onDelete(questionId);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete this question?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleDelete} color="error">Delete</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteQuestionModal;
