import { useState } from 'react'
import Card from './Card'
import Student from './Student'
import './App.css'
import Greetings from './Greetings'
import WeatherCard from './components/WeatherCard'

function App() {

  return (
    <>
    <Greetings isLogin={true}/>
      <Card />
      <div className="stud">
        <Student name='Henry' age={22} isStudent={false} />
        <Student name='John' age={20} isStudent={true} />
        <Student name='David' age={18} isStudent={false} />
        <Student name='James' age={25} isStudent={false} />
      </div>
      <WeatherCard />
    </>
  )
}

export default App
