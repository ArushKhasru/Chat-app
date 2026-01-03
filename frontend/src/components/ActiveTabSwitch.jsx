import React from 'react'

export default function ActiveTabSwitch() {
  return (
    <div>
         <div className="px-6 flex gap-2 mb-4">
            <button className="flex-1 py-2 bg-[#7B61FF] rounded-xl text-sm font-medium shadow-lg shadow-[#7B61FF]/20">Chats</button>
            <button className="flex-1 py-2 bg-[#1C1B2B] rounded-xl text-sm font-medium hover:bg-[#32304d] transition-colors">Contacts</button>
          </div>
      
    </div>
  )
}
