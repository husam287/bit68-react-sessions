import React, { createContext, useState } from 'react'
import { ChildA } from './ContextChildren'

export const counterContext = createContext()
const CounterProvider = counterContext.Provider

export const ContextParent = () => {
    console.log("#### Render Context Parent ####")

    const [counter, setCounter] = useState(0)
    return (
        <div>
            <button onClick={() => setCounter(c => c + 1)}>Count +1</button>

            <CounterProvider value={counter}>
                <ChildA />
            </CounterProvider>
        </div>
    )
}
