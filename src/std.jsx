
import { Component } from 'react';


export default class Std extends Component{

state ={
    name:"",
    age:"",
}
  oninp=(e)=>{

console.log(e.target.value)

this.setState({[e.target.name]:e.target.value})
console.log(this.state)

 }



render(){
 
 return <div>
<label htmlFor="a1">name</label>
    <input id='a1' name='name' onChange={this.oninp} type="text" />
    <label htmlFor="a2"> age</label>
    <input name='age' onChange={this.oninp} id='a2' type="text" />
    <button onClick={()=>this.props.submit(this.state)}  >submit </button>
</div>


}



} 