import React, { memo } from 'react'

const OptChildTwo = ({ count, name }) => {
    console.log("#### OptChildTwo render ####")
    return (
        <div>{`OptChildTwo => Count: ${count}, Name: ${name}`}</div>
    )
}

export default OptChildTwo
// export default memo(OptChildTwo)