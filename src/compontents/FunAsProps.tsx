import React, { useState } from 'react'


type childernProps={
    children : (count:number, increment:()=>void, decrement:()=>void)=>React.ReactNode
}

const FunAsProps = ({children}:childernProps) => {

    const[count, setCount] = useState(0);

    const increment =() => setCount((prev)=>prev+1);
    const decrement=()=>{
        if(count==0){
            alert("Already Count is Zero!");
            return;
        }
        setCount((prev)=>prev-1)
    }

    return (
    <div>
      {children(count,increment,decrement)}
    </div>
  )
}

export default FunAsProps
