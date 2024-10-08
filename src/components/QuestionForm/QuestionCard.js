// src/components/QuestionForm/QuestionCard.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Avatar, Tooltip, Snackbar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const QuestionCard = ({ question, onDelete, onEdit }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopy = () => {
    setSnackbarOpen(true); // Show the snackbar when the text is copied
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Card className="question-card">
      <CardContent className="question-card-content">
        <div className="question-card-header">
          <Avatar className="question-card-avatar">A</Avatar> {/* Replace "A" with the user's initial or image */}
          <Typography variant="subtitle1" className="question-card-name">John Doe</Typography> {/* Replace with the user's name */}
        </div>
        <Typography variant="h6" className="question-card-text">{question.question}</Typography>
        <div className="question-card-actions">
          <CopyToClipboard text={question.question} onCopy={handleCopy}>
            <Tooltip title="Copy">
              <IconButton>
                <ContentCopyIcon sx={{ color: 'primary.main' }} /> {/* Apply a color from the theme */}
              </IconButton>
            </Tooltip>
          </CopyToClipboard>
          <IconButton onClick={onEdit}>
            <EditIcon sx={{ color: 'warning.main' }} /> {/* Apply a color from the theme */}
          </IconButton>
          <IconButton onClick={onDelete}>
            <DeleteIcon sx={{ color: 'error.main' }} /> {/* Apply a color from the theme */}
          </IconButton>
        </div>
      </CardContent>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Question copied to clipboard"
      />
    </Card>
  );
};

export default QuestionCard;
