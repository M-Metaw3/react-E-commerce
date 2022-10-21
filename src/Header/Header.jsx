import React from 'react';
import './Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SearchIcon from '@mui/icons-material/Search';
import {  NavLink } from "react-router-dom";
import { useSelector ,useDispatch  } from 'react-redux'
import { render } from '@testing-library/react';

const Header = ()=>{

const counter = useSelector((state)=>state.counter)
const car = useSelector((state)=>state.mm)


    // console.log(cart)
    // console.log(car)


  


return(
    <div className='app-header'>
        <div className='nav-logo'>

        <NavLink to={"/"}><HomeWorkIcon style={{fontSize:"40px" }}/>  </NavLink>

        </div>



 <div className='nav-search'>
    <input type="text" />
 <SearchIcon/> 

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