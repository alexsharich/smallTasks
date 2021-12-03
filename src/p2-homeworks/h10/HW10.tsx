import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import RocketPreloader from './assets/images/Rocket.gif'

function HW10() {
    // useSelector, useDispatch
    let dispatch = useDispatch()
    let isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)



    const setLoading = () => {
        dispatch(loadingAC(true))
        // setTimeout
        console.log('loading...')
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div className="HWBlock">

            <h3>homeworks 10</h3>

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div><img src={RocketPreloader} /></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}

        </div>
    )
}

export default HW10
