import React from 'react'
import {InfoBox, Row, SettingButton, SettingButtonBox, SettingButtonWrapper, TopMenu} from '../components'

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
                <SettingButtonWrapper marginTop={15}>
                    <SettingButton marginRight={15} marginLeft={15} imagePath={'/mike.png'} text={'음소거'}/>
                    <SettingButton marginRight={15} marginLeft={15} imagePath={'/phone.png'} text={'통화보류'}/>
                    <SettingButton marginRight={15} marginLeft={15} imagePath={'/keyboard.png'} text={'키패드'}/>
                </SettingButtonWrapper>

                <SettingButtonWrapper marginTop={15} marginBottom={15}>
                    <SettingButton imagePath={'/calloff.png'}/>
                </SettingButtonWrapper>
            </Row>

            <Row lineTop={1}>
                <SettingButtonWrapper marginTop={5}>
                    <SettingButtonBox marginTop={3} imagePath={'/volume.png'}></SettingButtonBox>
                    <SettingButtonBox marginTop={3} imagePath={'/bmike.png'}></SettingButtonBox>
                </SettingButtonWrapper>
            </Row>
        </div>
    )
}

Connecting.defaultProps = {}

export default Connecting