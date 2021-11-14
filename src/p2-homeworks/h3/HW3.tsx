import React, { useState } from 'react'
import { v1 } from 'uuid'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        let newUser = { _id: v1(), name: name }
        setUsers([...users, newUser]) // need to fix
    }

    return (
        <div className='HWBlock'>
            
            <h3>homeworks 3 </h3>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback} />

           
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
           
        </div>
    )
}

export default HW3
