import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../h10/bll/store";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import { SendAC } from "../bll/Reducer";
import { todolistAPI } from "../requestAPI/RequestAPI";

/* type RequestPropsType = {
    state:boolean
} */

export const Request = () => {

    let checked = useSelector<AppStoreType, boolean>(state => state.checked.checked)
    const dispatch = useDispatch()
    //let [value, setValue] = useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        //setValue(e.currentTarget.checked)
        dispatch(SendAC(e.currentTarget.checked))
    }

    const onClickHandler = () => {
        todolistAPI.send(checked)
    }


    return (
        <div>
            <button onClick={onClickHandler}>
                Send
            </button>
            <input type="checkbox" checked={checked} onChange={onChangeHandler} />
        </div>
    )
}