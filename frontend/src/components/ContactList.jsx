import { useEffect } from 'react';
import { useChatStore } from '../store/useChatStore';
import UsersLoadingSkeleton from './UsersLoadingSkeleton';
import { useAuthStore } from '../store/useAuthStore';

/**
 * Render a selectable vertical list of contacts with avatars that indicate online status.
 *
 * On mount this component triggers a fetch for all contacts. While contacts are loading it
 * renders a UsersLoadingSkeleton; once loaded it displays each contact as a clickable row
 * that marks the contact as selected and highlights the selected item. Avatars show either
 * the contact's profile picture or a default image, and their visual state reflects whether
 * the contact is currently online.
 *
 * @returns {JSX.Element} A React element containing the contact list or a loading skeleton.
 */
export default function ContactList() {
  const { allContacts, getAllContacts, setSelectedUser, isUsersLoading, selectedUser } = useChatStore();
  const {onlineUsers} = useAuthStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <div className="space-y-2">
      {allContacts.map((contact) => (
        <div
          key={contact._id}
          onClick={() => setSelectedUser(contact)}
          className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all duration-200 cursor-pointer group
            ${selectedUser?._id === contact._id 
              ? "bg-[#7B61FF]/20 border border-[#7B61FF]/30 shadow-lg" 
              : "hover:bg-white/5 border border-transparent"
            }`}
        >
          {/* Avatar Section */}
          <div className="relative flex-shrink-0">
            <div className={`avatar ${onlineUsers.includes(contact._id)?"avatar-online":"avatar-offline"}`}>
              <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden bg-[#3A384D]">
                <img 
                  src={contact.profilePic || "/avatar.png"} 
                  alt={contact.fullname} 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Name Section */}
          <div className="flex-1 text-left min-w-0">
            <h4 className="font-bold text-gray-200 italic truncate group-hover:text-white transition-colors">
              {contact.fullname}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}