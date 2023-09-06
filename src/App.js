import React, { useState } from 'react';
import Navbar from './Navbar';
import LogIn from './LogIn';
import Register from './Register';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(true);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  }

  const handleBackToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  }

  return (
    <div className="App">
      <Navbar />
      {showRegister && <Register onLoginClick={handleLoginClick} />}
      {showLogin && <LogIn onLoginClick={handleBackToRegister} />}

    </div>
  );
}

export default App;
