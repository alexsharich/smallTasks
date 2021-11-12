import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean | null>(null) // need to fix any
    const [disabledButton, setDisabledButton] = useState<boolean>(true)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (e.currentTarget.value.trim() === '') {
            setDisabledButton(true)
            setError(true)
        }
        setDisabledButton(false)
        setName(e.currentTarget.value.trim())
        setError(false) // need to fix
    }
    const addUser = () => {
        if (name.trim() === '') {
            setDisabledButton(true)
            setError(true)
            return
        }
        addUserCallback(name)
        alert(name)
        setName('') // need to fix
    }
    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addUser()
        }
    }


    const totalUsers = users.length - 1 // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            disabledButton={disabledButton}
            onKeyPress={onKeyPress}
        />
    )
}

export default GreetingContainer
