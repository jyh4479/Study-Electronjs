import React from 'react'
import '../styles/SettingStyle.scss'

const SettingButton = props => {
    return (
        <div className={`m-top-${props.marginTop} m-left-${props.marginLeft} m-right-${props.marginRight} m-bottom-${props.marginBottom}`}>
            <button className={'setting-button'}><img className={'setting-img'} src={props.imagePath}/></button>
            <div className={'setting-text'}>{props.text}</div>
        </div>
    )
}

SettingButton.defaultProps = {
    text: '',
    imagePath: '',
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
}

export default SettingButton