import React from 'react'
import BackgroundStyle from './Background.module.css'

const Background = (props)=>{
    return <div className={BackgroundStyle.Back}>{props.children}</div>
}

export default Background