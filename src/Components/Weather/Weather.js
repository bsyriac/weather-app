import React from 'react'
import Box from '@mui/material/Box';
import './Weather.css'

const Weather = (props) => {
    const weatherCase = props.weatherAttributes;

    if (weatherCase != null){
        const weatherCases = {
            cityName: weatherCase.name,
            cityCountry: weatherCase.sys.country,
            temp: (parseFloat(weatherCase.main.temp)-273.15).toFixed(2),
            tempFeelsLike: (parseFloat(weatherCase.main.feels_like).toFixed(2)-273.15).toFixed(2),
            weatherMain: weatherCase.weather[0].main,
            weatherDescription: weatherCase.weather[0].description
        }
        console.log(weatherCases)

        return (
             <Box className="weather-box">
                <div className="city">{weatherCases.cityName},{weatherCases.cityCountry}</div>
                <div className="temperature">Temperature: {weatherCases.temp} &#8451;</div>
                <div className="feels-like">Feels like: {weatherCases.tempFeelsLike} &#8451; </div>
                <div className="condition">{weatherCases.weatherMain}</div>
             </Box>   
        );
    } else {
        return (
            <div></div>
        );
    }


};

export default Weather