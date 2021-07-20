import React from 'react'
import '../styles/SettingStyle.scss'


const SettingBar = () => {
    return (
        <input type="range" min="0" max="100" className="slider" id="myRange"/>
    )
}
export default SettingBar