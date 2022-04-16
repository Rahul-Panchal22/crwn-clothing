import React from 'react'

import './menu-item.styles.scss'

const MenuItem = (props) => {
    console.log("url", props.url);
    return (
        <div className={`${props.size} menu-item`}>
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