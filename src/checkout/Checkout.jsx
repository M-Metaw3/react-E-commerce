import React from 'react';
import { useSelector ,useDispatch  } from 'react-redux'
import StarIcon from '@mui/icons-material/Star';
 
const Checkout = ()=>{
    const counter = useSelector((state)=>state.counter)
    const product = useSelector((state)=>state.products)
    const totalprice = useSelector((state)=>state.totalPrice)

    
    

    const card = product.map((el)=>(
<>
        <div >
            <img src={el.image} width="100px"/>
            <h6>{el.name}</h6>
            <h4>{el.price}</h4>
           
            <p>{Array(Math.round(el. rating.rate)).fill().map(()=>(<span> <StarIcon style={{color:"yellow"}}/> </span>))} </p>
    
        </div>
        </>
    ))
        
    return(  
        <div>
<h1>total price is {totalprice.toFixed(2)}</h1>
          {card}
        
        
        
        </div>
    )


  
 
    
    
}
    
    
    export default Checkout;