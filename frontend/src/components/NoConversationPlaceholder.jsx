
import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function NoConversationPlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-12 text-center bg-[#1E1C2B]/20 animate-fadeIn">
      
      {/* 🔹 LARGE ANIMATED ICON SECTION */}
      <div className="relative mb-10">
        {/* Soft glow background */}
        <div className="absolute inset-0 bg-[#7B61FF]/10 blur-[100px] rounded-full scale-150" />
        
        <div className="relative z-10 w-32 h-32 rounded-[2.5rem] bg-[#2A283E] border border-white/10 flex items-center justify-center shadow-2xl animate-bounce-slow">
          <MessageSquare 
            size={60} 
            className="text-[#7B61FF] drop-shadow-[0_0_15px_rgba(123,97,255,0.5)]" 
          />
        </div>
      </div>

      {/* 🔹 TEXT CONTENT */}
      <div className="max-w-md space-y-4">
        <h2 className="text-3xl font-bold text-white italic tracking-tighter">
          Welcome to Bakbak
        </h2>
        <p className="text-gray-400 text-base italic leading-relaxed">
          Select a conversation from the sidebar to start chatting or share images with your friends.
        </p>
      </div>

      {/* 🔹 DECORATIVE ELEMENT (DAISYUI) */}
      <div className="mt-12 flex items-center gap-3 opacity-20">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Secure Messaging</span>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white" />
      </div>

    </div>
  );
}