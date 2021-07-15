import React from 'react'
import styled from 'styled-components'

const CallOffButton = () => {

    const MyButton = styled.button`
    background-color: white;
    border:0;
    outline:0;
    
    &:active{
        background-color: #BBBBBB;
    }
    `

    return(
        <MyButton><img src='/calloff.png'/></MyButton>
    )
}
export default CallOffButton