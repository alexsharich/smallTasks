import React from "react";

type ActionType = SendACType | ErrorACType

const initState = {
    checked: true,
    error: ''
}

export const reducerSend = (state = initState, action: ActionType) => {
    switch (action.type) {
        case "SEND": {
            return {
                ...state,
                checked: action.checked
            };
        }
        case "ERROR": {
            return {
                ...state,
                error: action.error
            };
        }
        default: return state;
    }
}
type SendACType = {
    type: 'SEND',
    checked: boolean
}
export const SendAC = (checked: boolean) => {
    return {
        type: 'SEND',
        checked: checked
    }
}
type ErrorACType = {
    type: 'ERROR',
    error: string
}
export const ErrorAC = (error: string) => {
    return {
        type: 'ERROR',
        error: error
    }
}
