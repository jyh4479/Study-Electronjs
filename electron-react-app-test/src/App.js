import {CallOffButton, DummyBox, TestButton, SettingBar} from "./components";
import styled from "styled-components";


function App() {

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


            <ButtonBox>
                <TestButton imagePath={'/mike.png'} text={'음소거'}/>
                <TestButton imagePath={'/phone.png'} text={'통화보류'}/>
                <TestButton imagePath={'/keyboard.png'} text={'키패드'}/>
            </ButtonBox>

            <ButtonBox>
                <CallOffButton/>
            </ButtonBox>

            <SettingBar/>
        </>
    );
}

export default App;
