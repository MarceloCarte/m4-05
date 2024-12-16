import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Pizza from "./pages/Pizza";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pizza/001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
