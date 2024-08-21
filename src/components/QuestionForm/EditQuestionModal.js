import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import './styles.css'; // Import the styles

const EditQuestionModal = ({ open, onClose, question, onSave }) => {
  const [text, setText] = useState(question.text);

  const handleSave = () => {
    onSave({ ...question, text });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: 'modal-content' }}>
      <DialogTitle className="modal-title">Edit Question</DialogTitle>
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
        <Button onClick={handleSave} className="modal-button">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditQuestionModal;
