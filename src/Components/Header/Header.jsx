import "./header.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Hamburger from "hamburger-react";

import logo from "./logo1.png";
import Search from "../Search/Search";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [theme, setTheme] = useState("light-theme");
  const [isOpen, setOpen] = useState(false);
  const [dropDownView , setDropDownView] = useState(false)
  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
    <div className="header">
      <Link to={"/"} className="logo">
        <img src={logo} alt="logo" width={100} style={{ height: "100" }} />
      </Link>
      <div className="navbar">
          <ul>
            <div className="dropdown">
              <button className="dropbtn">
                Movies
                <ArrowDropDownIcon />
              </button>
              <div className="dropdown-content">
                <Link to={"/upcomingmovies"} className="dropdown-link">
                  Upcoming{" "}
                </Link>
                <Link to={"/popularmovies"} className="dropdown-link">
                  Popular{" "}
                </Link>
                <Link to={"/topratedmovies"} className="dropdown-link">
                  Top Rated{" "}
                </Link>
              </div>
            </div>
            <HashLink className="navbar-link" to={"/#about"}>About </HashLink>
            <HashLink className="navbar-link" to={"/#contact"}>Contact </HashLink>
          </ul>
     
          <Search toggleTheme={toggleTheme} />
        </div>
      {
        isOpen ?  
             <div className="navbar-responsive">
        <div className="navbar" style={{display:'flex'}}>
          <ul>
            <div className="dropdown">
              <button className="dropbtn" onClick={()=> setDropDownView(!dropDownView)}>
                Movies
                <ArrowDropDownIcon />
              </button  > 
              {
                dropDownView ? 
              
              <div className="dropdown-content">
                <Link to={"/upcomingmovies"} className="dropdown-link" 
                onClick={() => setOpen(false) }>
                  Upcoming{" "}
                </Link>
                <Link to={"/popularmovies"} className="dropdown-link" 
                onClick={() => setOpen(false) }>
                  Popular{" "}
                </Link>
                <Link to={"/topratedmovies"} className="dropdown-link" 
                onClick={() => setOpen(false) }>
                  Top Rated{" "}
                </Link>
              </div>
                  : ""
                }
            </div>
            <Link className="navbar-link">About </Link>
            <Link className="navbar-link">Contact </Link>
          </ul>

        </div>
      </div>

      : "" 

      }

      <button
        className="menu-btn"
        onClick={() => setOpen(!isOpen)}
      >
        <Hamburger
          size={40}
          toggled={isOpen} toggle={setOpen}
          />
      </button>
    </div>


    {
      isOpen === false ?
    <div className="show-search">
      <Search toggleTheme={toggleTheme} /> 
    </div>
      :""
    }
    
    </>
  );
};

export default Header;
