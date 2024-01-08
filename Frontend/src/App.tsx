import Header from "./components/Header"
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Chat from "./pages/Chat";
import { useAuth } from './context/AuthContext';

function App() {
const auth = useAuth();
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        {auth?.isLoggedIn && auth?.user && (
        <Route path="/chat" element={<Chat/>} />
        )}
        <Route path="/*" element={<NotFoundPage/>} />
      </Routes>
    </main>
  )
}

export default App
