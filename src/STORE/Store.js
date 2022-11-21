import { act } from '@testing-library/react'
import {createStore} from 'redux'

let initstate={
    products:[],
    counter:0,
   totalPrice:0,
   search:"",
   tot:0


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
    if(action.type === "dele" ){
        // console.log(state.products[action.payload].price)
       

        // return state.products.splice(splice(action.payload,1),1)
        return {...state , products :state.products.filter((el,ind)=>ind!=action.payload,1),totalPrice: state.totalPrice-state.products[action.payload].price,counter: state.products.length -1}
    }


    if(action.type === "inpu" ){

        console.log(action.payload)
        return {...state ,tot: state.tot+action.payload}

    }



    return state
}


 


   



 const store = createStore(reducer)
  export default store;