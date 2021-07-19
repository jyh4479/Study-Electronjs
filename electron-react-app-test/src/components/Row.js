import React from 'react'

const Row = props => {
    return(
        <div>
            {props.children}
        </div>
    )
}

Row.defaultProps = {

}

export default Row