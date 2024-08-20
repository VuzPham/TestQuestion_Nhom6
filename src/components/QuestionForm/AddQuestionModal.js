import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import './styles.css'; // Import the styles

const AddQuestionModal = ({ open, onClose, onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText('');
      onClose();
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
          variant="standard"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="modal-textfield"
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
