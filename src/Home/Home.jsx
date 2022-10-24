import React from 'react';
import {  Route ,Routes ,BrowserRouter } from "react-router-dom";

import Product from '../Product/Product';
import './Home.css'
import { Component } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';

 class Home extends Component  {
  



state = {
    pro:[],

}




 
      

    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> this.setState({pro:json})  )
   
         
       
    }
    
    
    
    
    render(){


        console.log(this.x)



return (
    <div className='con'>



    {/* <img className='image' src="https://fifreedomtoday.com/wp-content/uploads/2022/10/showing-cart-trolley-shopping-online-sign-graphic_53876-133967-1.jpeg" alt="" /> */}



    <div className='container'>


{
    <Product name={this.state.pro}/>
}






    </div>
    </div>
)


 }
}
export default Home;
