import React from 'react';

import Header from './Header';
import Intro from './Intro';
import Problem from './Problem';
import Solution from './Solution';
import HowItWorks from './HowItWorks';
import Impact from './Impact';
import Social from './Social';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Problem />
      <Solution />
      <HowItWorks />
      <Impact />
      <Social />
    </div>
  );
}

export default App;
