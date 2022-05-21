import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  var [a,b] = [10, 100];
  let [title, ch_title]=  useState('남자 코트 추천');
  let [title1, ch_title1]=  useState('여자 코트 추천');
  let posts = "강남 고기 맛집";
  return (
    <div className="App">
          <div className = "black-nav">
            <div>개발 Blog</div>
          </div>
        <div className = "list">
          <h3> { title }  </h3>
          <p>2월 17일 발행</p>
          <hr/>
        </div>
    </div>
  );
}

export default App;

