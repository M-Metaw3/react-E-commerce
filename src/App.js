import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
import Image from "./images";
import Std from "./std";

import card from "./img/card2.jpeg";
import card2 from "./img/card1.jpeg";


class App extends Component {


   state = {
      student: [
  
      ],
      car:[card,card2]
    };

    submit=(w)=>{
      const ne = [...this.state.student]
  ne.push(w)
  this.setState({student:ne})
  console.log(this.state)
}

clear=()=>{
const ne = [...this.state.student]
ne.splice(0,ne.length)
  this.setState({student:ne})

}


delete=(w)=>{
  const ne = [...this.state.student]
ne.splice(w)
this.setState({student:ne})
console.log(this.state)
}


  render() {
    console.log(this.state.student)
    return (
      <div className="App">
        
        <button  onClick={this.clear} >clear</button>
        <Std submit={this.submit}></Std>
        {this.state.student.map((std, index) => (
          <Image name={std.name} age={std.age} i={index} e={this.delete}  ></Image>
        ))}

      </div>
    );
  }
}
export default App;
