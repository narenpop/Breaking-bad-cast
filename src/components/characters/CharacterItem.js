import React from "react"

const CharacterItem =({items})=>{
    return(
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                   <img src={items.img} alt=""/>
                </div>
                <div className="card-back">
                <h1>{items.name}</h1>
                    <ul>
                        <li><strong>Actor name: </strong> {items.name}</li>
                        <li><strong>NickName:  </strong>{items.nickname}</li>
                        <li><strong>Occupation: </strong>{items.occupation}</li>
                        <li><strong>Portrayed: </strong>{items.portrayed}</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default CharacterItem