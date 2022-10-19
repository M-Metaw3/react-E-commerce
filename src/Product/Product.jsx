import React from 'react';
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
 const Product= ({img , rating})=>{

return (

    <div>
<div className='card'>

    <img  src={img} alt="" />
    <h4>title</h4>
    <h4>price </h4>
    <div>{Array(rating).fill().map(()=>(<span> <StarIcon style={{color:"yellow"}}/> </span>))} </div>
    <button>add to cart</button>






</div>


    </div>
)


 }
export default  Product;