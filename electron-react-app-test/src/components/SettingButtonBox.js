import React from 'react'
import {SettingBar, SettingButton} from "./index";

const SettingButtonBox = props => {
    return (
        <div className={`setting-box 
        m-top-${props.marginTop}
        m-left-${props.marginLeft}
        m-right-${props.marginRight}
        m-bottom-${props.marginBottom}`}>
            <SettingButton imagePath={props.imagePath}></SettingButton>
            <SettingBar></SettingBar>
        </div>
    )
}

SettingButtonBox.defaultProps = {
    imagePath: '',
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
}

export default SettingButtonBox