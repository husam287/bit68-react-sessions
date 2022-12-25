import Text from 'components/General/Text'
import React, { useState } from 'react'
import OptChildTwo from './OptChildTwo'

export const OptParentTwo = ({ children }) => {
    console.log('#### OptParentTwo Render ####')

    const [count, setCount] = useState(0)
    const [name, setName] = useState("Hossam")

    return (
        <div className='text-dark d-flex justify-content-center flex-column align-items-center mt-5'>
            <div>
                <button onClick={() => setCount(c => c + 1)}>Count +1</button>
                <button onClick={() => setName("Ely Kan Hossam")}>Change Name</button>
            </div>
            <div>
                <Text isTranslated={false}>
                    {`Count : ${count}`}
                </Text>
            </div>

            <OptChildTwo count={count} />
            {/* <OptChildTwo count={count} name={name} /> */}
            
        </div>
    )
}