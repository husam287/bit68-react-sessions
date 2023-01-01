import React, { memo } from 'react'

const WrongOptChildTwo = ({ count, name, onClick, staticNameList }) => {
    console.log("#### WrongOptChildTwo render ####")
    return (
        <div>
            <div>{`WrongOptChildTwo => Count: ${count}, Name: ${name}`}</div>
            <div>
                {staticNameList?.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <button onClick={onClick}>Child Button</button>
        </div>
    )
}

export default memo(WrongOptChildTwo)