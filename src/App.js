import React, { useState } from 'react';
import Header from './Header';
import Days from './Days'

function App () {

  const [weatherData, setWeatherData] = useState([
    {city: 'Amsterdam', temp: '90', rain: 'rainy', clouds: 'cloudy', day: 'Monday'},
    {city: 'Amsterdam', temp: '45', rain: 'not rainy', clouds: 'some clouds', day: 'Tuesday'},
    {city: 'Amsterdam', temp: '45', rain: 'not rainy', clouds: 'some clouds', day: 'Wednesday'},
    {city: 'Amsterdam', temp: '45', rain: 'not rainy', clouds: 'some clouds', day: 'Thursday'},
    {city: 'Amsterdam', temp: '45', rain: 'not rainy', clouds: 'some clouds', day: 'Friday'}
  ]);

  return(
    <div className="app">
      <Header city= { weatherData[0].city }/>
      <Days data= { weatherData }/>
    </div>
  );
}

export default App;