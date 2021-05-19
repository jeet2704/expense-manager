import React from 'react'
import'../../style/Card.css'
const Card = (props) => {
    const classes = 'card '+props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}
export default Card