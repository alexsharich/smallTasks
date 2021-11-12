import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: any // need to fix any
    error: boolean | null // need to fix any
    totalUsers: number // need to fix any
    disabledButton: boolean
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { onKeyPress, name, setNameCallback, addUser, error, totalUsers, disabledButton } // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div className={s.inputButtonBlock}>
            <input value={name} onKeyPress={onKeyPress} onChange={setNameCallback} className={inputClass} />
            <span>{error}</span>
            <span className={s.totalUserStyle}>{totalUsers}</span>
            <button className={disabledButton === true ? s.disabledButton : s.addUserButton} onClick={addUser} disabled={disabledButton}>add</button>{error && <div className={s.errorMessage}>Please,write the text</div>}

        </div>
    )
}

export default Greeting
