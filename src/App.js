import React, { useState } from 'react';
import Day from './Day';
import Header from './Header';
import Days from './Days'

function App () {

  const [weatherData, setWeatherData] = useState([
    {city: 'Amsterdam', temp: '100', rain: 'rainy', clouds: 'cloudy'},
    {city: 'Amsterdam', temp: '45', rain: 'not rainy', clouds: 'some clouds'},
    {city: 'Amsterdam', temp: '45', rain: 'not rainy', clouds: 'some clouds'},
    {city: 'Amsterdam', temp: '45', rain: 'not rainy', clouds: 'some clouds'},
    {city: 'Amsterdam', temp: '45', rain: 'not rainy', clouds: 'some clouds'}
  ]);

  return(
    <div className="app">
      <Header city= { weatherData[0].city }/>
      <Days data= { weatherData }/>
    </div>
  );
}

export default App;