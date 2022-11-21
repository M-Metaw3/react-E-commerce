import React from 'react';
import { useSelector ,useDispatch  } from 'react-redux'
import StarIcon from '@mui/icons-material/Star';
 
const Checkout = ()=>{
    const counter = useSelector((state)=>state.counter)
    const product = useSelector((state)=>state.products)
    const tota = useSelector((state)=>state.tot)

    const totalprice = useSelector((state)=>state.totalPrice)
    const dele= useDispatch()


const  delet = (i)=>{
 
    const del ={
        type:"dele",
        payload:i,
    };
    dele(del)
    }


    const  inp = (e,i)=>{

        console.log(e.target.value)
 const    result= product[i].price * e.target.value

 
        const inpu ={
            type:"inpu",
            payload:result,
        };
        dele(inpu)
        return result;
        }
    

    const card = product.map((el,i)=>(
<>
        <div >
         
            <input type="number" onChange={(e)=>inp(e,i)} />
            <img src={el.image} width="100px"/>
            <h6>{el.name}</h6>
            <h4>{el.price}</h4>
           
            <p>{Array(Math.round(el. rating.rate)).fill().map(()=>(<span> <StarIcon style={{color:"yellow"}}/> </span>))} </p>
    <button onClick={()=>delet(i)}> delete</button>
        </div>
        </>
    ))
        
    return(  
        <div>
              
<h1 >total price is <span style={{color:"blue"}}>{totalprice.toFixed(2)}</span></h1>
          {card}
        
        
        
        </div>
    )


  
 
    
    
}
    
    
    export default Checkout;