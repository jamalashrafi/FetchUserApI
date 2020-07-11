import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './containers/HomeScreen.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">K12 Front-End Interview</div>
        </header>

        <main className="main">
          <div className="content">
            <Route exact={true} path="/" component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
