import React from 'react'
import '../styles/SettingStyle.scss'

const SettingButtonBox = props => {
    return (
        <div className={`setting-box m-top-${props.marginTop}`}>
            {props.children}
        </div>
    )
}

SettingButtonBox.defaultProps = {
    marginTop: 0,
}

export default SettingButtonBox