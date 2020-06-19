import React, {useContext, useEffect} from 'react';
import './App.css'
import {WeatherContext} from './WeatherContext';

function Day () {
    const {weather, cityInfo, citySetter, loading} = useContext(WeatherContext);
    const [weatherData, setWeatherData] = weather;
    const [cityData, setCityData] = cityInfo;
    const [city, setCity] = citySetter;
    const [isLoading, setIsLoading] = loading;
    

    console.log(weatherData[0]);

    return (
        <div className="day">
            {isLoading 
            ? (<p>Loading</p>) 
            : (<p> { weatherData[0].weather[0].description }</p>) }
        </div>
    )
}

export default Day;