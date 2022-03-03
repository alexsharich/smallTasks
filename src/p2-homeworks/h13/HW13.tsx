import React, { useEffect, useState } from "react";
import { todolistAPI } from "./requestAPI/RequestAPI";
import { Request } from './request/Request'
import { ErrorAC, SendAC } from "./bll/Reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";

export const HW13 = () => {
    let [state, setState] = useState('hello')


    const error = useSelector<AppStoreType, string>(state => state.checked.error)
    const dispatch = useDispatch()
    const checked = useSelector<AppStoreType, boolean>(state => state.checked.checked)

    useEffect(() => {
        todolistAPI.send(checked)
            .then(res => {
                // setState(res.data.yourBody.success)
                dispatch(SendAC(res.data.yourBody.success))
            })
            .catch(error => {
                dispatch(ErrorAC(error.message));
            })
    }, [])

    return (
        <div>
            <span >
                <h3>homeworks 13</h3>
            </span>

            <Request />

            {<div>{JSON.stringify(checked)}</div>}
            {<div>{JSON.stringify(error)}</div>}

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr />
        </div>
    )

}


