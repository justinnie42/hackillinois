import logo from './logo.svg';
import './App.css';
import React from 'react';
import questions from './questions.js';

class App extends React.Component{
  questionIndex = null;
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.startQuiz = this.startQuiz.bind(this);
    /*this.nextQuestion = this.nextQuestion.bind(this);
    this.showQuestion = this.showQuestion.bind(this);*/
  }
  startQuiz(e){
    console.log("start");
    const startButton = document.getElementById('start-button');
    const quizContainer = document.getElementById('quiz-container');
    startButton.classList.add("hide");
    quizContainer.classList.remove("hide");
    questionIndex = 0;
  }
  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('An answer was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
        <div class = "Container">
        <link href = "App.css" rel = "stylesheet"/>
        <h1 className="header">
            Dorm Quiz
        </h1>
        <div id = "quiz-container" class = "hide">
            <div id = "question">Question</div><br></br>
            <form onSubmit={this.handleSubmit}>
            <input type = "radio" name = "interest_value" id = "interest1" value="Highly Interested" onChange={this.handleChange}/>
            <label for="interest1">Highly Interested</label><br></br>
            <input type = "radio" name = "interest_value" id = "interest2" value = "Somewhat Interested"onChange={this.handleChange}/>
            <label for="interest2">Somewhat Interested</label><br></br>
            <input type = "radio" name = "interest_value" id = "interest3" value="Neutral" onChange={this.handleChange}/>
            <label for="interest3">Neutral</label><br></br>
            <input type = "radio" name = "interest_value"  id = "interest4" value="Not Very Interested" onChange={this.handleChange}/>
            <label for="interest4">Not Very Interested</label><br></br>
            <input type = "radio" name = "interest_value"  id = "interest5" value="Not Interested" onChange={this.handleChange}/>
            <label for="interest5">Not Interested</label><br></br>
            <input type="button" class="nextButton" onClick = {nextQuestion} value="Submit"/>
            </form>
        </div>
        <div class = "start">
            <button id = "start-button" onClick = {begin}  class = "start-button">Start</button>
        </div>
    </div>
    );
  }
}
let questionIndex;
function nextQuestion(){
    console.log(questions[questionIndex]);
    showQuestion(questions[questionIndex]);
    questionIndex++;
  }
function showQuestion(question){
    const questionText = document.getElementById('question');
    questionText.innerText = question.question;
}
function startQuiz(){
    console.log("start");
    const startButton = document.getElementById('start-button');
    const quizContainer = document.getElementById('quiz-container');
    startButton.classList.add("hide");
    quizContainer.classList.remove("hide");
    questionIndex = 0;
  }
function begin(){
    startQuiz();
    nextQuestion();
}
export default App;
/*<link href = "App.css" rel = "stylesheet"/>
  function startQuiz(e){
    console.log("start");
    const startButton = document.getElementById('start-button');
    const quizContainer = document.getElementById('quiz-container');
    startButton.classList.add("hide");
    quizContainer.classList.remove("hide");
  }
  return (
    <div class = "Container">
        <h1>
            Dorm Quiz
        </h1>
        <div id = "quiz-container" class = "hide">
            <div id = "question">Question</div><br></br>
            <form>
            <input type = "radio" name = "interest_value" id = "interest1"/>
            <label for="interest1">Highly Interested</label><br></br>
            <input type = "radio" name = "interest_value" id = "interest2"/>
            <label for="interest2">Somewhat Interested</label><br></br>
            <input type = "radio" name = "interest_value" id = "interest3"/>
            <label for="interest3">Neutral</label><br></br>
            <input type = "radio" name = "interest_value"  id = "interest4"/>
            <label for="interest4">Not Very Interested</label><br></br>
            <input type = "radio" name = "interest_value"  id = "interest5"/>
            <label for="interest5">Not Interested</label><br></br>
            <input type="button" value="Submit"/>
            </form>
        </div>
        <div class = "start">
            <button id = "start-button" onClick = {startQuiz} class = "start-button">Start</button>
        </div>
    </div>
  );*/