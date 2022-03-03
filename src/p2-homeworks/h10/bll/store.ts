import { combineReducers, createStore } from 'redux';
import { themeReducer } from '../../h12/bll/themeReducer';
import { reducerSend } from '../../h13/bll/Reducer';
import { loadingReducer } from './loadingReducer'

const reducers = combineReducers({
    loading: loadingReducer,
    theme:themeReducer,
    checked:reducerSend

})

const store = createStore(reducers);

export default store;

export type AppStoreType = ReturnType<typeof reducers>

// // @ts-ignore
//window.store = store // for dev
