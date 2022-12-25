import React, { useState } from 'react'
import OptChildOne from './OptChildTwo'
import { OptParentOne } from './OptParentOne'

const SameReferenceOpt = () => {
    // const [globalCounter, setGlobalCounter] = useState(0)
    return (
        <div>
            {/* <div className='text-center'>
                <button onClick={() => setGlobalCounter(c => c + 1)}>Global Count +1 ({globalCounter})</button>
            </div> */}

            <OptParentOne>
                <OptChildOne />
            </OptParentOne>
        </div>
    )
}

export default SameReferenceOpt