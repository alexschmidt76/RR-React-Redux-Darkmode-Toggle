import React from 'react'
import { useSelector } from 'react-redux'

function Photo() {
    const imgSrc = useSelector((state) => state.mode.photo)

    return (
        <div className="Photo">
            <img src={imgSrc} alt="author" />
        </div>
    )
}

export default Photo
