// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. The state is an instance of React Component Class that can be defined as an object of a set of observable properties that control the behavior of the component.
    // In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. this.setState() enqueues changes to the component state and tells React that this component and its children
    // need to be re-rendered with the updated state. In this case, the object "userInput" is being updated in response
    // to the method named "robot" here.
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3. "userInput" is being destructured out of the state object by setting it equal to "this.state". This is being done
    // so that the new variable "userInput" can be manipulated inside "return".
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. The attribute "onChange" is capturing the changes in the input and saving in the "robot" method */}  */}
          onChange={ this.robot }
          {/* 5. This is taking the value from an input and saving it in the state key "userInput"  !!! */}
          value={ userInput }
        />

        <div>
          {/* 6. Calling a child component named "GoodRobot" */}
          <GoodRobot
            {/* 7. Shouldn't this be: "userInput = {this.state.userInput}" instead?
            Whatever is typed in the "userInput" gets passed on to "GoodRobot" component as props */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. The <div> allows two or more jsx elements to be returned on the browser.
      <div>
        <h3>Good Robot</h3>
        {/* 9. the userInput object information is passed on from parent to child component as props */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. "export default" is used to export a single class, function or primitive from a script file. This means that 
// all that informationcd rendered inside GoodRobot component will be passed on to the main component.
export default GoodRobot
