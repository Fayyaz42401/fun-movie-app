import Card from "../Card/Card"
import React,{  useContext} from 'react'
import { context_data } from "../../Context"


const SearchPage = () => {


  const inputValue = useContext(context_data)
  return (
    <>
    <Card title={inputValue.searchMovie.length === 0 ? "No Result Found" : `Searching Results for ${inputValue.searchValue}` } arr={inputValue.searchMovie}/>
    </>
      
    
  )
}

export default SearchPage