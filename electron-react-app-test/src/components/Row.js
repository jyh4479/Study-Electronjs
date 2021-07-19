import React from 'react'
import '../styles/RowStyle.scss'

const Row = props => {
    return (
        <div className={`l-top-${props.lineTop} 
        l-left-${props.lineLeft} 
        l-right-${props.lineRight}
        l-bottom-${props.lineBottom}`}>
            {props.children}
        </div>
    )
}

Row.defaultProps = {
    lineTop: 0,
    lineLeft: 0,
    lineBottom: 0,
    lineRight: 0,
}

export default Row