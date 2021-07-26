import React from 'react'
import {PopUp} from '../components'

const TestPage = () => {
    return(
        <PopUp
            name={'곽동수'}
            class={'팀장/부장'}
            team={'SmartWork'}
            company={'코오롱베니트'}
        ></PopUp>
    )
}

TestPage.defaultProps = {

}

export default TestPage