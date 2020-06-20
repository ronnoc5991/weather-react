import React from 'react';
import CurrentWeather from './CurrentWeather';
import Days from './Days';
import {WeatherProvider} from './WeatherContext';
import SearchWeather from './SearchWeather';

function App () {

  
  document.body.style.backgroundImage = `https://source.unsplash.com/${window.innerWidth}x${window.innerHeight}/?nature`

  // function getBackground () {
  //   `https://source.unsplash.com/${window.innerWidth}x${window.innerHeight}/?nature`
  // }

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