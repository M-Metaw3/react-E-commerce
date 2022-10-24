import React from 'react';
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import { useSelector, useDispatch } from 'react-redux'
 const Product= ({name})=>{
     const st =  useSelector((state)=>state.search)


     const product = useSelector((state)=>state.products)

    
     const dispatch = useDispatch()
    const addtocart=( i)=>{
        console.log (i)
      
            const act ={
                type:"add to cart",
                peload:{
                   name:name[i].title,
                   price:name[i].price,
                   rating:name[i].rating,
                   image:name[i].image,
                   id:name[i].id,

                   




                
            

                }
                
            }
            dispatch(act)
           

                } 
            
if (st.length==0) {
    return (
        
        <div className='container'>
            {    name.map((el,idx)=>(
         
       <div className='card'>
   
       <img  src={el.image} alt="" />
       <h6>{el.title}</h6>
       <div>{Array(Math.round( el.rating.rate)).fill().map((el)=>(<span> <StarIcon style={{color:"yellow"}}/> </span>))} </div>
       <h4>{el.price + "  L E "} </h4>
      
       <button onClick={()=>addtocart(idx)}>add to cart</button>
   
   
   </div>
         
   
            ))}
   </div>
   
   )
    
}

else  {
     const a= name.filter((el)=> el.title.toLowerCase().includes(st) )
    return (
   <div className='container'>
{a.map((e,idx)=>(



<div className='card'>
   
<img  src={e.image} alt="" />
<h6>{e.title}</h6>
<div>{Array(Math.round( e.rating.rate)).fill().map((el)=>(<span> <StarIcon style={{color:"yellow"}}/> </span>))} </div>
<h4>{e.price + "  L E "} </h4>

<button onClick={()=>addtocart(idx)}>add to cart</button>


</div>












))}
    
   </div>

)
}



 }
export default  Product;