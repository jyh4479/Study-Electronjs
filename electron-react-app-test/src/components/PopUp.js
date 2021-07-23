import React from 'react'
import './PopUp.scss'
import {CallButtonBox} from "./index";

const PopUp = props => {
    return (
        <div>
            <div className={'box'}>
                <div className={'title'}>title</div>
                <div className={'info-box'}>
                    <div className={'img-box'}>
                        <img src="img/icon-profile-80-px-default.png"
                             alt="profile"
                             srcSet="img/icon-profile-80-px-default@2x.png 2x,
                        img/icon-profile-80-px-default@3x.png 3x"/>
                    </div>

                    <div className={'text-box'}>
                        <text>HIHI</text>
                    </div>

                </div>

                <div>
                    <div className={'row key-c'}>
                        <CallButtonBox pageType={'c'}></CallButtonBox>
                    </div>
                </div>

            </div>
        </div>
    )
}

PopUp.defaultProps = {}

export default PopUp