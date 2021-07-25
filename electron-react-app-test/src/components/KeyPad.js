import React, {useState} from 'react';
import {CallButtonBox, KeyButton} from "./index";
// import voipControl from '../../utils/voipHandler';

const KeyPad = Props => {
    const [number, setNumber] = useState('');

    const onClick = (e: any) => {
        if (!e.target.innerText && isNaN(Number(e.target.innerText))) return;
        if (number.length > 18) return;
        setNumber(number + e.target.innerText);
    };
    const onChange = (e: any) => {
        const inputData = e.target.value
            .replace(/\*/g, '')
            .replace(/\#/g, '')
            .replace(/\-/g, '');
        if (number.length > 20 || isNaN(Number(inputData))) return;
        setNumber(e.target.value);
    };
    const callOnEvent = e => {
        e.preventDefault();
        if (!number) return;
        console.log('Call On!!')
        console.log(number)
        // voipControl.voipDialUp(number);
    };
    const callOffEvent = e => {
        e.preventDefault();
        console.log('Call off!')
    }

    const onClick3 = e => {
        e.preventDefault();
        console.log(e);
        // voipControl.voipDialUp('01038017922');
        if (!number) return;
        const minusNumber = number.slice(0, -1);
        setNumber(minusNumber);
    };

    const viewNumber = num => {
        return num
            .replace(/[^0-9\*#]/g, '')
            .replace(
                /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
                '$1-$2-$3'
            )
            .replace('--', '-');
    };

    /* --- KeyPad View --- */
    const keyPadNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#']
    const padCount = 3
    const padView = []

    const makePadItem = num => {
        const view = []
        const start = num * 3
        for (let i = start; i < start + padCount; i++) {
            view.push(<KeyButton keyFunction={onClick} keyNumber={keyPadNumber[i]}/>)
        }
        return view
    }

    const makePadView = () => {
        for (let i = 0; i < keyPadNumber.length / padCount; i++)
            padView.push(
                <div className={'row'}>
                    {makePadItem(i)}
                </div>
            )
    }
    makePadView()

    return (
        <div>

            <textarea
                style={{  color: 'black',
                    height: '70px',
                    fontSize: '24px',
                    padding: '40px 0 10px 0',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    whiteSpace: 'pre-line',
                    wordBreak: 'break-all',
                    outlineOffset: '0px',
                    width: '100%',
                    border: 'none',
                    outline: 'none',
                    resize: 'none',
                    verticalAlign: 'middle',}}
                onChange={onChange}
                value={viewNumber(number)}
                maxLength="19"
            />

            <div className={'keypadArea styles'}>
                <div className={'container'}>
                    {padView}
                    <div className={'row key-c'}>
                        <CallButtonBox pageType={'a'} callOnEvent={callOnEvent}
                                       callOffEvent={callOffEvent}></CallButtonBox>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default KeyPad;
