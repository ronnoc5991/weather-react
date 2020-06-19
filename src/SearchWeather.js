import React, {useState, useContext} from 'react';
import {WeatherContext} from './WeatherContext';

const SearchWeather = () => {
    
    const {weather, cityInfo, citySetter, loading} = useContext(WeatherContext);
    // const [weatherData, setWeatherData] = weather;
    const [cityData, setCityData] = cityInfo;
    const [city, setCity] = citySetter;
    const [isLoading, setIsLoading] = loading;
    const [searchTerm, setSearchTerm] = useState('');

    const updateSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    };

    const updateCity = (e) => {
        e.preventDefault();
        setCity(searchTerm);
        setSearchTerm('');
    }

    return (
        <form onSubmit={updateCity} className="searchBar">
            <input type="text" name="city" value= { searchTerm } onChange={ updateSearchTerm }/>
            <button>Search</button>
        </form>
    )
}

export default SearchWeather;