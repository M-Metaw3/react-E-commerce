import { act } from '@testing-library/react'
import {createStore} from 'redux'

let initstate={
    products:[],
    counter:0,
   totalPrice:0,
   search:""


}
 const reducer =( state = initstate, action)=>{

    if(action.type === "search" ){
        return {...state ,search: action.payload  }


    }
     
     if(action.type === "add to cart" ){
         console.log(action.peload.id)
     


         state.products.push(action.peload)
        //  state.totalPrice.push(action.peload.rating)
        state.totalPrice+=action.peload.price
        //  state.products.map((el)=>{ state.totalPrice+=el.rating})
         console.log(state.totalPrice)
         console.log(state.products)

       
            
        return {...state ,counter: state.products.length   }
  
            


    }
    return state
}


 


   



 const store = createStore(reducer)
  export default store;