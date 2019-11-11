import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const questions = { 
  "results":[ 
     { 
        "id":1,
        "question":"What food makes up nearly all (around 99%) of a Giant Panda’s diet?",
        "option_1":"False",
        "option_2":"True",
        "option_3":"False",
        "option_4":"False"
     },
     { 
        "id":2,
        "question":"What is the name of the phobia that involves an abnormal fear of spiders?",
        "option_1":"False",
        "option_2":"False",
        "option_3":"True",
        "option_4":"False"
     },
     { 
        "id":3,
        "question":"What is the largest type of ‘big cat’ in the world?",
        "option_1":"True",
        "option_2":"False",
        "option_3":"False",
        "option_4":"False"
     },
     { 
        "id":4,
        "question":"Bees are found on every continent of earth except for one, which is it?",
        "option_1":"False",
        "option_2":"True",
        "option_3":"False",
        "option_4":"False"
     },
     { 
        "id":5,
        "question":"Groups of lions are known as what?",
        "option_1":"False",
        "option_2":"False",
        "option_3":"False",
        "option_4":"True"
     }
  ]
}

let details = questions.results.map((item, index) => {
    return item;
})

class App extends Component {
   constructor(props){
      super(props);
      this.state = { 
         showResults: false,
         count: 0,
         question_1 : '',
         question_2 : '',
         question_3 : '',
         question_4 : '',
         question_5 : ''
      }
   }

   handlechange = (event) =>{
      this.setState({ [event.target.name] : event.target.value })
   }

   handlesubmit = (event) => {
         if (this.state.question_1 === 'True') {
            this.setState({count: this.state.count + 1})
         }
         if (this.state.question_2 === 'True') {
            this.setState({count: this.state.count + 1})
         }
         if (this.state.question_3 === 'True') {
            this.setState({count: this.state.count + 1})
         }
         if (this.state.question_4 === 'True') {
            this.setState({count: this.state.count + 1})
         }
         if (this.state.question_5 === 'True') {
            this.setState({count: this.state.count + 1})
         }
      event.preventDefault();
   }

   submitclick = () => {
      this.setState({ showResults: true })
   }

   resetclick = () => {
      this.setState({ 
         showResults: false,
         count: 0,
         question_1 : '',
         question_2 : '',
         question_3 : '',
         question_4 : '',
         question_5 : ''
      })
   }

  render() {
     console.log(this.state);
      return (
              <div>
                  <h1 className="header">Question and Answare Quiz</h1>
                  <div className="container">
                     <div className="row">
                        <div className="col-sm-12">
                           <form onSubmit={this.handlesubmit}>
                              <h5><strong>Question</strong> : {details[0].question}</h5>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_1" value={details[0].option_1} onChange={this.handlechange} />
                                    Option 1
                                 </label>
                              </div>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_1" value={details[0].option_2} onChange={this.handlechange} />
                                    Option 2
                                 </label>
                              </div>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_1" value={details[0].option_3} onChange={this.handlechange} />
                                    Option 3
                                 </label>
                              </div>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_1" value={details[0].option_4} onChange={this.handlechange} />
                                    Option 4
                                 </label>
                              </div>
                              <h5><strong>Question</strong> : {details[1].question}</h5>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_2" value={details[1].option_1} onChange={this.handlechange} />
                                    Option 1
                                 </label>
                              </div>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_2" value={details[1].option_2} onChange={this.handlechange} />
                                    Option 2
                                 </label>
                              </div>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_2" value={details[1].option_3} onChange={this.handlechange} />
                                    Option 3
                                 </label>
                              </div>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_2" value={details[1].option_4} onChange={this.handlechange} />
                                    Option 4
                                 </label>
                              </div>
                              <h5><strong>Question</strong> : {details[2].question}</h5>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_3" value={details[2].option_1} onChange={this.handlechange} />
                                    Option 1
                                 </label>
                              </div>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_3" value={details[2].option_2} onChange={this.handlechange} />
                                    Option 2
                                 </label>
                              </div>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_3" value={details[2].option_3} onChange={this.handlechange} />
                                    Option 3
                                 </label>
                              </div>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_3" value={details[2].option_4} onChange={this.handlechange} />
                                    Option 4
                                 </label>
                              </div>
                              <h5><strong>Question</strong> : {details[3].question}</h5>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_4" value={details[3].option_1} onChange={this.handlechange} />
                                    Option 1
                                 </label>
                              </div>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_4" value={details[3].option_2} onChange={this.handlechange} />
                                    Option 2
                                 </label>
                              </div>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_4" value={details[3].option_3} onChange={this.handlechange} />
                                    Option 3
                                 </label>
                              </div>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_4" value={details[3].option_4} onChange={this.handlechange} />
                                    Option 4
                                 </label>
                              </div>
                              <h5><strong>Question</strong> : {details[4].question}</h5>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_5" value={details[4].option_1} onChange={this.handlechange} />
                                    Option 1
                                 </label>
                              </div>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_5" value={details[4].option_2} onChange={this.handlechange} />
                                    Option 2
                                 </label>
                              </div>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_5" value={details[4].option_3} onChange={this.handlechange} />
                                    Option 3
                                 </label>
                              </div>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="question_5" value={details[4].option_4} onChange={this.handlechange} />
                                    Option 4
                                 </label>
                              </div>
                              <div className="button">
                                 { this.state.showResults ? <div className="app">Your correct answare: {this.state.count}</div> : null }
                                 <input type="submit" value="Submit" onClick={this.submitclick} hidden={this.state.showResults} />
                                 <input type="reset" value="Try Again" onClick={this.resetclick} hidden={!this.state.showResults} />
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
      )
    }
}

export default App;
