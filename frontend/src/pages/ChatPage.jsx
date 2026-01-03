import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { useChatStore } from '../store/useChatStore';
import { 
  LogOut, 
  Search, 
  Settings, 
  User 
} from 'lucide-react';
import ProfileHeader from '../components/ProfileHeader';
import ActiveTabSwitch from '../components/ActiveTabSwitch';
import ChatList from '../components/ChatList';
import ContactsList from '../components/ContactList';
import ChatContainer from '../components/ChatContainer';
import NoConversationPlaceholder from '../components/NoConversationPlaceholder';

export default function ChatPage() {
  const { logout } = useAuthStore();
  const {activetab ,selectedUser} = useChatStore();
  const [message, setMessage] = useState('');

 

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D1B4E] via-[#1C1C2D] to-[#2D1B4E] flex items-center justify-center p-4 font-sans text-gray-200">
      
      {/* Main Container */}
      <div className="w-full max-w-5xl h-[85vh] bg-[#252331]/80 backdrop-blur-md rounded-3xl flex overflow-hidden shadow-2xl border border-white/10">

        
        {/* Left Side */}
        <div className="w-1/3 border-r border-white/5 flex flex-col bg-[#2A283E]/50">
          
          <ProfileHeader />
          {/* Search Bar */}
          <div className="px-6 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text" 
                placeholder="Search Chats or Contacts"
                className="w-full bg-[#1C1B2B] rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none border border-white/5 italic"
              />
            </div>
          </div>
          <ActiveTabSwitch />
          {/* <div className='flex-1 overflow-y-auto p-4 space-y-2'> */}
          <div>
            {activetab === 'chats' ? <ChatList /> : <ContactsList />}
          </div>
        </div>
        {/* Right Side */}
        <div className="w-2/3 flex flex-col">
        {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
          </div>
      </div>

      {/* Floating Logout Button */}
      <button 
        onClick={logout}
        className="absolute bottom-8 right-8 flex items-center gap-2 bg-[#1C1B2B] hover:bg-red-900/40 text-white px-6 py-3 rounded-full font-bold transition-all border border-white/10 shadow-xl group"
      >
        <span>Logout</span>
        <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>

    </div>
  );
}