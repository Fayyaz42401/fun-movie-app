import { Button } from '@mui/material'
import React,{useState , useEffect} from 'react'
import "./upbutton.scss"
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const UpButton = () => {


    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
  
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) { // Change this value to adjust when the button appears
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
    
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  return (
    <>
    {
        isVisible ?  
              
    
    <div className='up-btn'>

    <Button variant='contained'  onClick={scrollToTop} color='error' sx={{
        color:"#fff ",
    }}> 
        <KeyboardDoubleArrowUpIcon/>
    </Button>
    </div>
    : ""
}
</>
  )
}

export default UpButton