import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css'

const Search = () => {
    
    
    const [search, setSearch] = useState('')

    const searchHandler = event => {
        setSearch(event.target.value)
    }

    const submitHandler = () => {
        console.log(search)
    } 

    

    return (
        <div className='search-body'>
            <span>
                <TextField 
                    id="standard-basic" 
                    label="Enter City"
                    variant="standard" 
                    required
                    style={{width:400, height:100}}
                    onChange={searchHandler}
                />
                
                <Button 
                    variant="contained"
                    onClick={submitHandler}
                    disabled={search === ""}
                >Search</Button>
            </span>
        </div>
        
    );
};


export default Search