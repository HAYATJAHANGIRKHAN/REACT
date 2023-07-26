

function Counter() {
    let x=0;
    return(
        <>
        count:{x}
        <button onClick={()=> x+=1}>inc</button>
        <button onClick={()=> x-=1}>dec</button>
        </>
    )
}
export default Counter;