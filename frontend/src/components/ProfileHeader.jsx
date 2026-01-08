import React, { useState, useRef } from 'react';
import { VolumeOff, Volume2Icon, MessageSquare, LogOutIcon, Camera } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { useChatStore } from '../store/useChatStore';
import Feedback from './Feedback';

export default function ProfileHeader() {
  const mouseClickSound = new Audio("/sounds/mouse-click.mp3");
  const { authUser, updateProfile, logout } = useAuthStore();
  const { isSoundEnabled, toggleSound } = useChatStore();

  const [selectedImg, setSelectedImg] = useState();
  const [showFeedback, setShowFeedback] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="p-5 border-b border-white/5 bg-[#1C1B2B]/30 backdrop-blur-md">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full ring-2 ring-[#7B61FF]/50 ring-offset-2 ring-offset-[#1C1B2B] overflow-hidden">
                <img
                  src={selectedImg || authUser.profilePic || "/avatar.png"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <button
              onClick={() => fileInputRef.current.click()}
              className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <Camera className="text-white size-4" />
            </button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-white italic tracking-tight text-sm leading-tight">
              {authUser.fullName || authUser.fullname}
            </span>
            <div className="flex items-center gap-1.5">
              <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[#7B61FF] text-[9px] font-bold uppercase tracking-widest">Online</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-0.5">

          <button
            className="p-2 rounded-xl hover:bg-white/5 text-gray-400 hover:text-[#7B61FF] transition-all active:scale-90 cursor-pointer"
            onClick={() => {
              mouseClickSound.currentTime = 0;
              mouseClickSound.play().catch((error) => console.log("Audio play failed", error));
              toggleSound();
            }}
          >
            {isSoundEnabled ? <Volume2Icon size={18} /> : <VolumeOff size={18} />}
          </button>

          <button
            onClick={logout}
            className="md:hidden p-2 rounded-xl hover:bg-red-500/10 text-gray-400 hover:text-red-500 transition-all active:scale-90 cursor-pointer"
          >
            <LogOutIcon size={18} />
          </button>
        </div>
      </div>


    </div>
  );
}