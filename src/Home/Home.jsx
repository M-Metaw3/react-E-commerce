import React from 'react';
import Product from '../Product/Product';
import './Home.css'
import { Component } from "react";

 class Home extends Component  {

    componentDidMount(){

        
    }
render(){
return (
    <div className='con'>


    <img className='image' src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />



    <div className='container'>
<Product img="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600" rating={5} name={"a"} price={4000 }/>
<Product img="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600" rating={3} name={"z"} price={1027}/>
<Product img="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=600" rating={4} name={"y"} price={8700} />
<Product img="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600" rating={1} name={"x"} price={2400}/>
<Product img="https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=600" rating={2} name={"t"} price={2000}/>








    </div>
    </div>
)


 }
}
export default Home;
