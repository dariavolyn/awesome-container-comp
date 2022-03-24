import React from 'react';
import { Element } from 'react-scroll'

import Header from './Header';
import Intro from './Intro';
import Problem from './Problem';
import Solution from './Solution';
import HowItWorks from './HowItWorks';
import Impact from './Impact';
import Social from './Social';
import Footer from './Footer';
import Pricing from './Pricing';
import Team from './Team';

function App() {
  return (
    <div className='App'>
      <Header />
      <Intro />

      <Element id='problem' name='problem'>
        <Problem />
      </Element>

      <Element id='solution' name='solution'>
        <Solution />
        <HowItWorks />
      </Element>

      <Element id='impact' name='impact'>
        <Impact />
      </Element>

      <Social />

      <Element id='pricing' name='pricing'>
        <Pricing />
      </Element>

      <Element id='team' name='team'>
        <Team />
      </Element>

      <Element id='contacts' name='contacts'>
        <Footer />
      </Element>
    </div>
  );
}

export default App;
