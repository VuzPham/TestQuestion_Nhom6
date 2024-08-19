import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './styles.css'; // Import the styles

const QuestionCard = ({ question, onDelete, onEdit }) => {
  return (
    <Card className="question-card">
      <CardContent className="question-card-content">
        <Typography variant="h6" className="question-card-text">{question.text}</Typography>
        <div className="question-card-actions">
          <IconButton onClick={onEdit}><EditIcon /></IconButton>
          <IconButton onClick={onDelete}><DeleteIcon /></IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
