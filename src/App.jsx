import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SmartphonesContainer from './components/Smartphones/SmartphonesContainer';
import SpecificationContainer from './components/Specifications/SpecificationContainer';

function App() {
  return (
    <div className="app-wrapper">
    <Header />
    <SmartphonesContainer />
{/*     <SpecificationContainer /> */}
    </div>
  );
}

export default App;
