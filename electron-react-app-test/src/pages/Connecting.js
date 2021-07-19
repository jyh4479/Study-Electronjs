import React from 'react'
import { SettingButtonBox, TopMenu, InfoBox, SettingButton, SettingBar, Row } from '../components'

const Connecting = () =>{
    return(
        <div>

            <Row>
                <TopMenu></TopMenu>
            </Row>

            <Row lineTop={1}>
                <InfoBox></InfoBox>
            </Row>

            <Row lineTop={1}>
                <SettingButtonBox marginTop={20}>
                    <SettingButton imagePath={'/mike.png'} text={'음소거'}/>
                    <SettingButton imagePath={'/phone.png'} text={'통화보류'}/>
                    <SettingButton imagePath={'/keyboard.png'} text={'키패드'}/>
                </SettingButtonBox>

                <SettingButtonBox marginTop={20}>
                    <SettingButton imagePath={'/calloff.png'}/>
                </SettingButtonBox>
            </Row>
        </div>
    )
}

Connecting.defaultProps = {

}

export default Connecting