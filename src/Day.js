import React, {useContext, useEffect} from 'react';
import './App.css'
import {WeatherContext} from './WeatherContext';

function Day (props) {
    const {weather, cityInfo, citySetter, loading} = useContext(WeatherContext);
    const [weatherData, setWeatherData] = weather;
    const [cityData, setCityData] = cityInfo;
    const [city, setCity] = citySetter;
    const [isLoading, setIsLoading] = loading;
    
    return (
        <div className="day">
            {isLoading 
            ? (<p>-</p>) 
            : (
                <div className="forecast">
                    <div className="forecast-date">
                        { weatherData.list[props.index].dt_txt }
                    </div>
                    <div className="forecast-time">
                        { weatherData.list[props.index].dt_txt }
                    </div>
                    <div className="forecast-icon">
                        Icon Goes Here
                    </div>
                    <div className="forecast-temp">
                        <h1>{ weatherData.list[props.index].main.temp }</h1>
                    </div>
            </div>
            ) }
        </div>
    )
}

export default Day;