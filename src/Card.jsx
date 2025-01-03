import React from 'react'
import Pic from './assets/switch.jpg'
import Button from './Button'

const Card = () => {
  return (
    <>
    <div className='card'>
    <img className='img' src={ Pic } alt="pic" />
    <h2 className='head'>N'ry Tech</h2>
    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum mollitia, sed accusamus nihil aliquid eos debitis assumenda impedit. Magnam praesentium doloribus, laboriosam deserunt saepe odit debitis molestias nulla voluptatum.</p>
    <Button btnName='new'/>
    </div>
    </>
  )
}

export default Card
