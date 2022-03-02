import { ThemeType } from "../HW12";

const initState = {
    theme: 'dark'
};

type ActionType = {
    type: 'CHANGE-THEME',
    theme: ThemeType
}

export const themeReducer = (state = initState, action: ActionType): any => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                ...state,
                theme: action.theme
            };
        }
        default: return state;
    }
};

export const changeThemeAC = (theme: ThemeType): ActionType => {
    return {
        type: 'CHANGE-THEME',
        theme: theme
    }
}; // fix any