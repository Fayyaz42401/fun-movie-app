import React, {useState ,useEffect } from 'react'
import Card from '../Card/Card'


const upcoming_url = "https://api.themoviedb.org/3/movie/upcoming?api_key=bf96cf0d2ae830a7b789cf38ce350462&language=en-US&page=1"

const Upcoming = () => {

    const [upcomingMovies, setUpcomingMovies] = useState([])

    useEffect(() => {
  
        const fetchPopular = async () => {
          const res = await fetch(upcoming_url)
          const data = await res.json();
          setUpcomingMovies(data.results)
        }
    
        fetchPopular();
    
      }, []);
  return (
    <>
    <Card title={"UPCOMING MOVIES"} arr={upcomingMovies} />
    </>
  )
}

export default Upcoming