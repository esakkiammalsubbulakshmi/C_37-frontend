import React,{useState}from 'react'
function  FunctionalState()
{
    const[count,setCount]=useState(0);

    return(
        <div>
            <h1>you clicked{count}  times</h1>
            <button onClick={()=>setCount(count+1)}>change click  </button>
        </div>
    )
}
export  default  FunctionalState;
