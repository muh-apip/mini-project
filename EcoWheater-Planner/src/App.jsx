import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Login from './components/Login';
import ActivityPlanner from './components/ActivityPlanner';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && <Header />} {/* Menampilkan Header hanya jika bukan /login */}
      
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/activityplanner" element={<ActivityPlanner />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      {location.pathname !== '/login' && <Footer />} {/* Menampilkan Footer hanya jika bukan /login */}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
