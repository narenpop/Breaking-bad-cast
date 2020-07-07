import React,{useState,useEffect} from "react"
import Header from "./components/Header"
import CharacterGrid from "./components/characters/CharacterGrid"
import "./App.css"
import axios from 'axios'
import Search from "./components/Search"

function App (){
  const [character,getCharacter]=useState([])
  const [Loading,isLoading]=useState(true)
  const [query,getQuery]=useState('')
  useEffect(()=>{
   const fetchElements= async ()=>{
     const result= await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
   getCharacter(result.data)
   isLoading(false)
  }
  fetchElements()
  },[query])
  console.log(character)

  return(
    <div className="container">
      <Header/>
      <Search getQuery={(q)=>getQuery(q)}/>
      <CharacterGrid character={character} Loading={Loading}/>
      
    </div>
  )
}
export default App