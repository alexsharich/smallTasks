const SET_IS_LOADING = 'SET-IS-LOADING'

type ActionType = ReturnType<typeof loadingAC>

const initState = {
    isLoading: false
}

type initState = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: ActionType): initState => { // fix any
    switch (action.type) {
        case 'SET-IS-LOADING': {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'SET-IS-LOADING',
        isLoading: isLoading
    } as const
} // fix any