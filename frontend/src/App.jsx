import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";

const App = () => {
  //Ripple Effect
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    const click = (e) => {
      const id = Date.now();
      setRipples((r) => [...r, { x: e.clientX, y: e.clientY, id }]);
      setTimeout(() => {
        setRipples((r) => r.filter((i) => i.id !== id));
      }, 600);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", click);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
    };
  }, []);
  

  //useAuthStore
  const{authUser,isLoggedIn, login} = useAuthStore();
  console.log(authUser)


  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Spotlight */}
      <div className="spotlight" />

      {/* Ripples */}
      {ripples.map((r) => (
        <div
          key={r.id}
          className="ripple"
          style={{ left: r.x, top: r.y }}
        />
      ))}

      <button className="px-4 py-2 bg-indigo-600 rounded" onClick={login}>Login</button>

      {/* App Content */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<ChatPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>

    </div>
  );
};

export default App;
