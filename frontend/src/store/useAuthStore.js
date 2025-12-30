import { create } from "zustand";

export const useAuthStore = create((set)=>({
    authUser:{name:"Aron", age:22, _id:"12345"},
    isloggedIn:true,
    login:()=>{
        set({isloggedIn:true});
        console.log("Logged In")

    }
}))