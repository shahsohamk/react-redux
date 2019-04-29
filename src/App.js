import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import {Login} from './components/Login'
import {Footer} from './components/Footer'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
      <Header title="React + Redux Training"></Header>
      <Login portal="Verizon"></Login>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </div>
  );
}

export default App;
