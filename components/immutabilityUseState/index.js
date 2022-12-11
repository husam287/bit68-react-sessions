import Text from 'components/General/Text'
import React, { useState } from 'react'

export const ImmutabilityUseState = () => {
  console.log('#### ImmutabilityUseState Render ####')

  const [users, setUsers] = useState(['hossam', 'tarek', 'hossam tany', 'hossam bardo'])

  const addNewUser = () => {
    users.push('wa7d geded')
    setUsers(users)
  }

  const correctAddUser = () => {
    const newUsers = [...users]
    newUsers.push('wa7d geded')
    setUsers(newUsers)
  }

  return (
    <div className='text-dark d-flex justify-content-center flex-column align-items-center mt-5'>
      <div>
        {users?.map((item, index) => (
          <Text key={`${index}`} isTranslated={false}>
            {`${index + 1}) ${item}`}
          </Text>
        ))
        }
      </div>

      <div>
        <button onClick={addNewUser}>+ Add New User</button>
      </div>
    </div>
  )
}