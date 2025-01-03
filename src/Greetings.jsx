import React from 'react'
import propTypes, { bool } from 'prop-types'

const Greetings = (props) => {
    const welcome = <h2 className='welc'>welcom {props.username} </h2>
    const unkwn = <h2 className='log'>pls login </h2>
    return (
        props.isLogin ? welcome : unkwn
    )

}

Greetings.propTypes = {
    isLosgin: propTypes.bool,
    username: propTypes.string
}

Greetings.defaultProps = {
    username: 'Guest',
    isLogin: false
}

export default Greetings
