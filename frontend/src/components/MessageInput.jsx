import { useRef, useState } from "react";
import useKeyboardSound from "../hooks/useKeyboardSounds";
import { useChatStore } from "../store/useChatStore";
import toast from "react-hot-toast";
import { ImageIcon, SendIcon, X } from "lucide-react";

function MessageInput() {
  const { playRandomKeyStrokeSound } = useKeyboardSound();
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const fileInputRef = useRef(null);
  const { sendMessage, isSoundEnabled } = useChatStore();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    if (isSoundEnabled) playRandomKeyStrokeSound();

    sendMessage({
      text: text.trim(),
      image: imagePreview,
    });
    setText("");
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="p-4 bg-[#2A283E]/40 backdrop-blur-xl border-t border-white/5">
      {/* 🔹 IMAGE PREVIEW AREA */}
      {imagePreview && (
        <div className="mb-4 flex items-center gap-3 animate-in slide-in-from-bottom-2">
          <div className="relative group">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-2xl border-2 border-[#7B61FF]/50 shadow-xl shadow-[#7B61FF]/10"
            />
            <button
              onClick={removeImage}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#1C1B2B] border border-white/10 flex items-center justify-center text-white hover:bg-red-500 transition-colors shadow-lg"
              type="button"
            >
              <X size={14} />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-[#7B61FF] uppercase tracking-widest">Image Attachment</span>
            <span className="text-xs italic text-gray-500">Ready to send...</span>
          </div>
        </div>
      )}

      {/* 🔹 INPUT FORM */}
      <form onSubmit={handleSendMessage} className="flex items-center gap-3">
        <div className="flex-1 flex items-center gap-2 bg-[#1C1B2B] border border-white/5 rounded-[1.5rem] px-4 py-1.5 focus-within:border-[#7B61FF]/50 focus-within:ring-1 focus-within:ring-[#7B61FF]/20 transition-all duration-300">
          
          {/* Image Upload Trigger */}
          <button
            type="button"
            className={`p-2 transition-all active:scale-90 ${
              imagePreview ? "text-[#7B61FF]" : "text-gray-500 hover:text-gray-300"
            }`}
            onClick={() => fileInputRef.current?.click()}
          >
            <ImageIcon size={22} />
          </button>

          {/* Text Input */}
          <input
            type="text"
            className="w-full bg-transparent border-[#2A283E] focus:ring-0 py-3 text-sm text-white placeholder:text-gray-600 italic tracking-tight"
            placeholder="Type your message..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              isSoundEnabled && playRandomKeyStrokeSound();
            }}
          />
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />

        {/* Send Button */}
        <button
          type="submit"
          disabled={!text.trim() && !imagePreview}
          className="bg-[#7B61FF] hover:bg-[#6a50e6] text-white p-4 rounded-[1.25rem] transition-all active:scale-90 disabled:opacity-40 disabled:grayscale disabled:cursor-not-allowed shadow-lg shadow-[#7B61FF]/30 flex items-center justify-center"
        >
          <SendIcon size={20} className={text.trim() || imagePreview ? "translate-x-0.5 -translate-y-0.5 transition-transform" : ""} />
        </button>
      </form>
    </div>
  );
}

export default MessageInput;