import React from 'react';
import CurrentWeather from './CurrentWeather';
import Days from './Days';
import {WeatherProvider} from './WeatherContext';
import SearchWeather from './SearchWeather';

function App () {

  return(
    <WeatherProvider>
      <div className="app">
        <SearchWeather />
        <CurrentWeather />
        <Days />
      </div>
    </WeatherProvider>
  );
}

export default App;