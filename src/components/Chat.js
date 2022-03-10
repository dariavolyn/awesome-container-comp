import React, { useEffect, useState } from 'react';
import user from '../images/user_icon.svg';
import acc from '../images/acc_icon.svg';

function Chat() {
    const [firstMsgShow, setFirstMsgShow] = useState(false);
    const [secondMsgShow, setSecondMsgShow] = useState(false);
    const [thirdMsgShow, setThirdMsgShow] = useState(false);
    const [fourthMsgShow, setFourthMsgShow] = useState(false);
    const [fifthMsgShow, setFifthMsgShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setFirstMsgShow(true), 1000);
        setTimeout(() => setSecondMsgShow(true), 2000);
        setTimeout(() => setThirdMsgShow(true), 3000);
        setTimeout(() => setFourthMsgShow(true), 4000);
        setTimeout(() => setFifthMsgShow(true), 5000);
    }, [])

    return (
        <div className='chat'>
            <img className='chat__icon chat__icon_type_user' src={user}></img>

            <div className={`chat__msg chat__msg_type_user ${firstMsgShow && 'chat_visible'}`}>
                <p className='chat__text chat__text_type_user'>What do you do?</p>
            </div>

            <div className={`chat__msg chat__msg_type_acc ${secondMsgShow && 'chat_visible'}`}>
                <p className='chat__text chat__text_type_acc'>We provide reusable containers for restaurants, pick them up from users, clean them and give them back to your restaurant</p>
            </div>

            <div className={`chat__msg chat__msg_type_user ${thirdMsgShow && 'chat_visible'}`}>
                <p className='chat__text chat__text_type_user'>Awesome!</p>
            </div>

            <div className={`chat__msg chat__msg_type_user chat__button ${fourthMsgShow && 'chat_visible'}`}>
                <p className='chat__text chat__text_type_user'>I want to work with you!</p>
            </div>

            <div className={`chat__msg chat__msg_type_acc ${fifthMsgShow && 'chat_visible'}`}>
                <p className='chat__text chat__text_type_acc'>Cool! We operate in Singapore and are planning to open in many onther countires soon!</p>
            </div>

            <img className='chat__icon chat__icon_type_acc' src={acc}></img>
        </div>
    )
}

export default Chat;