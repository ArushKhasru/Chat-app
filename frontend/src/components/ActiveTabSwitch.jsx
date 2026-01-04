import React from 'react';
import { useChatStore } from '../store/useChatStore';
import { MessageSquare, Users } from 'lucide-react';

export default function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="px-6 mb-6">
      <div className="flex gap-2 p-1 bg-[#1C1B2B]/50 rounded-2xl border border-white/5">
        
        {/* CHATS BUTTON */}
        <button
          onClick={() => setActiveTab('chats')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
            activeTab === 'chats'
              ? 'bg-[#7B61FF] text-white shadow-lg shadow-[#7B61FF]/30'
              : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
          }`}
        >
          <MessageSquare size={16} />
          <span>Chats</span>
        </button>

        {/* CONTACTS BUTTON */}
        <button
          onClick={() => setActiveTab('contacts')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
            activeTab === 'contacts'
              ? 'bg-[#7B61FF] text-white shadow-lg shadow-[#7B61FF]/30'
              : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
          }`}
        >
          <Users size={16} />
          <span>Contacts</span>
        </button>

      </div>
    </div>
  );
}
