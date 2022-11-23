import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon  from '@material-ui/icons/SearchOutlined'
import {Avatar, IconButton} from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons';
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
