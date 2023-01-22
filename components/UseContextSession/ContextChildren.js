import React, { useContext } from 'react'
import { counterContext } from './ContextParent'

export const ChildA = () => {
  console.log("#### Render ChildA ####")

  return (
    <div>
      ChildA
      <ChildB />
    </div>
  )
}

export const ChildB = () => {
  console.log("#### Render ChildB ####")

  return (
    <div>
      ChildB
      <ChildC />
    </div>
  )
}

export const ChildC = () => {
  console.log("#### Render ChildC ####")

  const count = useContext(counterContext)
  return (
    <div>ChildC | {count}</div>
  )
}
