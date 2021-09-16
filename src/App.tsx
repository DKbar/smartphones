import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SmartphonesContainer from './components/Smartphones/SmartphonesContainer';


function App() {
  return (
    <div className="app-wrapper">
    <Header />
    <SmartphonesContainer />
    </div>
  );
}

export default App;
