import React from 'react'
import {SettingBar, SettingButton} from "./index";

const SettingButtonBox = props => {
    return (
        <div className={'setting-box'}>
            <SettingButton marginTop={props.marginTop} imagePath={props.imagePath}></SettingButton>
            <SettingBar></SettingBar>
        </div>
    )
}

SettingButtonBox.defaultProps = {
    imagePath: '',
    marginTop: 0,
}

export default SettingButtonBox