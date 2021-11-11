import React from 'react'
import { AffairType } from './HW2'
import s from './Affairs.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: () => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback()
    }// need to fix

    return (
        <div className={s.tasksContainer}>
            <div className={s.taskBlock}>
                <div className={s.taskName}>
                    {props.affair.name}
                </div>
                <div className={s.priorityName}>
                    {props.affair.priority}
                </div>


                <button className ='deleteTaskButton' onClick={deleteCallback}>X</button>
            </div>
        </div>

    )
}

export default Affair
