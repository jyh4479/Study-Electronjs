import React from 'react'
import styled from 'styled-components'

const SettingBar = () => {
    const MyBox = styled.div`
    background-color: white;
    height:40px;
    bottom:100%;
    `
    return (
        <input type="range" min="1" max="100" value="5" id="myNumber"/>
    )
}
export default SettingBar