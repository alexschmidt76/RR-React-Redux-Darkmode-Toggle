import React from 'react'
import NavLink from './NavLink'
import { useSelector } from 'react-redux'

function Nav() {
    const color = useSelector((state) => state.mode.color3)

    return (
        <div className="Nav" style={{'backgroundColor': color}}>
            <NavLink content="Blog" />
            <NavLink content="About Me" />
            <NavLink content="Projects" />
            <NavLink content="Other" />
        </div>
    )
}

export default Nav
