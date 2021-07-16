import React from 'react'
import '../styles/TopMenu.scss'

/**
 * TopMenu Component
 * 
 * @props
 * - 
 * 
 * @returns 
 */

const TopMenu = () => {
    return(
        <div className="top-menu-wrapper">
            <img src="img/icon-24-px-call.png"
                 alt="call_img"
                 srcset="img/icon-24-px-call@2x.png 2x,
                        img/icon-24-px-call@3x.png 3x"
                 className="call-img">
            </img>
            <span className="top-menu-name">김철수 / Mobile 융합팀</span>
            <img src="img/icon-controller.png"
                 alt="controller_img"
                 srcset="img/icon-controller@2x.png 2x,
                        img/icon-controller@3x.png 3x"
                 className="controller-img">
            </img>
        </div>
    )
}

TopMenu.defaultProps = {
    
}


export default TopMenu