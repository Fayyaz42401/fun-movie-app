import "./home.scss"
// import { Carousel } from "react-responsive-carousel"
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import About from "../About/About";
import Contact from "../Contact/Contact";


const Home = () => {



  const popular_url = "https://api.themoviedb.org/3/movie/popular?api_key=bf96cf0d2ae830a7b789cf38ce350462&language=en-US&page=1"
  const imgUrl = "https://image.tmdb.org/t/p/original"

  const [popularMovies, setpopularMovies] = useState([])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3000,
    pauseOnHover: false,
    arrows : true ,

  };
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
    <div className="banner">
        <Slider   {...settings}>

        {
          popularMovies.map((movie , index) => (
            <div className="poster" key={index}>
              <div className="poster-img-div">
              <img className="poster-img" src={`${imgUrl}/${movie.backdrop_path}`} alt="" />

              </div>
              <div className="poster-overlay">
                <h1 className="poster-title">{movie ? movie.original_title : ""}</h1>
                <p className="poster-para">{movie ? movie.overview.slice(0,118)+"..." : ""}</p>
                <h2 className="poster-date" >Release Date : {movie ? movie.release_date : ""}</h2>
                <h2 className="poster-rating">Rating : {movie ? movie.vote_average : ""}
                  <StarIcon color="warning" />
                </h2>
                <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>

                  <Button variant="contained" color="error">Details</Button>
                </Link>

              </div>
            </div>
          )
          )
        }




</Slider>
    </div>


    <About/>
    <Contact />
    </>
  )
}

export default Home