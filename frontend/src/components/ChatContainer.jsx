import React, { useEffect, useRef } from 'react';
import ChatHeader from './ChatHeader';
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from '../store/useChatStore';
import NoChatHistoryPlaceholder from './NoChatHistoryPlaceholder';
import MessagesLoadingSkeleton from './MessagesLoadingSkeleton';
import MessageInput from './MessageInput';

export default function ChatContainer() {
  const { selectedUser, getMessagesByUsersId, messages, isMessagesLoading } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (selectedUser?._id) {
      getMessagesByUsersId(selectedUser._id);
    }
  }, [selectedUser?._id, getMessagesByUsersId]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden relative">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
        <div className="max-w-4xl mx-auto w-full">
          {!selectedUser ? (
            <NoChatHistoryPlaceholder name="Select a contact to start chatting" />
          ) : isMessagesLoading ? (
            <MessagesLoadingSkeleton />
          ) : messages.length > 0 ? (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg._id}
                  className={`chat ${msg.senderId === authUser._id ? "chat-end" : "chat-start"
                    }`}
                >
                  <div
                    className={`chat-bubble max-w-[85%] md:max-w-[70%] p-3 md:p-4 rounded-3xl ${msg.senderId === authUser._id
                        ? "bg-[#7B61FF] text-white"
                        : "bg-[#2A283E] text-gray-200"
                      }`}
                  >
                    {msg.text && <p>{msg.text}</p>}
                  </div>
                </div>
              ))}
              <div ref={messageEndRef} />
            </div>
          ) : (
            <NoChatHistoryPlaceholder
              name={selectedUser?.fullName || selectedUser?.fullname}
            />
          )}

        </div>
      </div>
      <MessageInput />

    </div>
  );
}