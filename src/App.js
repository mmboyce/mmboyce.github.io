import React, { useEffect } from 'react'

import { Redirect, BrowserRouter } from 'react-router-dom'
import './App.css';

function App() {
  useEffect(() => {
    window.location.href = "https://mmboyce.com";  
  })
  
  return (
    <BrowserRouter>
      <div className="App">
        <p>Redirecting to <a href="https://mmboyce.com">https://mmboyce.com</a></p>
        <Redirect to="https://mmboyce.com" />
      </div>
    </BrowserRouter>
  );
}

export default App;
