import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Haircuts from './components/Haircuts';
import Footer from './components/Footer';
import './App.css'; // Main CSS file for global styles
import ScrollSection from './components/ScrollSection';

function App() {
  return (
    <div className="App">

      <ScrollSection>
      <Header />
      </ScrollSection>


      <ScrollSection>
      <Haircuts />
      </ScrollSection>

      <ScrollSection>
      <Services />
      </ScrollSection>

      <ScrollSection>
      <About />
      </ScrollSection>


      <Footer />
    </div>
  );
}

export default App;
