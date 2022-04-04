import React, { useState } from 'react';
import { Element } from 'react-scroll'

import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import HowItWorks from './HowItWorks';
import Impact from './Impact';
import Intro from './Intro';
import Pricing from './Pricing';
import Problem from './Problem';
import Social from './Social';
import Solution from './Solution';
import Team from './Team';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleFormOpen() {
    setIsFormOpen(true);
  }

  function handleFormClose() {
    setIsFormOpen(false);
  }

  return (
    <div className='App'>
      <Header handleFormOpen={handleFormOpen}/>
      <Intro />

      <Element id='problem' name='problem'>
        <Problem />
      </Element>

      <Element id='solution' name='solution'>
        <Solution />
        <HowItWorks handleFormOpen={handleFormOpen}/>
      </Element>
      
 {/*
      <Element id='impact' name='impact'>
        <Impact />
      </Element>

      <Social />

      <Element id='pricing' name='pricing'>
        <Pricing  handleFormOpen={handleFormOpen}/>
      </Element>

      <Element id='team' name='team'>
        <Team />
      </Element>

      <Element id='contacts' name='contacts'>
        <Footer />
      </Element>

      <Form isFormOpen={isFormOpen} handleFormClose={handleFormClose}/> */}
    </div>
  );
}

export default App;
