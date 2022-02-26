import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
        <h1>
          Dorm Quiz
        </h1>
        <div>{RenderQuestion("Test question", ["Test answer"])}</div>
    </div>
  );
}

function RenderQuestion(question, answers){
  const list = []
    for (const [i, answer] of answers.entries()) {
      list.push(<div><input type="radio" value={answer}/>{answer}</div>)
    }

    return (<div><div>{question}</div>
            <div>{list}</div></div>
      );
}

export default App;
