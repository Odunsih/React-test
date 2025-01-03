import React from 'react'
import Button from './Button'

const Student = (props) => {
  return (
    <>
    <div className='student'>
        <h2 className='head'>Name: {props.name}</h2>
        <h2>Age: {props.age}</h2>
        <h2>isStudent: {props.isStudent ? 'yes' : 'no'}</h2>
        <Button btnName='click' />
    </div>
    </>
  )
}

export default Student
