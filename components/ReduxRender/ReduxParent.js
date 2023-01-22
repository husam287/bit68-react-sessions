import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCounter } from 'redux/appReducer'
import { ChildA } from './ReduxChild'

export const ReduxParent = () => {
    console.log("#### Render Context Parent ####")

    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(addToCounter(1))}>Count +1</button>

            <ChildA />
        </div>
    )
}
