import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import UsersLoadingSkeleton from './UsersLoadingSkeleton';
import NoChatsFound from './NoChatsFound';
export default function ChatList() {
  const { chats, isUsersLoading, setSelectedUser, getChatPartners } = useChatStore();

  useEffect(() => {
   getChatPartners();
  }, [getChatPartners])

  if(isUsersLoading) return <UsersLoadingSkeleton />
  if (chats.length === 0) return <NoChatsFound />
  

  return (
    <>
      {chats.map((chat)=>(
        <div key = {chat._id} onClick={()=>setSelectedUser(chat)}>
          <div className='avatar avatar-online'>
            <img src={chat.profilePic || "/avatar.png"} alt="" />
          </div>
          <h4>{chat.fullName}</h4>
        </div>
       
        
      ))}
    </>
  )
}
