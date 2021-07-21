import React, { useState } from 'react';
import styles from './KeyPad.scss';
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
  const onClick2 = e => {
    e.preventDefault();
    if (!number) return;
    // voipControl.voipDialUp(number);
  };

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

  console.log(styles.noDrag)

  return (
    <div>
      <textarea
        onChange={onChange}
        value={viewNumber(number)}
        maxLength="19"
        style={{
          color: 'black',
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
          verticalAlign: 'middle'
        }}
      />
      {/*<div className={`${styles.keypadArea} ${styles.noDrag}`}>*/}
      <div className={'keypadArea styles'}>
        <div className={'container'}>
          <div className={'row'}>
            <a onClick={onClick}>1</a>
            <a onClick={onClick}>2</a>
            <a onClick={onClick}>3</a>
          </div>
          <div className={'row'}>
            <a onClick={onClick}>4</a>
            <a onClick={onClick}>5</a>
            <a onClick={onClick}>6</a>
          </div>
          <div className={'row'}>
            <a onClick={onClick}>7</a>
            <a onClick={onClick}>8</a>
            <a onClick={onClick}>9</a>
          </div>
          <div className={'row'}>
            <a onClick={onClick}>*</a>
            <a onClick={onClick}>0</a>
            <a onClick={onClick}>#</a>
          </div>
          {Props.btnFlag ? (
            <div className={'row'}>
              <a className={'empty'}>
                <i className="fa fa-times" />
              </a>
              <a onClick={onClick2} className={'call'}>
                <i className="fa fa-phone" />
              </a>
              <a onClick={onClick3} className={'remove'}>
                <i className="fa fa-window-close" />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default KeyPad;
