import './App.css';
import {Connecting} from "./pages";
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
            {/*<TopMenu></TopMenu>*/}
            {/*<HorizontalBar></HorizontalBar>*/}
            {/*<InfoBox></InfoBox>*/}
            {/*<HorizontalBar></HorizontalBar>*/}

            {/*<ButtonWrapper>*/}
            {/*    <ButtonBox>*/}
            {/*        <SettingButton imagePath={'/mike.png'} text={'음소거'}/>*/}
            {/*        <SettingButton imagePath={'/phone.png'} text={'통화보류'}/>*/}
            {/*        <SettingButton imagePath={'/keyboard.png'} text={'키패드'}/>*/}
            {/*    </ButtonBox>*/}
            {/*</ButtonWrapper>*/}

            {/*<ButtonBox>*/}
            {/*    <CallOffButton/>*/}
            {/*</ButtonBox>*/}

            {/*<ButtonWrapper marginTop='20px'>*/}
            {/*    <SettingBar/>*/}
            {/*</ButtonWrapper>*/}
            <Connecting></Connecting>
        </div>
    );
}

export default App;
