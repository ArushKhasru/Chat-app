import React from 'react'
import { useAuthStore } from '../store/useAuthStore'


export default function ChatPage() {
  const {logout} = useAuthStore();
  return (
    <div>
      <button  className="w-full flex items-center justify-center gap-2
                     rounded-lg bg-indigo-600 py-3 text-white font-semibold
                     hover:bg-indigo-500 active:scale-[0.98]
                     transition disabled:opacity-60" onClick={logout}>Logout</button>
    </div>
  )
}
