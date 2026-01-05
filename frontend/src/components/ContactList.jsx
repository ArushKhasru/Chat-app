import React, { useEffect } from 'react';
import { useChatStore } from '../store/useChatStore';
import UsersLoadingSkeleton from './UsersLoadingSkeleton';

export default function ContactList() {
  const { allContacts, getAllContacts, setSelectedUser, isUsersLoading, selectedUser } = useChatStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  if (!allContacts || allContacts.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 italic text-sm">No contacts found</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {allContacts.map((contact) => (
        <button
          key={contact._id}
          onClick={() => setSelectedUser(contact)}
          className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all duration-200 group
            ${selectedUser?._id === contact._id 
              ? "bg-[#7B61FF] text-white shadow-lg shadow-[#7B61FF]/30" 
              : "hover:bg-white/5 border border-transparent text-gray-300"
            }`}
        >
          {/* Avatar Section */}
          <div className="relative flex-shrink-0">
            <div className={`avatar ${contact.isOnline ? "online" : "offline"}`}>
              <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden bg-[#3A384D]">
                <img 
                  src={contact.profilePic || "/avatar.png"} 
                  alt={contact.fullName} 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1 text-left min-w-0">
            <h4 className="font-bold italic truncate transition-colors">
              {contact.fullName}
            </h4>
            <p className={`text-[10px] uppercase tracking-widest font-semibold ${
              selectedUser?._id === contact._id ? "text-white/70" : "text-gray-500"
            }`}>
              {contact.isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}