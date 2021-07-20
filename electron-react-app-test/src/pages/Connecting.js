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
                    <SettingButton imagePath={'/mike.png'} text={'음소거'}/>
                    <SettingButton imagePath={'/phone.png'} text={'통화보류'}/>
                    <SettingButton imagePath={'/keyboard.png'} text={'키패드'}/>
                </SettingButtonWrapper>

                <SettingButtonWrapper marginTop={15} marginBottom={15}>
                    <SettingButton imagePath={'/calloff.png'}/>
                </SettingButtonWrapper>
            </Row>

            <Row lineTop={1}>
                <SettingButtonWrapper marginTop={15}>
                    <SettingButtonBox imagePath={'/volume.png'}></SettingButtonBox>
                    <SettingButtonBox imagePath={'/bmike.png'}></SettingButtonBox>
                </SettingButtonWrapper>
            </Row>
        </div>
    )
}

Connecting.defaultProps = {}

export default Connecting