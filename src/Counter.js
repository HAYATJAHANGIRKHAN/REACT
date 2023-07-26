import { useState } from 'react';

function Counter() {
   const[x, setX] =useState(0)
   const[y, setY] =useState(0)
    return(
        <>
        count X:{x}
        <button onClick={()=> setX(x+1)}>inc</button>
        <button onClick={()=> setX(x-1)}>dec</button>
        <br/>

        count Y:{y}
        <button onClick={()=> setY(y+1)}>inc</button>
        <button onClick={()=> setY(y-1)}>dec</button>
        </>
    )
}
export default Counter;