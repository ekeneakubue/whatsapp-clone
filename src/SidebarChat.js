import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

export default function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar/>
        <div className='sidebarChat__info'>
            <h2>user1</h2>
            <p>this is the last msg.</p>
        </div>        
    </div>
  )
}
