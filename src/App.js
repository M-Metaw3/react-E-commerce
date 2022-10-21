import { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import {  Route ,Routes ,BrowserRouter } from "react-router-dom";
import Checkout from "./checkout/Checkout";
import Error from "./Error/Error";
class App extends Component {

  componentDidMount(){

        
  }


  render() {
    return (
      <div className="App">
<BrowserRouter>
 <Header />
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/Checkout" element={<Checkout />}/>
<Route path="*" element={<Error />}/>


 



 </Routes>
 </BrowserRouter>
      </div>
    );
  }
}
export default App;
