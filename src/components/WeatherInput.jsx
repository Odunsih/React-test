import React from 'react'

const WeatherInput = ({ onWeatherUpdate }) => {
    async function location(city) {
        const API_kEY = 'b1b791265b034acc727db509fb1b3eec';
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_kEY}&units=metric`;
        try {
            const response = await fetch(URL);
            const data = await response.json();
            onWeatherUpdate(data);
            console.log(data)
        } catch (error) {
            console.log('unable to fetch');
        }
        
    }

    const btn = () => {
        city();
    }

    function city() {
    let cityInput = document.getElementById('cityInput');
        if (!cityInput.value ) {
            alert('pls, enter a city');
        } 
        else location(cityInput.value);
        cityInput.value = '';
    }
  return (
    <div>
      <input id='cityInput' placeholder='Enter a city' type="text" />
      <button onClick={btn}>Search</button>
    </div>
  )
}

export default WeatherInput
