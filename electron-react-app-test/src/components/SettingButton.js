import React from 'react'
import '../styles/SettingStyle.scss'

const SettingButton = props => {
    return (
        <div>
            <button className={'setting-button'}><img src={props.imagePath}/></button>
            <div className={'setting-text'}>{props.text}</div>
        </div>
    )
}

SettingButton.defaultProps = {
    text:'',
    imagePath:'',
}

export default SettingButton