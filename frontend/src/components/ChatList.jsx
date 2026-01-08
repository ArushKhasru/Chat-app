import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import NoChatsFound from "./NoChatsFound";
import { useAuthStore } from "../store/useAuthStore";

function ChatsList() {
  const { getChatPartners, chats, isUsersLoading, setSelectedUser, selectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getChatPartners();
  }, [getChatPartners]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;
  if (chats.length === 0) return <NoChatsFound />;

  return (
    <div className="space-y-2 px-2">
      {chats.map((chat) => (
        <div
          key={chat._id}
          onClick={() => setSelectedUser(chat)}
          className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all duration-200 cursor-pointer group
            ${selectedUser?._id === chat._id 
              ? "bg-[#7B61FF]/20 border border-[#7B61FF]/30 shadow-lg shadow-[#7B61FF]/5" 
              : "hover:bg-white/5 border border-transparent"
            }`}
        >
          {/* Avatar with Status Indicator */}
          <div className="relative flex-shrink-0">
            <div className={`avatar ${onlineUsers.includes(chat._id) ? "avatar-online" : "avatar-offline"}`}>
              <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden bg-[#3A384D]">
                <img 
                  src={chat.profilePic || "/avatar.png"} 
                  alt={chat.fullName || chat.fullname} 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1 text-left min-w-0">
            <div className="flex justify-between items-center mb-0.5">
              <h4 className="font-bold text-gray-200 italic truncate group-hover:text-white transition-colors">
                {chat.fullName || chat.fullname}
              </h4>
              <span className="text-[10px] text-gray-500 font-medium">12:45</span>
            </div>
            <p className="text-xs text-gray-500 truncate italic">
              Click to view messages
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatsList;