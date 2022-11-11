import React from 'react'
import { useSelector } from 'react-redux'

function NavLink(props) {
    const color = useSelector((state) => state.mode.color5)

    return (
        <div className="NavLink" style={{'backgroundColor': color}}>
            <p>{props.content}</p>
        </div>
    )
}

export default NavLink
