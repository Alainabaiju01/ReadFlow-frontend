
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Wish from "./pages/Wish";
import Stillreading from "./pages/Stillreading";
import Red from "./pages/Red";

import Temp from "./pages/Temp";

export default function App() {
  return (
    <div>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",   // LOGO left, LINKS right
          alignItems: "center",
          padding: "20px",
          backgroundColor: "rgba(222, 180, 52, 0.3)",
          borderRadius: "10px",
          fontSize: "20px"
        }}
      >

       <div style={{display:"flex"}}>
        <img
          src="https://img.pikbest.com/png-images/20241016/creative-book-logo-vector-design_10968791.png!w700wp"
          alt="logo"
          style={{ width: "50px", height: "50px", objectFit: "contain" }}
        />
        <h1 style={{color:"#d0980aff",textShadow:"20px",fontFamily:"Georgia, serif"}}>ReadFlow </h1>
       </div>
        
        
       
        <div style={{ display: "flex", gap: "30px",fontFamily:"Georgia, serif" }}>
          <Link style={{ color: "#ae8212ff", fontWeight: "bold" }} to="/">Home</Link>
          <Link style={{ color: "#ae8212ff", fontWeight: "bold" }} to="/wish">Wishlist</Link>
          <Link style={{ color: "#ae8212ff", fontWeight: "bold" }} to="/stillreading">Reading</Link>
          <Link style={{ color: "#ae8212ff", fontWeight: "bold" }} to="/red">Read Books</Link>
       
        </div>

      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/stillreading" element={<Stillreading />} />
        <Route path="/red" element={<Red />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </div>
  );
}
