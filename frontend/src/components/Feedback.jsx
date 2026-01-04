import { useState, useEffect } from "react";
import { X, Send, MessageSquare } from "lucide-react";
import { useFeedbackStore } from "../store/useFeedbackStore";

export default function Feedback({ isOpen, onClose }) {
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("other");
  const [message, setMessage] = useState("");

  const {
    submitFeedback,
    isSubmitting,
    success,
    error,
    resetFeedbackState
  } = useFeedbackStore();

  useEffect(() => {
    if (success) {
      onClose();
      setRating(0);
      setCategory("other");
      setMessage("");
      resetFeedbackState();
    }
  }, [success, onClose, resetFeedbackState]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating) return;

    await submitFeedback({
      rating,
      category,
      message,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1C2D]/80 backdrop-blur-sm px-4">
      {/* 🔹 GLASSMORPHISM CARD */}
      <div className="w-full max-w-md rounded-[2rem] bg-[#252331]/90 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 px-6 py-5 bg-[#2A283E]/50">
          <div className="flex items-center gap-2">
            <MessageSquare size={18} className="text-[#7B61FF]" />
            <h2 className="text-lg font-bold text-white italic tracking-tight">Send Feedback</h2>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/5 rounded-full transition-colors">
            <X className="size-5 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 px-6 py-6">

          {/* Rating */}
          <div className="space-y-3">
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 ml-1">
              How was your experience?
            </label>
            <div className="flex justify-between gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`size-12 rounded-2xl text-sm font-bold transition-all duration-300 border
                    ${rating >= star
                      ? "bg-[#7B61FF] text-white border-[#7B61FF] shadow-lg shadow-[#7B61FF]/20 scale-105"
                      : "bg-[#1C1B2B] text-gray-500 border-white/5 hover:border-white/10"
                    }`}
                >
                  {star}
                </button>
              ))}
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 ml-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-2xl bg-[#1C1B2B] px-4 py-3 text-sm text-white italic outline-none border border-white/5 focus:border-[#7B61FF] transition-all appearance-none cursor-pointer"
            >
              <option value="bug">Bug</option>
              <option value="feature">Feature</option>
              <option value="ui">UI / UX</option>
              <option value="performance">Performance</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 ml-1">
              Message <span className="lowercase opacity-50">(optional)</span>
            </label>
            <textarea
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what you think..."
              className="w-full resize-none rounded-2xl bg-[#1C1B2B] px-4 py-3 text-sm text-white italic outline-none border border-white/5 focus:border-[#7B61FF] transition-all placeholder:text-gray-600"
            />
          </div>

          {error && <p className="text-xs text-red-400 text-center">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting || !rating}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#7B61FF] py-4 text-sm font-bold text-white hover:bg-[#6a50e6] active:scale-[0.97] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#7B61FF]/20"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <span>Submit Feedback</span>
                <Send size={16} />
              </>
            )}
          </button>

        </form>
      </div>
    </div>
  );
}