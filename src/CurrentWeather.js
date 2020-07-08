import React, {useContext} from 'react';
import './App.css'
import {WeatherContext} from './WeatherContext';

const CurrentWeather = () => {

    const {weather, cityInfo, citySetter, loading} = useContext(WeatherContext);
    const [weatherData, setWeatherData] = weather;
    const [cityData, setCityData] = cityInfo;
    const [city, setCity] = citySetter;
    const [isLoading, setIsLoading] = loading;

    function getIcon (id) {
        let url = `http://openweathermap.org/img/wn/${id}@4x.png`
        return url;
    }

    function convertTimeToString (timeCode) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let timestamp = timeCode;
        let date = new Date(timestamp * 1000);
        let month = date.getMonth(); //number between 0 and 11
        let dateNumber = date.getDate(); //number dayof the month between 1 and 31
        let day = date.getDay(); //day as a number between 0 and 6
        return `${days[day]} ${dateNumber} ${months[month]}`
    }

    function convertToTime (timeCode) {
        let timestamp = timeCode;
        let date = new Date(timestamp * 1000);
        let hour = date.getHours();
        let minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        return `${hour}:${minutes}`
    }

    function capitalize (oldString) {
        let stringArray = oldString.split("");
        stringArray[0] = stringArray[0].toUpperCase();
        let newString = stringArray.join("");
        return newString

    }

    return (
        <div className="current-weather">
            <div className="current-weather-top">
                <div className="city-name">
                    <h1> { `${cityData.name}, ${cityData.country}` } </h1>
                </div>
                <div className="date">
                    { isLoading ? 'Loading' : <p> { convertTimeToString(weatherData.list[0].dt) } </p>}
                </div>
            </div>
            <div className="current-weather-bottom">
                <div className="current-weather-left">
                    <div className="current-lower-container">
                        <div className="current-icon">
                            {isLoading ? '-' : <img src={ getIcon(weatherData.list[0].weather[0].icon)}/>}
                        </div>
                        <div className="current-info">
                            <div className="current-temp">
                                {isLoading ? '-' :  `${ Math.round(weatherData.list[0].main.temp) }°` }
                            </div>
                            <div className="current-description">
                                { isLoading? '-' : <p> {capitalize(weatherData.list[0].weather[0].description)}  </p> }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="current-weather-right">
                    <div className="high-temp">
                        { isLoading ? '-' : <p> { `${ Math.round(weatherData.list[0].main.temp_max) }°` } </p> }
                        <p className="label">High</p>
                    </div>
                    <div className="low-temp">
                        { isLoading ? '-' : <p> { `${ Math.round(weatherData.list[0].main.temp_min) }°` } </p> }
                        <p className="label">Low</p>
                    </div>
                    <div className="wind">
                        { isLoading ? '-' : <p> { `${ weatherData.list[0].wind.speed } m/s` } </p> }
                        <p className="label">Wind Speed</p>
                    </div>
                    <div className="humidity">
                        { isLoading ? '-' : <p> { weatherData.list[0].main.humidity }% </p> }
                        <p className="label">Humidity</p>
                    </div>
                    <div className="sunrise">
                        { isLoading ? '-' : <p> { `${ convertToTime(cityData.sunrise) }` } </p> }
                        <p className="label">Sunrise</p>
                    </div>
                    <div className="sunset">
                        { isLoading ? '-' : <p> { `${ convertToTime(cityData.sunset) }` } </p> }
                        <p className="label">Sunset</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather