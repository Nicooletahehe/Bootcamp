import React from 'react';
import './style.css';

const Button = ({children, ...otherProps}) => {
    return (
        <button {...otherProps}>
            {children}
        </button>
    )
}

export default Button
