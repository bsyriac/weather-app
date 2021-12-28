import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css'
import Weather from '../Weather/Weather.js';





const Search = (props) => {
    
    const [apiURL, setURL] = useState('')
    const [search, setSearch] = useState('')
    const [weatherData, setWeatherData] = useState(null)
    

    const searchHandler = event => {
        setSearch(event.target.value)
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=3188d0a6623f37b6be7bda81e9f3fb09`
        setURL(apiURL)
        
    }

    const getWeatherForecast =  (apiURL) => {
        fetch(apiURL)
        .then(res => res.json())
        .then(data => {
            setWeatherData(data)  
            console.log(data)
        })
        .catch(err => {
            alert("Try a different city")
            setWeatherData(null)
        });
    }
    
    const submitHandler = () => { 
        getWeatherForecast(apiURL)
    } 


    return (
        <div>

        <div className='search-body'>
            <span>
                <div className='search-span'>
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
                </div>
            </span>
        </div>
        <div className='seperation'></div>
        <div className='weather-card'>
            <Weather 
                weatherAttributes={weatherData}
            />
 
        </div>
        </div>
    );
};


export default Search