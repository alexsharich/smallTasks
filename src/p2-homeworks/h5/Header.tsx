import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './Routes'
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link}>Junior+</NavLink>
            <div className={s.block} ></div>
        </div>
    )
}

export default Header
