import React from 'react'
import '../styles/InfoBox.scss'

/**
 * InfoBox Component
 * 
 * @props
 * - 
 * 
 * @returns 
 */

const InfoBox = () => {

    return(
        <div className="info-wrapper">
            <div className="info-number">010-123-4567</div>
            <div className="conn-state">연결중...</div>

            <img src="img/icon-profile-80-px-default.png"
                 alt="profile"
                 srcSet="img/icon-profile-80-px-default@2x.png 2x,
                        img/icon-profile-80-px-default@3x.png 3x"
                 className="info-img">
            </img>

            <div className="info-name"><span className="info-name-bold">구자형</span> 사업부장/이사</div>
            <div className="info-team">SmartWork팀</div>
            <div className="info-comp">코오롱베니트</div>
        </div>
    )
}

InfoBox.defaultProps = {

}

export default InfoBox