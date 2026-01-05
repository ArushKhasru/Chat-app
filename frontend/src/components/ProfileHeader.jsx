import React from 'react'
// import { Settings } from 'lucide-react';
import { useState, useRef } from 'react';
import { VolumeOff, Volume2Icon } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { useChatStore } from '../store/useChatStore';


export default function ProfileHeader() {
  const mouseClickSound = new Audio("/sounds/mouse-click.mp3")
  const { authUser, updateProfile } = useAuthStore();
  const { isSoundEnabled, toggleSound } = useChatStore();

  const [selectedImg, setSelectedImg] = useState();
  const fileInputRef = useRef(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if(!file) return 

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onloadend =async ()=>{
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({profilePic: base64Image });
    }


  }
  return (
    <div>
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center ">
            {/* AVATAR */}
            <div className="avatar avatar-online ">
              <div className="relative group">
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="relative w-14 h-14 rounded-full overflow-hidden cursor-pointer border-2 border-white/10"
                >
                  <img
                    src={selectedImg || authUser.profilePic || "/avatar.png"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm   text-center ">
                      Change
                    </span>
                  </div>
                </button>

                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </div>
          </div>
          <div>
            <span className="font-bold text-lg italic tracking-wide">{authUser.fullname}</span>
            <p className='text-slate-400 text-sm'>Online</p>

          </div>
        </div>
        {/* <Settings className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={20} /> */}
        {/* Sound Toogle BTN */}
        <button className='cursor-pointer' onClick={() => {
          //playclick sound before toggling
          mouseClickSound.currentTime = 0;//reset to start
          mouseClickSound.play().catch((error) => console.log("Audio play failed", error));
          toggleSound();
        }}>
          {isSoundEnabled ? <Volume2Icon className='size-5' /> : <VolumeOff className='size-5' />}
        </button>

      </div>

    </div>
  )
}
