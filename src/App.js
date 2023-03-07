import React from "react";
import { About, Footer, Header, Skill, Testimonial, Work } from './container'
import { Nav } from './components'
import './App.scss'


function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <About />
      <Work />
      <Skill />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
