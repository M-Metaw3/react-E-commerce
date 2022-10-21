import React from 'react';
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import { useSelector, useDispatch } from 'react-redux'
 const Product= ({img , rating , name , price})=>{
     const st =  useSelector((state)=>state)
     const dispatch = useDispatch()


     
    const addtocart=()=>{
            const act ={
                type:"add to cart",
                peload:{
                    name:name,
                    price :rating,
                    rating :price, 
                }
            

                }
                dispatch(act)

                } 
            


return (
    <div>
<div className='card'>

    <img  src={img} alt="" />
    <h4>{name}</h4>
    <h4>{price +" L E "} </h4>
    <div>{Array(rating).fill().map(()=>(<span> <StarIcon style={{color:"yellow"}}/> </span>))} </div>
    <button onClick={addtocart}>add to cart</button>






</div>


    </div>
)


 }
export default  Product;