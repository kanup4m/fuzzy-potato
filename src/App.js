import "antd/dist/antd.min.css";
import "./styles/styles.scss";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Error from "./pages/error";
import Gallery from "./pages/others/Gallery";
import Homepage from "./pages/homepage";
import { HashRouter, Routes, Route } from "react-router-dom";
import Donate from "./pages/others/Donate";
import About from "./pages/others/About";
import IDCard from "./pages/others/Card";
import Forms from "./pages/others/Form";
import Books from "./pages/others/Books";
import Terms from "./pages/extras/terms";
import Privacy from "./pages/extras/policy";
import Refund from "./pages/extras/return";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import AdminProtected from "./pages/extras/AdminProtected";
import Admin from "./pages/extras/admin";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        {/* ---------------- Auth ---------------- */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        {/* -------------- Others --------------------- */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about-us" element={<About />} />

        {/* ----------------- Downloads ------------------ */}
        <Route path="/downloads/form" element={<Forms />} />
        <Route path="/downloads/books" element={<Books />} />
        <Route
          path="/downloads/card"
          element={
            <ProtectedRoute>
              {" "}
              <IDCard />{" "}
            </ProtectedRoute>
          }
        />

        {/* ------------------- Activities -------------------- */}
        <Route path="/activities/mahaAbhiyan" element={<About />} />
        <Route path="/activities/plantation" element={<About />} />
        <Route path="/activities/awakening" element={<About />} />

        {/* ---------------------- Extras ------------------------ */}

        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/refund-policy" element={<Refund />} />

        {/* ---------------------- Admin ------------------ */}
        <Route
          path="/admin"
          element={
            <AdminProtected>
              {" "}
              <Admin />{" "}
            </AdminProtected>
          }
        />

        {/* ---------------------- Error 404 ------------------ */}
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
