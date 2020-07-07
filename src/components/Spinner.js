import React from "react"
import spinner from "../components/characters//spinner.gif"
function Spinner(){
    return(
        <div>
            <img src={spinner} style={{width:'100px',margin: 'auto', display: 'block'}}/>
        </div>
    )
}
export default Spinner