import React from 'react'
import styled from 'styled-components'

const TestButton = props => {

    const MyButtonBox = styled.div`
    `

    const MyButton = styled.button`
    margin: 0 15px 0 15px;
    background-color: white;
    border:0;
    outline:0;
    
    &:active{
        background-color: #BBBBBB;
    }
    `
    const MyText = styled.div`
    font-family: MalgunGothic;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: -0.5px;
    text-align: center;
    color: #333333;
    `
    return (
        <MyButtonBox>
            <MyButton type='button'><img src={props.imagePath}/></MyButton>
            <MyText>{props.text}</MyText>
        </MyButtonBox>
    )
}
export default TestButton