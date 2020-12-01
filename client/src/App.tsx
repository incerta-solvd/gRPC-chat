import { useState } from 'react'
import './reset.scss'

import Auth from './components/Auth'
import Chat from './components/Chat'

import * as I from './types'

export default function App() {
  const [user, setUser] = useState<I.User>()

  if (!user) {
    return <Auth goChat={setUser} />
  }

  return <Chat user={user} />
}
