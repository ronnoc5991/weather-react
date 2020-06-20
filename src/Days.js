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
            <div className="forecast-title">
                <h2> Forecast </h2>
            </div>
            <div className="forecast-box">
            { isLoading ? 'Loading' : (weatherData.list.map( (timeSlot, i) => {
                return <Day index= {i} key={i}/> 
            })) }
            </div>
        </div>
    )
}

export default Days