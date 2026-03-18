import React from 'react';

import AppRoutes from './routes/Routes';
import './styles/main.scss';
import Header from './components/Header/Header';
import ProgressBar from './components/ProgressBar/ProgressBar';
import BackToTop from './components/BackToTop/BackToTop';
import Footer from './components/Footer/Footer';


function App() {
  return (
   <>
    <Header />
    <ProgressBar />
    <main className="content">
      <AppRoutes />
    </main>
    <Footer />
    <BackToTop />
   </> 
  )
}

export default App;
