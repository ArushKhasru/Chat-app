import React from 'react';
import { MessageSquarePlus, Send } from 'lucide-react';
import { useChatStore } from '../store/useChatStore';

export default function NoChatHistoryPlaceholder() {
  const { selectedUser } = useChatStore();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-12 text-center animate-fadeIn">
      
      {/* 🔹 ICON SECTION */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-[#7B61FF]/20 blur-[80px] rounded-full" />
        
        <div className="relative z-10 w-24 h-24 rounded-3xl bg-[#2A283E] border border-[#7B61FF]/30 flex items-center justify-center shadow-2xl rotate-3">
          <MessageSquarePlus 
            size={48} 
            className="text-[#7B61FF]" 
          />
        </div>
        
        {/* Floating Mini Icon */}
        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#7B61FF] flex items-center justify-center shadow-lg animate-bounce">
          <Send size={18} className="text-white -rotate-12" />
        </div>
      </div>

      {/* 🔹 TEXT CONTENT */}
      <div className="max-w-sm space-y-3">
        <h2 className="text-2xl font-bold text-white italic tracking-tight">
          Say Hello to {selectedUser?.fullName || selectedUser?.fullname || "your friend"}!
        </h2>
        <p className="text-gray-400 text-sm italic leading-relaxed px-4">
          This is the beginning of your legendary conversation. Don't be shy, send the first message or a photo!
        </p>
      </div>

      {/* 🔹 QUICK ACTION SUGGESTION */}
      <div className="mt-10 py-3 px-6 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
        <span className="text-xs text-gray-500 italic">Try: "Hey, how's it going? 👋"</span>
      </div>

    </div>
  );
}