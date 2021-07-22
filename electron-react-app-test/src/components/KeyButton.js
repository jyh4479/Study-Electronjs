import React from 'react'
import './KeyPad.scss'

const KeyButton = props => {
    const keyType = props.keyType
    const keyNumber = props.keyNumber
    const keyFunction = props.keyFunction
    const keyStyle = props.keyStyle
    const keyIcon = props.keyIcon

    return (
        <>{keyType === true ?
            <a onClick={keyFunction} className={`${keyStyle}`}><i className={`${keyIcon}`}/></a>
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
}

export default KeyButton