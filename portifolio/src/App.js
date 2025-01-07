import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import './styles/main.scss';
import Header from './components/Header/Header';


function App() {
  return (
   <>
   <Header /> 
    <main className="content">
      <AppRoutes />
    </main>
   </> 
  )
}

export default App;
