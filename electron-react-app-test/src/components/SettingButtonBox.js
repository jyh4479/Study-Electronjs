import React from 'react'
import '../styles/SettingStyle.scss'

const SettingButtonBox = props => {
    return (
        <div className={`setting-box 
        m-top-${props.marginTop}
        m-left-${props.marginLeft}
        m-right-${props.marginRight}
        m-bottom-${props.marginBottom}`}>
            {props.children}
        </div>
    )
}

SettingButtonBox.defaultProps = {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
}

export default SettingButtonBox