import './App.css';


const Image =(props)=>{

    return (
        <div className="dv">
            <div className='aa' style={{width:"200px"}}>
            <h1>{props.name}</h1>
            <h6>{props.age}</h6>
            {/* <img src={props.img[props.i]} alt="" /> */}
    {/* <button onClick={()=>{ document.getElementsByClassName("aa")[props.i].style.display="none" ;props.e.splice(props.i) ;console.log(props.e)}}  >delete</button> */}
   

<button onClick={()=>props.e(props.i)}>delet</button>


            </div>

           
           
        </div>
    )
}
export default Image