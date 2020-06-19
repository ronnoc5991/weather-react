import React from 'react';
import Header from './Header';
import Days from './Days';
import {WeatherProvider} from './WeatherContext';
import SearchWeather from './SearchWeather';

function App () {

  return(
    <WeatherProvider>
      <div className="app">
        <Header />
        <SearchWeather />
        <Days />
      </div>
    </WeatherProvider>
  );
}

export default App;