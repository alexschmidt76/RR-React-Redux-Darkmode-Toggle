import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchMode } from '../features/modeSlice';

export default function ModeInput() {
    const mode = useSelector((state) => state.mode)
    const dispatch = useDispatch();

    return (
        <div style={{'backgroundColor': mode.color1}}>
            <button onClick={() => dispatch(switchMode())}>
                {
                    mode.darkMode ?
                    'Light Mode' :
                    'Dark Mode'
                }
            </button>
        </div>
    )
}