import React, { useState } from 'react'
import MainPage from './pages/MainPage'
import HealthCheck from './pages/HealthCheck'
import Exercises from './pages/Exercises'
import Accessories from './pages/Accessories'
import './App.css'

import ExerciseDetail from './pages/ExerciseDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const [pageContext, setPageContext] = useState(null);
  const [gender, setGender] = useState('male');

  const handleNavigate = (page, context = null) => {
    setCurrentPage(page);
    setPageContext(context);
  };

  const handleGenderChange = (newGender) => {
    setGender(newGender);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'main':
        return <MainPage onNavigate={handleNavigate} onGenderChange={handleGenderChange} gender={gender} />;
      case 'health':
        return <HealthCheck onNavigate={handleNavigate} gender={gender} />;
      case 'exercises':
        return <Exercises onNavigate={handleNavigate} />;
      case 'exerciseDetail':
        return <ExerciseDetail onNavigate={handleNavigate} exerciseId={pageContext?.exerciseId} />;
      case 'accessories':
        return <Accessories onNavigate={handleNavigate} />;
      default:
        return <MainPage onNavigate={handleNavigate} onGenderChange={handleGenderChange} gender={gender} />;
    }
  };

  return (
    <div className="app">
      {renderPage()}
    </div>
  );
}

export default App
