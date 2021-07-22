import React from 'react'
import {KeyButton} from "./index";

const CallButtonBox = props => {
    const pageType = props.pageType
    const callOnEvent = props.callOnEvent
    const callOffEvent = props.callOffEvent

    if (pageType == 'a') {
        return <KeyButton keyType={true} keyFunction={callOnEvent} keyStyle={'call-on'} keyIcon={'fa fa-phone'}/>


    } else if (pageType == 'b') {
        return <KeyButton keyType={true} keyFunction={callOffEvent} keyStyle={'call-off'} keyIcon={'fa fa-phone-slash'}/>
    } else if (pageType == 'c') {
        return (
            <>
                <KeyButton keyType={true} keyFunction={callOnEvent} keyStyle={'call-on'} keyIcon={'fa fa-phone'}/>
                <KeyButton keyType={true} keyFunction={callOffEvent} keyStyle={'call-off'} keyIcon={'fa fa-phone-slash'}/>
            </>
        )
    }
}

CallButtonBox.defaultProps = {
    pageType: 'default',
    callOnEvent: '',
    callOffEvent: '',
}

export default CallButtonBox