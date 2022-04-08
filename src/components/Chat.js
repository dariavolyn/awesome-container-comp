import React, { useEffect, useState } from 'react';
import user from '../images/user_icon.svg';
import acc from '../images/acc_icon.svg';
import typing from '../images/typing.svg';

function Chat(props) {
    const [firstMsgShow, setFirstMsgShow] = useState(false);
    const [typingShow, setTypingShow] = useState(false);
    const [secondMsgShow, setSecondMsgShow] = useState(false);
    const [thirdMsgShow, setThirdMsgShow] = useState(false);
    const [fourthMsgShow, setFourthMsgShow] = useState(false);
    const [fifthMsgShow, setFifthMsgShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setFirstMsgShow(true), 1500);
        setTimeout(() => setTypingShow(true), 2500);
        setTimeout(() => setSecondMsgShow(true), 4000);
        setTimeout(() => setThirdMsgShow(true), 5000);
        setTimeout(() => setFourthMsgShow(true), 6000);
        setTimeout(() => setFifthMsgShow(true), 7500);
    }, [])
    
    function onClick() {
        props.handleFormOpen();
    }

    return (
        <div className='chat'>
            <img className='chat__icon chat__icon_type_user' src={user}></img>

            <div className={`chat__msg chat__msg_type_user ${firstMsgShow && 'chat__msg_visible'}`}>
                <p className='chat__text chat__text_type_user'>What do you do?</p>
            </div>

           {!secondMsgShow && typingShow && <img className={`chat__typing chat__msg_visible`} src={typing} />}

            <div className={`chat__msg chat__msg_type_acc ${secondMsgShow && 'chat__msg_visible'}`}>
                <p className='chat__text chat__text_type_acc'>We provide reusable containers for restaurants, pick them up from users, clean them, and give them back to your restaurant.</p>
            </div>

            <div className={`chat__msg chat__msg_type_user ${thirdMsgShow && 'chat__msg_visible'}`}>
                <p className='chat__text chat__text_type_user'>Awesome!</p>
            </div>

            <div className={`chat__msg chat__msg_type_user ${fourthMsgShow && 'chat__msg_visible'}`}>
                <button className='chat__text chat__button chat__text_type_user' onClick={onClick}>I want to work with you!</button>
            </div>

            <div className={`chat__msg chat__msg_type_acc ${fifthMsgShow && 'chat__msg_visible'}`}>
                <p className='chat__text chat__text_type_acc'>Cool! We operate in Singapore and are planning to open in many other countires soon!</p>
            </div>

            <img className='chat__icon chat__icon_type_acc' src={acc}></img>
        </div>
    )
}

export default Chat;