import React from 'react';
import user from '../images/user_icon.svg';
import acc from '../images/acc_icon.svg';

function Chat() {
    return (
        <div className='chat'>
            <img className='chat__icon chat__icon_type_user' src={user}></img>

            <div className='chat__msg chat__msg_type_user'>
                <p className='chat__text chat__text_type_user'>What do you do?</p>
            </div>

            <div className='chat__msg chat__msg_type_acc'>
                <p className='chat__text chat__text_type_acc'>We provide reusable containers for restaurants, pick them up from users, clean them and give them back to your restaurant</p>
            </div>

            <div className='chat__msg chat__msg_type_user'>
                <p className='chat__text chat__text_type_user'>Awesome!</p>
            </div>

            <div className='chat__msg chat__msg_type_user chat__button'>
                <p className='chat__text chat__text_type_user'>I want to work with you!</p>
            </div>

            <div className='chat__msg chat__msg_type_acc'>
                <p className='chat__text chat__text_type_acc'>Cool! We operate in Singapore and are planning to open in many onther countires soon!</p>
            </div>

            <img className='chat__icon chat__icon_type_acc' src={acc}></img>
        </div>
    )
}

export default Chat;