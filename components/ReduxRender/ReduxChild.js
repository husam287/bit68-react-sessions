import React from 'react'
import { useSelector } from 'react-redux'

export const ChildA = () => {
  console.log("#### Render Redux ChildA ####")

  return (
    <div>
      ChildA
      <ChildB />
    </div>
  )
}

export const ChildB = () => {
  console.log("#### Render Redux ChildB ####")

  return (
    <div>
      ChildB
      <ChildC />
    </div>
  )
}

export const ChildC = () => {
  console.log("#### Render Redux ChildC ####")

  const globalCounter = useSelector(state => state.app.globalCounter)

  return (
    <div>ChildC | {globalCounter}</div>
  )
}
