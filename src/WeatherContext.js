import React, { useState, createContext, useEffect } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {

    const [city, setCity] = useState('Amsterdam')
    const [cityData, setCityData] =useState('');
    const [weatherData, setWeatherData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=7e28b5e7ee2cd04718568031c6fcfff3`, {mode: 'cors'})
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            setCityData(response.city);
            setWeatherData(response.list);
            setIsLoading(false);
        });
    }, [city]);

    return (
        <WeatherContext.Provider value={{weather: [weatherData, setWeatherData], cityInfo: [cityData, setCityData], citySetter: [city, setCity], loading: [isLoading, setIsLoading]}}>
            { props.children }
        </WeatherContext.Provider>
    );
}