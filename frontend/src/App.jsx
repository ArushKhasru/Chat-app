import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore.js";
import PageLoader from "./components/PageLoader.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {

  //useAuthStore
  const { checkAuth, authUser, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser })

  if (isCheckingAuth) return <PageLoader />



  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="relative z-10 flex min-h-screen items-center justify-center"></div>

      {/* App Content */}
      <div>
        <Routes>
          <Route path="/" element={authUser ? <ChatPage /> : <Navigate to={"login"} />} />
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
          <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
        </Routes>
        <Toaster/>
      </div>

    </div>
  );
};

export default App;
