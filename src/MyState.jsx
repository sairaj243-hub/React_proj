import { useState } from "react";

function MyState(){
    const[num,setnum]=useState(0)
    return(
        <>
        <h3>{num}</h3>
        <button onClick={()=>setnum(num+1)}>tapa tap</button>
        </>
    )

}
export default MyState;