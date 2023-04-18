import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.scss"
import logo from '../Header/logo1.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Footer = () => {
  return (
    <div 
    // style={{position:"absolute" , bottom:"0" , width:"100%"}}
    >
        <div className='footer'>
        <div className='footer-div footer-logo'>
            <Link>
            <img src={logo} alt="LOGO" width={100}/>
            </Link>
            <h2>About</h2>
            <p>
                We Are Offering The Best Movies Around The World!</p>
        </div>
        <div className='footer-div footer-movies-link'>
            <h2>Movies</h2>
            <Link to={'/popularmovies'} className="footer-link" onClick={()=>{
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                          });
            }}>
            <KeyboardArrowRightIcon />
            Popular</Link>
            <Link to={'/topratedmovies'} className="footer-link" onClick={()=>{
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                          });
            }}>
            <KeyboardArrowRightIcon />
            Top Rated</Link>
            <Link to={'/upcomingmovies'} className="footer-link" onClick={()=>{
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                          });
            }}>
            <KeyboardArrowRightIcon />
            Upcoming</Link>
        </div>
        <div className='footer-div footer-support' > 
            <h2>Support </h2>
            <Link className="footer-link">
            <KeyboardArrowRightIcon />
            FAQ</Link>
            <Link className="footer-link">
            <KeyboardArrowRightIcon />
            Help Center</Link>
            <Link className="footer-link">
            <KeyboardArrowRightIcon />
            Privacy</Link>
        </div>
        <div className='footer-div footer-contact'>
            <h2>Contact</h2>
            <div>
            <a href='https://www.facebook.com/' target='_blank' className="footer-link">
            <FacebookOutlinedIcon  sx={{
                fontSize :"40px"
            }}/>
            </a>
            <Link className="footer-link">
            <TwitterIcon sx={{
                fontSize :"40px"
            }} />
            </Link>
            </div>
            <div>
            <Link className="footer-link">
            <GoogleIcon sx={{
                fontSize :"40px"
            }} />
            </Link>
            <Link className="footer-link">
            <InstagramIcon sx={{
                fontSize :"40px"
            }} />
            </Link>
            </div>
        </div>
        </div>
        <div className='trademark'>
        This Website Is Created By <span>FAYYAZ UD-DIN</span>
        </div>
    </div>
  )
}

export default Footer