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

    console.log(weatherData);

    return (
        <div className="days">
            { isLoading ? 'Loading' : (weatherData.list.map( (timeSlot, i) => {
                return <Day index= {i} key={i}/> 
            })) }
        </div>
    )
}

export default Days