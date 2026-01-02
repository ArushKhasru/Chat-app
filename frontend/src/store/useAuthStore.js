import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import { toast } from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUser: null,
    isCheckingAuth: true,
    isSigningUp: false,
    isLoggingIn: false,
    isloggedOut: false,

   checkAuth: async () => {
  try {
    const res = await axiosInstance.get("/auth/check");
    set({ authUser: res.data });
  } catch (error) {
    if (error.response?.status === 401) {
      // user not logged in → this is OK
      set({ authUser: null });
    } else {
      console.error("Auth check failed:", error);
    }
  } finally {
    set({ isCheckingAuth: false });
  }
},
    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post('/auth/signup', data);
            set({ authUser: res.data });
            toast.success("Account created sucessfully, Login")



        } catch (error) {
            toast.error(error.response.data.message)
        }
        finally {
            set({ isSigningUp: false })
        }
    },
    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosInstance.post('/auth/login', data);
            set({ authUser: res.data });
            toast.success("Logged in successfully")



        } catch (error) {
            toast.error(error.response.data.message)
        }
        finally {
            set({ isLoggingIn: false })
        }
    },
    logout:async()=>{
      try {
        const res = await axiosInstance.post('/auth/logout');
        set({authUser: null});
        toast.success("Logged out sucessfully");
        set({isloggedOut: false});
        
      } catch (error) {
        toast.error("Error logging out");
        console.log("logout error", error)
        
      }
    }
}))