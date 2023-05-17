import React, {createElement as e } from 'react';


function App() {
  // return (
  //   <h1> React</h1>
  //   )
  return e('div', {className:'container'}, [
    e('h1', { className: 'font-bold' }, 'Test JSX'),
    e('button', {className:''}, 'Click me')
  ]);
  
}

export default App;
