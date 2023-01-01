import Text from 'components/General/Text'
import React, { useState } from 'react'
import WrongOptChildOne from './WrongOptChildOne'
import OptChildTwo from './WrongOptChildOne'

export const WrongOptParentOne = ({ children }) => {
    console.log('#### WrongOptParentOne Render ####')

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

            <WrongOptChildOne
                name={name}
                passedBabyComponent={
                    "hiiiiii"
                }
            />

            {/* <WrongOptChildOne
                name={name}
                passedBabyComponent={
                    <strong>Waa2222</strong>
                }
            /> */}

        </div>
    )
}