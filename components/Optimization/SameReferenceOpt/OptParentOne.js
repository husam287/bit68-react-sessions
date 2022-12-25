import Text from 'components/General/Text'
import React, { useState } from 'react'
import OptChildOne from './OptChildTwo'

export const OptParentOne = ({ children }) => {
    console.log('#### OptParentOne Render ####')

    const [count, setCount] = useState(0)

    return (
        <div className='text-dark d-flex justify-content-center flex-column align-items-center mt-5'>
            <div>
                <button onClick={() => setCount(c => c + 1)}>Count +1</button>
                <button onClick={() => setCount(0)}>Count to 0</button>
                <button onClick={() => setCount(5)}>Count to 5</button>
            </div>
            <div>
                <Text isTranslated={false}>
                    {`Count : ${count}`}
                </Text>
            </div>

            {children}
        </div>
    )
}