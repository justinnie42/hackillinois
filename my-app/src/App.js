import logo from './logo.svg';
import './App.css';
import React from 'react';
import questions from './questions.js';
import dorms from './dorms.js';

class App extends React.Component{
    changeScores = (() => {
        console.log(dorms);
        console.log(questions);
    for(let i = 0; i < dorms.length; i++){
        console.log(dorms[i].score);
        for(let j = 0; j < questions[i].pro.length; j++){
            console.log(dorms[i].dorm);
            console.log(questions[i].pro[j]);
            if(dorms[i].dorm == questions[i].pro[j].dorm){
                dorms[i].score += scoreAdder;
            }
        }
        for(let k = 0; k < questions[i].con.length; k++){
            if(dorms[i].dorm == questions[i].con[k].dorm){
                dorms[i].score -= scoreAdder;
            }
        }
    }
    console.log(dorms[0].score);
})
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    switch (this.state.value) {
        case "Highly Interested":
            scoreAdder = 2;
        break;
        case "Somewhat Interested":
            scoreAdder = 1;
        break;
        case "Neutral":
            scoreAdder = 0;
        break;
        case "Not Very Interested":
            scoreAdder = -1;
        break;
        case "Not Interested":
            scoreAdder = -2;
        break;
        default:
            console.log("error");
    }
    this.changeScores();
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
            <input type="submit"  onClick = {nextQuestion} value="Submit"/>
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
let scoreAdder; //range from -2 to 2
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
    scoreAdder = 0;
  }
function begin(){
    startQuiz();
    nextQuestion();
}
/*function next(){
    changeScores();
    nextQuestion();
}*/
export default App;