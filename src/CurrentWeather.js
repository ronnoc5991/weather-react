import React, {useContext} from 'react';
import './App.css'
import {WeatherContext} from './WeatherContext';

function CurrentWeather () {

    const {weather, cityInfo, citySetter, loading} = useContext(WeatherContext);
    const [weatherData, setWeatherData] = weather;
    const [cityData, setCityData] = cityInfo;
    const [city, setCity] = citySetter;
    const [isLoading, setIsLoading] = loading;

    return (
        <div className="current-weather">
            <div className="current-weather-left">
                <div className="city-name">
                    <h1> { `${cityData.name}, ${cityData.country}` } </h1>
                </div>
                <div className="date">
                    { isLoading ? 'Loading' : <h1> { `${weatherData.list[0].dt_txt}` } </h1>}
                </div>
            </div>
            <div className="current-weather-right">
                <div className="high-temp">
                    { isLoading ? '-' : <h1> { `${ weatherData.list[0].main.temp_max }` } </h1> }
                </div>
                <div className="low-temp">
                    { isLoading ? '-' : <h1> { `${ weatherData.list[0].main.temp_min }` } </h1> }
                </div>
                <div className="wind">
                    { isLoading ? '-' : <h1> { `${ weatherData.list[0].wind.speed } m/s` } </h1> }
                </div>
                <div className="sunrise">
                    { isLoading ? '-' : <h1> { `${ cityData.sunrise }` } </h1> }
                </div>
                <div className="sunset">
                    { isLoading ? '-' : <h1> { `${ cityData.sunset }` } </h1> }
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather