import React from 'react'
import { SettingButtonBox, TopMenu, HorizontalBar, InfoBox, CallOffButton, SettingButton, SettingBar, Row } from '../components'

const Connecting = () =>{
    return(
        <div>
            <TopMenu></TopMenu>
            <HorizontalBar></HorizontalBar>
            <InfoBox></InfoBox>
            <HorizontalBar></HorizontalBar>


            <Row>
                <SettingButtonBox>
                    <SettingButton imagePath={'/mike.png'} text={'음소거'}/>
                    <SettingButton imagePath={'/phone.png'} text={'통화보류'}/>
                    <SettingButton imagePath={'/keyboard.png'} text={'키패드'}/>
                </SettingButtonBox>
            </Row>

            <Row>
                <SettingButtonBox>
                    <SettingButton imagePath={'/calloff.png'}/>
                </SettingButtonBox>
            </Row>

            <HorizontalBar></HorizontalBar>

        </div>
    )
}

Connecting.defaultProps = {

}

export default Connecting