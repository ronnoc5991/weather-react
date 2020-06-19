import React, {useContext} from 'react';
import './App.css'
import {WeatherContext} from './WeatherContext';

function Header () {

    const {weather, cityInfo, citySetter, loading} = useContext(WeatherContext);
    const [weatherData, setWeatherData] = weather;
    const [cityData, setCityData] = cityInfo;
    const [city, setCity] = citySetter;
    const [isLoading, setIsLoading] = loading;


    let x = 3;

    return (
        <div className="header">
            <h1> { `${cityData.name}, ${cityData.country}` } </h1>
            <p>Hello</p>
        </div>
    )
}

export default Header