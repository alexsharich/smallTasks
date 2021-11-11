import React, { ChangeEvent, useState } from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {

    return (
        <div className={s.newMessage}>
            <div className={s.avatarBlock}>
                <img src={props.avatar} className={s.avatarImg} />
            <div className={s.angle}></div>
            </div>
            <div className={s.messageBlock}>
                <div className={s.messageName}>{props.name}</div>
                <div className={s.newMessageText}>{props.message}</div>
                <div className={s.messageTime}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
