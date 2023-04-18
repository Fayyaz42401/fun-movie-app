import Card from '../Card/Card'
import React, {useState ,useEffect } from 'react'




  const popular_url = "https://api.themoviedb.org/3/movie/popular?api_key=bf96cf0d2ae830a7b789cf38ce350462&language=en-US&page=1"



const Popular = () => {






  const [popularMovies, setpopularMovies] = useState([])


  useEffect(() => {

    const fetchPopular = async () => {
      const res = await fetch(popular_url)
      const data = await res.json();
      setpopularMovies(data.results)
    }
    
    fetchPopular();

  }, []);

  return (
<>

    <Card arr={popularMovies} title={"POPULAR MOVIES"}/>
  

</>




  )
}

export default Popular