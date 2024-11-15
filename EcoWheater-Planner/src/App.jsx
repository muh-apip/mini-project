import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Login from './components/Login';
import ActivityPlanner from './components/ActivityPlanner';
import EnergyTracker from './components/EnergyTracker';
import ChatWheaterBot from './components/ChatWheaterBot';

// ProtectedRoute component for protected routes
function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  const location = useLocation();  // Use the hook inside the component
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedLoginStatus = localStorage.getItem('isLoggedIn');
    if (savedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <>
      {/* Pass isLoggedIn and onLogout to Header */}
      {location.pathname !== '/login' && <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
      
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/activityplanner" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <ActivityPlanner />
          </ProtectedRoute>
        } />
        <Route path="/energytracker" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <EnergyTracker />
          </ProtectedRoute>
        } />
        <Route path="/chatwheaterbot" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <ChatWheaterBot />
          </ProtectedRoute>
        } />
      </Routes>
      
      {location.pathname !== '/login' && <Footer />}
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
