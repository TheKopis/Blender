import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Haircuts from './components/Haircuts';
import Footer from './components/Footer';
import './App.css'; // Main CSS file for global styles

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Haircuts />
      <Footer />
    </div>
  );
}

export default App;
