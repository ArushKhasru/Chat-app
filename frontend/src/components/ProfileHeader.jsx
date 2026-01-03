import React from 'react'
import { Settings, User } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <div>
        <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 flex items-center justify-center border-2 border-white/20">
                <User size={24} />
              </div>
              <span className="font-bold text-lg italic tracking-wide">User_name</span>
            </div>
            <Settings className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={20} />
          </div>
      
    </div>
  )
}
