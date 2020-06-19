import React, { useContext  } from 'react'
import './App.css'
import Day from './Day'
import {WeatherContext} from './WeatherContext';

function Days () {

    const {weather, cityInfo, citySetter, loading} = useContext(WeatherContext);
    const [weatherData, setWeatherData] = weather;
    const [cityData, setCityData] = cityInfo;
    const [city, setCity] = citySetter;
    const [isLoading, setIsLoading] = loading;

    return (
        <div className="days">
            <Day />
        </div>
    )
}

export default Days