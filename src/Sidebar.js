import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon  from '@mui/icons-material/SearchOutlined'
import {Avatar, IconButton} from '@mui/material'
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <Avatar src='https://media-exp1.licdn.com/dms/image/C5603AQEcYBs7pGEj_w/profile-displayphoto-shrink_800_800/0/1517586348086?e=2147483647&v=beta&t=QQ-UTL2kcx0DguLcejsy3MLQsuw7-teURDIOqaFobAA'/>
            <div className='sidebar__headerRight'>
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>                
            </div>
        </div>

        <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
                <SearchOutlinedIcon />
                <input placeholder='Search new Chat' type='text' />
            </div>
        </div>

        <div className='sidebar__chats'>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>

    </div>
  )
}
