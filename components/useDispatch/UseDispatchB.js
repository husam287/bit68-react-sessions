import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCounter, resetGlobalCounterTo } from 'redux/appReducer'

const UseDispatchB = () => {
    console.log("### UseDispatchB render ####")
    
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button onClick={() => dispatch(addToCounter(1))}>Global Count +1</button>
                <button onClick={() => dispatch(resetGlobalCounterTo(0))}>Global Count to 0</button>
                <button onClick={() => dispatch(resetGlobalCounterTo(5))}>Global Count to 5</button>
            </div>
        </div>
    )
}

export default UseDispatchB