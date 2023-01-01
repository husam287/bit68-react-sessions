import React, { memo } from 'react'

const WrongOptChildOne = ({ count, name, passedBabyComponent }) => {
    console.log("#### WrongOptChildOne render ####")
    return (
        <div>
            <div>
                {`WrongOptChildOne => Count: ${count}, Name: ${name}`}
            </div>

            {passedBabyComponent}
        </div>
    )
}

export default memo(WrongOptChildOne)