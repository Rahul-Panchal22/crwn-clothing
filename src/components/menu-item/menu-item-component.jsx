import React from 'react'

import './menu-item.styles.scss'

import {useNavigate} from 'react-router-dom'

const MenuItem = (props) => {
    const navigate = useNavigate()
    console.log("Navigate", navigate)
    return (
        <div className={`${props.size} menu-item`} onClick = {() => navigate(`${props.linkUrl}`)}>
            <div className='background-Image'
                style={{
                    backgroundImage: `url(${props.url})`
                }} />
            <div className='content'>
                <h1 className='title'>{props.title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem