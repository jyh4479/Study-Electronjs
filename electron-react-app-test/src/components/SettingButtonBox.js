import React from 'react'
import '../styles/SettingStyle.scss'

const SettingButtonBox = props => {
    return(
        <div className={'setting-box'}>
            {props.children}
        </div>
    )
}

SettingButtonBox.defaultProps = {

}

export default SettingButtonBox