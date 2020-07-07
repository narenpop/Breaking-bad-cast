import React from "react"
import Spinner from "../Spinner"
import CharacterItem from "./CharacterItem"

function CharacterGrid({character,Loading}){
    return(
        Loading ? <Spinner/>:<section className="cards">
        {character.map(items=> (
            <CharacterItem key={items.char_id} items={items}></CharacterItem>
        ))}
           </section>)
}
export default CharacterGrid