import React from 'react'
import './KeyPad.scss'

const KeyButton = props => {
    const keyType = props.keyType
    const keyNumber = props.keyNumber
    const keyFunction = props.keyFunction
    const keyStyle = props.keyStyle
    const keyIcon = props.keyIcon
    const keyText = props.keyText

    const textCheck = keyText != '' ? 'key-text' : null

    return (
        <>{keyType === true ?
            <a onClick={keyFunction} className={`${keyStyle}`}>
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <div><i className={`${keyIcon}`}/></div>
                    <div className={textCheck}>{props.keyText}</div>
                </div>
            </a>
            :
            <a onClick={keyFunction}>{keyNumber}</a>}
        </>
    )
}

KeyButton.defaultProps = {
    keyType: false,
    keyNumber: 0,
    keyFunction: '',
    keyStyle: '',
    keyIcon: '',
    keyText: '',
}

export default KeyButton