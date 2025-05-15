import React, { useState } from 'react';
import './App.css'; // Pastikan Anda memiliki file CSS untuk styling

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      alert('Login Berhasil!');
    } else {
      alert('Username atau Password salah!');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login Form</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="login-input"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
