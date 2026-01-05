import { useEffect } from 'react';
import { useChatStore } from '../store/useChatStore'
import UsersLoadingSkeleton from './UsersLoadingSkeleton';

export default function ContactList() {
  const { allContacts, getAllContacts, setSelectedUser, isUsersLoading } = useChatStore();
  useEffect(() => {
    getAllContacts()  
  }, [getAllContacts])

   if(isUsersLoading) return <UsersLoadingSkeleton />
  
  return (
    <>
      {allContacts.map((contact) => (
        <div key={contact._id} onClick={() => setSelectedUser(contact)}>
          <div className='avatar avatar-online'>
            <img src={contact.profilePic || "/avatar.png"} alt="" />
          </div>
          <h4>{contact.fullName}</h4>
        </div>


      ))}
    </>
  )
}
