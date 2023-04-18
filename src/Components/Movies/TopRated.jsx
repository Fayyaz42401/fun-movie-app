import React,{useState ,useEffect} from 'react'
import Card from '../Card/Card';




const top_rated_url = "https://api.themoviedb.org/3/movie/top_rated?api_key=bf96cf0d2ae830a7b789cf38ce350462&language=en-US&page=1"

const Trending = () => {

    const [topRatedMovies, setTopRatedMovies] = useState([])


    useEffect(() => {
  
      const fetchPopular = async () => {
        const res = await fetch(top_rated_url)
        const data = await res.json();
        setTopRatedMovies(data.results)
      }
  
      fetchPopular();
  
    }, []);
  return (
    <>
        <Card arr={topRatedMovies} title={"TOP RATED MOVIES"}/>
    </>
  )
}

export default Trending