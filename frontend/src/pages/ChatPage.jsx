import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare } from "lucide-react";
import { useState } from "react";
import Feedback from "../components/Feedback";

import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();
  const { logout } = useAuthStore();
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D1B4E] via-[#1C1C2D] to-[#2D1B4E] flex items-center justify-center p-0 md:p-4 font-sans text-gray-200 overflow-hidden">
      
      <div className="w-full max-w-6xl h-screen md:h-[85vh] bg-[#252331]/80 backdrop-blur-md md:rounded-3xl flex overflow-hidden shadow-2xl border-none md:border md:border-white/10 relative">
        {/* left side  */}
        <div className={`${selectedUser ? "hidden" : "flex"} md:flex w-full md:w-80 lg:w-96 border-r border-white/5 flex-col bg-[#2A283E]/50 relative`}>
          <ProfileHeader />
          <ActiveTabSwitch />

          <div className="flex-1 overflow-y-auto px-4 space-y-1">
            {activeTab === "chats" ? <ChatsList /> : <ContactList />}
          </div>

          {/* for mobile view */}
          {!selectedUser && (
            <button
              onClick={() => setShowFeedback(true)}
              className="md:hidden absolute bottom-6 right-6 p-4 bg-[#7B61FF] text-white rounded-full shadow-2xl shadow-[#7B61FF]/40 z-50 active:scale-90 transition-transform"
            >
              <MessageSquare size={24} />
            </button>
          )}
        </div>

        
        <div className={`${!selectedUser ? "hidden" : "flex"} md:flex flex-1 flex-col bg-[#1E1C2B]/40`}>
          {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
        </div>
      </div>

      
      <button
        onClick={logout}
        className="hidden md:flex fixed bottom-8 right-8 items-center gap-2 bg-[#1C1B2B] hover:bg-red-900/40 text-white px-6 py-3 rounded-full font-bold transition-all border border-white/10 shadow-xl group"
      >
        <span>Logout</span>
        <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>

      
      <button
        onClick={() => setShowFeedback(true)}
        className="hidden md:flex fixed bottom-24 right-8 items-center gap-2 bg-[#7B61FF] hover:bg-[#6a50e6] text-white px-5 py-3 rounded-full font-bold shadow-lg shadow-[#7B61FF]/20 transition-all active:scale-95 z-40 border border-white/10 group"
      >
        <MessageSquare size={18} className="group-hover:rotate-12 transition-transform" />
        <span className="italic">Feedback</span>
      </button>

      <Feedback
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
      />
    </div>
  );
}

export default ChatPage;