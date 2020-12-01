import './Chat.style.scss'
import * as I from '../types'

export default function Chat(p: { user: I.User }) {
  return <div>{p.user.name}</div>
}
