import { useState } from 'react'
import './Auth.style.scss'

import * as services from '../services'
import * as I from '../types'

type IProps = {
  goChat: (user: I.User) => void
}

export default function Auth(p: IProps) {
  const [username, setUsername] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    services.chat.enterChat({ username })
      .then(user => console.log(user))
      // .then(user => p.goChat(user)) 
  }

  return (
    <div className="Auth">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          required
          placeholder="Write your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Go chat!</button>
      </form>
    </div>
  )
}
