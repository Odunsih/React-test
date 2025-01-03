import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='btn btn-danger'> {props.btnName} </button>
    </div>
  )
}

export default Button
