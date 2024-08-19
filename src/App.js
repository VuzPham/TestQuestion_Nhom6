import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes'; // Update this path based on your project structure
import { DefaultLayout } from '~/components/Layout'; // Update this path based on your project structure
import QuestionsList from '~/components/QuestionForm/QuestionsList'; // Import the QuestionsList component

function App() {
  return (
    <Router>
      <div className="App">
        <QuestionsList />
      </div>
    </Router>
  );
}


export default App;
