import {create} from "zustand";

export const useChatStore = create((set, get)=>({
    allContacts:[],
    chats: [],
    messages:[],
    activeTab: "chats",
    selectedUser: null,
    isUsersLoading:false,
    isMessagesLoading:false,
    isSoundEnabled:  JSON.parse(localStorage.getItem("isSoundEnabled"))===true,
    
    toggleSound: ()=>{
        localStorage.setItem("isSoundEnabled", !get().isSoundEnabled);      
        set({isSoundEnabled: !get().isSoundEnabled});
    },

    setActivetab: (tab)=>{
        set({activeTab: tab});
    },

    setSelectedUser: (user)=>{
        set({selectedUser: user});
    },

    getAllContacts: async()=>{
        set({isUsersLoading:true});
        try {

            const res = await fetch("/message/contacts");
            const data = await res.json();
            set({allContacts: data});
            
        } catch (error) {
            
            toast.error(error.response.data.message);

        }
        finally{
            set({isUsersLoading:false});
        }
    },            

    getChatPartners: async()=>{
        set({isUsersLoading:true});
        try {
            const res = await fetch("/message/chats");
            const data = await res.json();
            set({chats: data});
        } catch (error) {
            
            toast.error(error.response.data.message);
        }finally{
            set({isUsersLoading:false});
        }
    },

}))