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
            if(dorms[i].dorm === questions[i].pro[j].dorm){
                dorms[i].score += scoreAdder;
            }
        }
        for(let k = 0; k < questions[i].con.length; k++){
            if(dorms[i].dorm === questions[i].con[k].dorm){
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
  resetButtons(){
    var ele = document.getElementsByName("interest_value");
    for(var i=0;i<ele.length;i++)
      ele[i].checked = false;
    this.setState({value: ""});
  }
  showError(){
    const error = document.getElementById("no submit error");
    error.classList.remove("hide");
  }
  hideError(){
    const error = document.getElementById("no submit error");
    error.classList.add("hide");
  }
  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    event.preventDefault();
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
            this.showError();
            return;
    }
    this.changeScores();
    this.resetButtons();
    nextQuestion();
    this.hideError();
    //alert('An answer was submitted: ' + this.state.value);
  }
  render() {
    return (
        <div class = "Container">
        <link href = "App.css" rel = "stylesheet"/>
        <h1 className="header">
            University of Illinois at Urbana-Champaign Dorm Questionnaire
        </h1>
        <div id = "results-screen" class = "hide">
          <h2>You belong at:</h2>
          <h2 id = "dormName">ISR (placeholder)</h2>
          <img id="result-image" src=""/>
        </div>
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
            <input type="submit" value="Submit"/>
            <div id = "no submit error" style={{ color: 'red' }} class = "hide">Please submit an answer, then try again.</div>
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
  if(questionIndex === questions.length){
    const results = document.getElementById("results-screen");
    const quizContainer = document.getElementById("quiz-container");
    const finalDorm = document.getElementById("dormName");
    const imageFile = document.getElementById("result-image");

    const winner = calculateScore();
    finalDorm.innerText = winner.dorm;
    imageFile.src = winner.image;

    quizContainer.classList.add("hide");
    results.classList.remove("hide");
  } else {
    console.log(questions[questionIndex]);
    showQuestion(questions[questionIndex]);
    questionIndex++;
  }
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
function calculateScore(){
    let j = 0;
    for(let i = 0; i<dorms.length;i++){
        if((dorms[i].score > dorms[j].score) || (dorms[i].score === dorms[j].score && Math.random() < 0.5)){
            j = i;
        }
    }
    return dorms[j];
}
export default App;