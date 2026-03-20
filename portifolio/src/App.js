import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import './styles/main.scss';
import useScrollReveal from './utils/useScrollReveal';
import Header from './components/Header/Header';
import ProgressBar from './components/ProgressBar/ProgressBar';
import BackToTop from './components/BackToTop/BackToTop';
import Footer from './components/Footer/Footer';

function ScrollRevealWrapper() {
  useScrollReveal();
  return null;
}

function App() {
  return (
   <Router>
    <ScrollRevealWrapper />
    <Header />
    <ProgressBar />
    <main className="content">
      <AppRoutes />
    </main>
    <Footer />
    <BackToTop />
   </Router>
  )
}

export default App;
