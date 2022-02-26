import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('An answer was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (<div>
      <h1>
          Dorm Quiz
        </h1>
      <div id = "question">Question</div><br></br>
      <form onSubmit={this.handleSubmit}>
        <input type = "radio" name = "interest_value" id = "interest1" value="Highly Interested" onChange={this.handleChange}/>
        <label for="interest1">Highly Interested</label><br></br>
        <input type = "radio" name = "interest_value" id = "interest2" value="Somewhat Interested" onChange={this.handleChange}/>
        <label for="interest2">Somewhat Interested</label><br></br>
        <input type = "radio" name = "interest_value" id = "interest3" value="Neutral" onChange={this.handleChange}/>
        <label for="interest3">Neutral</label><br></br>
        <input type = "radio" name = "interest_value"  id = "interest4" value="Not Very Interested" onChange={this.handleChange}/>
        <label for="interest4">Not Very Interested</label><br></br>
        <input type = "radio" name = "interest_value"  id = "interest5" value="No Interested" onChange={this.handleChange}/>
        <label for="interest5">No Interested</label><br></br>
        <input type="submit" value="Submit"/>
        </form></div>
    );
  }
}

export default App;
