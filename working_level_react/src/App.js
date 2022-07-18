import './App.css';
import PropsBoolean from './R019_PropsBoolean'
import React from 'react';


function App() {
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <PropsBoolean BooleanTrueFalse = {false} />
      <PropsBoolean BooleanTrueFalse />
    </div>
  );
}

export default App;
