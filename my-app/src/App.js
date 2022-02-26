import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
        <h1>
          Dorm Quiz
        </h1>
        <form>
        <input type = "radio" id = "interest1"/>
        <label for="interest1">Highly Interested</label><br></br>
        <input type = "radio" id = "interest2"/>
        <label for="interest2">Somewhat Interested</label><br></br>
        <input type = "radio" id = "interest3"/>
        <label for="interest3">Neutral</label><br></br>
        <input type = "radio" id = "interest4"/>
        <label for="interest4">Not Very Interested</label><br></br>
        <input type = "radio" id = "interest5"/>
        <label for="interest5">No Interested</label><br></br>
        <input type="button" value="Submit"/>
        </form>
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
