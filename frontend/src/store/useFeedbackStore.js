import { create } from "zustand";
import { toast } from "react-hot-toast";

export const useFeedbackStore = create((set) => ({
  isSubmitting: false,
  error: null,
  success: false,

  submitFeedback: async (payload) => {
    set({ isSubmitting: true, error: null, success: false });

    try {
      const res = await fetch("/api/auth/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send feedback");
      }

      set({ success: true });
      toast.success("Thanks for feedback");

    } catch (err) {
      set({ error: err.message });
      toast.error(err.message || "Something went wrong");
    } finally {
      set({ isSubmitting: false });
    }
  },

  resetFeedbackState: () =>
    set({ error: null, success: false }),
}));
