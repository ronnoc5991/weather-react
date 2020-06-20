import React, {useContext, useEffect} from 'react';
import './App.css'
import {WeatherContext} from './WeatherContext';

function Day (props) {
    const {weather, cityInfo, citySetter, loading} = useContext(WeatherContext);
    const [weatherData, setWeatherData] = weather;
    const [cityData, setCityData] = cityInfo;
    const [city, setCity] = citySetter;
    const [isLoading, setIsLoading] = loading;
    
    function getIcon (id) {
        let url = `http://openweathermap.org/img/wn/${id}.png`
        return url;
    }

    function getMonthandDay (timeCode) {
        let timestamp = timeCode + cityData.timezone;
        let date = new Date(timestamp * 1000);
        let month = date.getMonth() + 1; //number between 0 and 11
        let dateNumber = date.getDate(); //number dayof the month between 1 and 31
        let hours = date.getHours(); //between 0 and 23
        let minutes = date.getMinutes(); //between 0 and 59
        return `${month}.${dateNumber}`
    }

    function getTime (timeCode) {
        let timestamp = timeCode + cityData.timezone;
        let date = new Date(timestamp * 1000);
        let hours = date.getHours(); //between 0 and 23
        let minutes = date.getMinutes() + '0'; //between 0 and 59
        return `${hours}:${minutes}`
    }

    // console.log(cityData.timezone);

    return (
        <div className="day">
            {isLoading 
            ? (<p>-</p>) 
            : (
                <div className="forecast">
                    <div className="forecast-date">
                        <p>{ getMonthandDay(weatherData.list[props.index].dt) }</p>
                    </div>
                    <div className="forecast-time">
                        <p>{ getTime(weatherData.list[props.index].dt) }</p>
                    </div>
                    <div className="forecast-icon">
                        {/* { weatherData.list[props.index].weather[0].icon } */}
                        <img src={ getIcon(weatherData.list[props.index].weather[0].icon)}/>
                    </div>
                    <div className="forecast-temp">
                        <p>{ Math.round(weatherData.list[props.index].main.temp) }°</p>
                    </div>
            </div>
            ) }
        </div>
    )
}

export default Day;