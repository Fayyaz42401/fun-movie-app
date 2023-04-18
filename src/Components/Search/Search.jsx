import React,{  useContext } from 'react'
import CustomizedSwitches from "../Header/Switch";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import { context_data } from '../../Context';


const Search = ({toggleTheme}) => {

  const inputValue =  useContext(context_data)



  return (
    <>
        <div className="search-input">
            <TextField
              value={inputValue.searchValue}
              onChange={(e)=>inputValue.setSearchValue( e.target.value  )}

              autoComplete="off"
              className="search"
              id="outlined-basic"
              placeholder="Search..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">   
                  <Link to={'/search'} 
                  onClick={inputValue.searchFetchData}
                  >
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                    </Link>
                  </InputAdornment>
                ),
              }}
            />
            <button
              variant="contained"
              className="theme-btn"
              onClick={toggleTheme}
            >
              <CustomizedSwitches />
            </button>
          </div>

    </>
  )
}

export default Search