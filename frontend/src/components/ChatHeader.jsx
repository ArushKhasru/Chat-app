import React, { useEffect } from 'react';
import { useChatStore } from '../store/useChatStore';
import { X } from 'lucide-react';

export default function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") setSelectedUser(null);
    };
    window.addEventListener("keydown", handleEscKey);
    
    // Fixed: changed to removeEventListener
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  if (!selectedUser) return null;

  return (
    <div className="p-4 border-b border-white/5 bg-[#2A283E]/30 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar Section */}
          <div className="avatar">
            <div className="w-12 h-12 rounded-full border-2 border-[#7B61FF]/50 overflow-hidden shadow-lg shadow-[#7B61FF]/10">
              <img 
                src={selectedUser.profilePic || "/avatar.png"} 
                alt={selectedUser.fullName || selectedUser.fullname} 
                className="object-cover"
              />
            </div>
          </div>

          {/* User Info */}
          <div>
            <h3 className="font-bold text-white italic text-lg tracking-tight">
              {selectedUser.fullName || selectedUser.fullname}
            </h3>
            <p className="text-[10px] italic text-slate-500 font-bold">
              Online
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button 
          onClick={() => setSelectedUser(null)}
          className="p-2 hover:bg-white/5 rounded-full transition-colors group"
        >
          <X size={20} className="text-gray-400 group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  );
}