import React from 'react';
import { Settings } from 'lucide-react';
import { useChatStore } from '../store/useChatStore';

export default function NoChatsFound() {
    const {activeTab, setActivetab} = useChatStore();
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-8 text-center animate-fadeIn">
      
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-[#7B61FF]/10 blur-3xl rounded-full" />
        <Settings 
          size={120} 
          className="text-[#3A384D] animate-[spin_10s_linear_infinite] relative z-10" 
        />
      </div>

      <div className="max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-white italic tracking-tight">
          No Conversations Yet
        </h2>
        <p className="text-gray-400 text-sm italic leading-relaxed">
          Bakbac, Where you can share Image and communicate with different users across the world
        </p>
      </div>

      <div className="mt-8">
        <button onClick={()=>setActivetab('contacts')} className="btn btn-ghost btn-sm text-[#7B61FF] hover:bg-[#7B61FF]/10 rounded-xl italic">
          Start a new chat from contacts
        </button>
      </div>

    </div>
  );
}