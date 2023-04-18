import { createContext , useState } from "react"

const context_data = createContext()

const Context = ({ children    }) => {

    const [searchValue, setSearchValue] = useState("")

    const [searchMovie , setSearchMovie] = useState([])

    const searchFetchData = async () =>{
        try {
          const res = await fetch(`
           https://api.themoviedb.org/3/search/movie?api_key=bf96cf0d2ae830a7b789cf38ce350462&language=en-US&query=${searchValue}&page=1&include_adult=false
           `)
          const data = await res.json();
          console.log(data.results)
          setSearchMovie(data.results)
        } catch (error) {
          console.log(error)
        }
        }
    return(
        <context_data.Provider value={{searchValue , setSearchValue , searchFetchData , searchMovie }}>
            {children}
        </context_data.Provider>
    )
}

export  {Context , context_data}