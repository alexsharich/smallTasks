import React from "react";

type ActionType = SendACType

const initState = {
    checked: true
}

export const reducerSend = (state = initState, action: ActionType) => {
    switch (action.type) {
        case "SEND": {
            return {
                ...state,
                checked: action.checked
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