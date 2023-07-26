// function Nature() {
//     return(
//         <div>
//             <h3>KAshmir</h3>
//             <img src="https://th.bing.com/th/id/OIP.Y3nclu0XmEv9IruyEeTQ9AHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.5" />
//         </div>
//     );
// }

// export default Nature;

// two function 
// function Image() {
//     return <img src="https://th.bing.com/th/id/OIP.Y3nclu0XmEv9IruyEeTQ9AHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.5"/>
    
// }
// function Nature() {
//     return(
//         <div>
//             <h3>KAshmir</h3>
//             <Image />
         

//         </div>
//     )
    
// }
// export default Nature;



//node.js module

// export function Image() {
//     return <img src="https://th.bing.com/th/id/OIP.Y3nclu0XmEv9IruyEeTQ9AHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.5"/>
    
// }
//  export function Nature() {
//     return(
//         <div>
//             <h3>KAshmir</h3>
//             <Image />
         

//         </div>
//     )
    
// }


// default and export are both 

export function Image() {
    return <img src="https://th.bing.com/th/id/OIP.Y3nclu0XmEv9IruyEeTQ9AHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.5"/>
    
}
function Nature() {
    return(
        <div>
            <h3>KAshmir</h3>
            <Image />
         

        </div>
    )
    
}
export default Nature;