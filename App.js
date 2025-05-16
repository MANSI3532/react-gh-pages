import React from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Projects from './components/Project';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
