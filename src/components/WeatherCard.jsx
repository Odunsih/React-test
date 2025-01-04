import React, { useState } from 'react'
import WeatherInput from './WeatherInput'
import WeatherList from './WeatherList'

const WeatherCard = () => {
    const  [weatherData, setWeatherData] = useState(null);

    const handleWeatherUpdate = (data) => {
        setWeatherData(data);
    }
  return (
    <div>
      <WeatherInput onWeatherUpdate={handleWeatherUpdate} />
      <WeatherList weatherData={weatherData} />
    </div>
  )
}

export default WeatherCard
