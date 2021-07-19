import React from 'react'
import {InfoBox, Row, SettingButton, SettingButtonBox, TopMenu} from '../components'

const Connecting = () => {
    return (
        <div>
            <Row>
                <TopMenu></TopMenu>
            </Row>

            <Row lineTop={1}>
                <InfoBox></InfoBox>
            </Row>

            <Row lineTop={1}>
                <SettingButtonBox marginTop={15}>
                    <SettingButton imagePath={'/mike.png'} text={'음소거'}/>
                    <SettingButton imagePath={'/phone.png'} text={'통화보류'}/>
                    <SettingButton imagePath={'/keyboard.png'} text={'키패드'}/>
                </SettingButtonBox>

                <SettingButtonBox marginTop={15} marginBottom={15}>
                    <SettingButton imagePath={'/calloff.png'}/>
                </SettingButtonBox>
            </Row>

            <Row lineTop={1}>

            </Row>
        </div>
    )
}

Connecting.defaultProps = {}

export default Connecting