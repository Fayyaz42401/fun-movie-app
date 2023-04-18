import { Link } from 'react-router-dom'
import "./card.scss"
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import React, {useState ,useEffect } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from '../Skelteon/CardSkeleton';





const Card = ({title , arr = []}) => {
  const imgUrl = "https://image.tmdb.org/t/p/original"

  const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{
  setTimeout(() => {
      setIsLoading(false)
  }, 1000);
})





  return (
    <>

{
        isLoading
        ?
              <CardSkeleton />        
        :
      <div className="card-container">
      <h1 className='main-heading'>{title}</h1> 

              <div style={{
                display:"flex",
                flexWrap:"wrap",
                padding:"0 10px"
              }}>
             {
              arr.map((movie ,index) => (



                <div className='card' key={index}>
                  <img className="card-img" src={`${imgUrl}/${movie.poster_path}`} alt="Movie Poster" />
                  <div className="card-overlay">
                    <h1 className="card-title">{movie ? movie.title : ""}</h1>
                    <div className="card-date" >Release Date : {movie ? movie.release_date : ""}</div>
                    <div className="card-rating">Rating : {movie ? movie.vote_average : ""}
                      <StarIcon color="warning" />
                    </div>
                    <Link style={{ textDecoration: "none", color: "white" ,  }} to={`/movie/${movie.id}`}>

                      <Button variant="contained" color="error" >Details</Button>
                    </Link>

                  </div>



                </div>
              ))}
              </div>
     </div>
}
    </>
  )
}

export default Card