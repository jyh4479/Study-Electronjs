import React from 'react'
import {SettingBar, SettingButton} from "./index";

const SettingButtonBox = props => {
    return (
        <div className={'setting-box'}>
            <SettingButton imagePath={props.imagePath}></SettingButton>
            <SettingBar></SettingBar>
        </div>
    )
}

SettingButtonBox.defaultProps = {
    imagePath: '',
}

export default SettingButtonBox