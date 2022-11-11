import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {
    const color = useSelector((state) => state.mode.color3)

    return (
        <div className="Footer" style={{'backgroundColor': color}}>
            <p>Footer Content</p>
        </div>
    )
}

export default Footer
