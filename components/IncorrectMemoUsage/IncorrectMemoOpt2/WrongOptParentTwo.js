import Text from 'components/General/Text'
import React, { useState } from 'react'
import WrongOptChildTwo from './WrongOptChildTwo'

export const WrongOptParentTwo = ({ children }) => {
    console.log('#### WrongOptParentTwo Render ####')

    const [count, setCount] = useState(0)
    const [name, setName] = useState("Hossam")

    const onLogHossamName = () => {
        console.log("Hossam")
    }

    const arrayStatic = [
        "hoss",
        "hossam",
        "hessam"
    ]

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

            <WrongOptChildTwo
                name={name}
                staticNameList={arrayStatic}
                onClick={onLogHossamName}
            />

        </div>
    )
}