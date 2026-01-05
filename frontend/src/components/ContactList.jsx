import React, { useEffect } from 'react';
import { useChatStore } from '../store/useChatStore';
import UsersLoadingSkeleton from './UsersLoadingSkeleton';

export default function ContactList() {
  const { allContacts, getAllContacts, setSelectedUser, isUsersLoading, selectedUser } = useChatStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <div className="space-y-2">
      {allContacts.map((contact) => (
        <div
          key={contact._id}
          onClick={() => setSelectedUser(contact)}
          className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all duration-200 cursor-pointer group
            ${selectedUser?._id === contact._id 
              ? "bg-[#7B61FF]/20 border border-[#7B61FF]/30 shadow-lg" 
              : "hover:bg-white/5 border border-transparent"
            }`}
        >
          {/* Avatar Section */}
          <div className="relative flex-shrink-0">
            <div className="avatar avatar-online">
              <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden bg-[#3A384D]">
                <img 
                  src={contact.profilePic || "/avatar.png"} 
                  alt={contact.fullname} 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Name Section */}
          <div className="flex-1 text-left min-w-0">
            <h4 className="font-bold text-gray-200 italic truncate group-hover:text-white transition-colors">
              {contact.fullname}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}