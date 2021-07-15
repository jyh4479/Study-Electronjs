import {CallOffButton, DummyBox, TestButton, SettingBar} from "./components";
import styled from "styled-components";


function App() {

    const ButtonWrapper = styled.div`
    border-top: 1px solid #e5e5e5;
    `

    const ButtonBox = styled.div`
    display:flex;
    justify-content: center;
    
    margin: auto;
    width:70%;
    
    margin-top: 15px;
    `

    return (
        <>
            <DummyBox/>


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

            <ButtonWrapper>
                <SettingBar/>
            </ButtonWrapper>
        </>
    );
}

export default App;
