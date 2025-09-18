import React, { useState } from 'react'
import MainPage from './pages/MainPage'
import HealthCheck from './pages/HealthCheck'
import Exercises from './pages/Exercises'
import Accessories from './pages/Accessories'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('main')

  const renderPage = () => {
    switch (currentPage) {
      case 'main':
        return <MainPage onNavigate={setCurrentPage} />
      case 'health':
        return <HealthCheck onNavigate={setCurrentPage} />
      case 'exercises':
        return <Exercises onNavigate={setCurrentPage} />
      case 'accessories':
        return <Accessories onNavigate={setCurrentPage} />
      default:
        return <MainPage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="app">
      {renderPage()}
    </div>
  )
}

export default App
