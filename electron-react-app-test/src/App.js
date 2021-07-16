import './App.css';
import { TopMenu, HorizontalBar, InfoBox, CallOffButton, DummyBox, TestButton, SettingBar } from './components'
import styled from "styled-components";

function App() {

    const ButtonWrapper = styled.div(props=>({
        borderTop: '1px solid #e5e5e5;',
        marginTop: props.marginTop || '0px',
    }))

    const ButtonBox = styled.div`
display:flex;
justify-content: center;

margin: auto;
width:70%;

margin-top: 15px;
`

    return (
        <div className="App">
            <TopMenu></TopMenu>
            <HorizontalBar></HorizontalBar>
            <InfoBox></InfoBox>
            <HorizontalBar></HorizontalBar>

            <ButtonWrapper>
                <ButtonBox>
                    <TestButton imagePath={'/mike.png'} text={'음소거'}/>
                    <TestButton imagePath={'/phone.png'} text={'통화보류'}/>
                    <TestButton imagePath={'/keyboard.png'} text={'키패드'}/>
                </ButtonBox>
            </ButtonWrapper>

            <ButtonBox>
                <CallOffButton/>
            </ButtonBox>

            <ButtonWrapper marginTop='20px'>
                <SettingBar/>
            </ButtonWrapper>
        </div>
    );
}

export default App;
