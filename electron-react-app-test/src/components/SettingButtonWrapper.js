import React from 'react'
import '../styles/SettingStyle.scss'

const SettingButtonWrapper = props => {
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

SettingButtonWrapper.defaultProps = {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
}

export default SettingButtonWrapper