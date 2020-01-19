import React, {useState} from 'react'
import './Button.css';

function Button({
    descr = 'Start',
    count = 0,
    state = false
}) {

    const [checking,
        setCheck] = useState(0)

    return (
        <button className={`${state}`}>{descr}</button>

    )
}

export default Button