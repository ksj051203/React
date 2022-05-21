/* esLint-disable */

import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  let [good, ch_good] = useState(0);
  let [title, ch_title]=  useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);

  function titleCh(){
    var newArray = [...title];
    newArray[0] = '여자 코트 추천';
    ch_title(newArray)
  }

  function align(){
    var Array = [...title]
    Array = ['강남 우동 맛집', '여자 코드 추천', '파이썬 독학'];
    ch_title(Array);
  }
  return (
    <div className="App">
          <div className = "black-nav">
            <div>개발 Blog</div>
          </div>
          <button onClick = { titleCh }>버튼</button>
          <button onClick = { align }>버튼</button>
        <div className = "list">
          <h3> { title[0] } <span onClick = { () => { ch_good(good + 1)}}>👍</span> {good} </h3>
          <div>2022.05.14 </div>
          <hr></hr>
          <h3> { title[1] } </h3>
          <div>2022.05.17 </div>
          <hr></hr>
          <h3> { title[2] } </h3>
          <div>2022.05.19 </div>
          <hr></hr>
        </div>
        <Modal />
    </div>
  );
}



function Modal(){
  return (
    <div className = "modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세 내용</p>
  </div>
  )
}

export default App;



