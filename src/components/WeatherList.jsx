import React from 'react'

const WeatherList = ({ weatherData }) => {
    if (!weatherData) {
        return <p>No weather data available. Enter a city to get started!</p>;
      }
        const {
            name,
            main,
        } = weatherData
    
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Temp: {main.temp}C</h2>
    </div>
  )
}

export default WeatherList;
