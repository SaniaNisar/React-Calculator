import React from 'react';
import Calculator from './Calculator';

function App() {
  const messages = ['React', 'Re: React', 'Re: Re: React'];
  return (
    <div className="App">
      <h2>Sania's Calculator is here to solve your problems</h2>
      <Calculator/>
    </div>
  );
}
export default App;