import React  from 'react';
import './Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SearchIcon from '@mui/icons-material/Search';
import {  NavLink } from "react-router-dom";
import { useSelector ,useDispatch  } from 'react-redux'
import { render } from '@testing-library/react';
import { useState } from 'react';

const Header = ()=>{

const counter = useSelector((state)=>state.counter)
const car = useSelector((state)=>state.mm)
const dispatch = useDispatch()
const [setaa,setname]=useState("")
    // console.log(cart)
    // console.log(car)

 const   texthandeler=(e)=>{
    setname(e.target.value)
    // console.log(setaa)

   const  serch={
    type:"search",
    payload:setaa

    }
    dispatch(serch)
    }
  


return(
    <div className='app-header'>
        <div className='nav-logo'>

        <NavLink to={"/"}><HomeWorkIcon style={{fontSize:"40px" }}/>  </NavLink>

        </div>

<input type="text"  onChange={(event)=>texthandeler(event)}/>

 <div className='nav-search'>
 <SearchIcon/> 
    {/* <input type="text"  /> */}

    {/* <p>{setaa}</p> */}

 </div>


 <div className='nav-sig'>
    <div className='singin'>
<span>hello</span>

<h4 > <a>singin</a> </h4>

    </div>
    <div className='siginup'>
<span>hello</span>
<h4> singin</h4>
        
</div>
 </div>
  <NavLink to={"/Checkout"}><div>
    <h1 style={{fontSize:"30px"}} ><ShoppingCartIcon/></h1>
    <strong>{counter}</strong>
 </div></NavLink>


    </div>
)


}


export default Header;