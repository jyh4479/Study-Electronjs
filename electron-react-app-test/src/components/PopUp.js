import React from 'react'
import './PopUp.scss'
import {CallButtonBox} from "./index";

const PopUp = props => {
    return (
        <div>
            <div className={'box'}>
                <div className={'title'}>
                    <div style={{display:'flex',marginLeft:'5px', padding:'1%'}}>
                        <img  src={'img/icon-24-px-call.png'}/>
                        <div className={'title-kolon'}><text>KOLON</text></div>
                        &nbsp;
                        <div className={'title-call'}><text>전화</text></div>
                    </div>
                </div>

                <div className={'info-box'}>
                    <div className={'img-box'}>
                        <img src="img/icon-profile-80-px-default.png"/>
                    </div>

                    <div className={'text-box'}>
                        <div>
                            <text className={'text-name'}>{props.name}</text>
                            &nbsp;
                            <text className={'text-info'}>{props.class}</text>
                        </div>
                        <div>
                            <text className={'text-info'}>{props.team}팀</text>
                        </div>
                        <div>
                            <text className={'text-info'}>{props.company}</text>
                        </div>
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

PopUp.defaultProps = {
    name: 'name',
    class: 'class',
    team: 'team',
    company: 'company',
}

export default PopUp