import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { changeThemeAC } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some'];
export type ThemeType = 'dark' | 'red' | 'some'


function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme)
    const dispatch = useDispatch()

    // useDispatch, onChangeCallback

    const onChangeCallback = (theme: ThemeType) => {
        dispatch(changeThemeAC(theme))
    }

    return (
        <div>
            <div className={s[theme]}>
                <hr />
                <span className={s[theme + '-text']}>
                    <h3>homeworks 12</h3>
                </span>



                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}

                <hr />
            </div>
            <SuperSelect options={themes} onChangeOption={onChangeCallback} />
            <SuperRadio
                name={'radio'}
                options={themes}
                onChangeOption={onChangeCallback}
            />
        </div>

    );
}

export default HW12;
