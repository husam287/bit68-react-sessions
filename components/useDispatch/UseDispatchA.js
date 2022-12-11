import Text from 'components/General/Text'
import React from 'react'
import { useSelector } from 'react-redux'

const UseDispatchA = () => {
    console.log("#### UseDispatchA render ####")
    const globalCounter = useSelector(state => state.app.globalCounter)
    return (
        <div>
            <Text isTranslated={false}>
                {`Global Count : ${globalCounter}`}
            </Text>
        </div>
    )
}

export default UseDispatchA