import 'antd/dist/antd.min.css';
import "./styles/styles.scss";
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Error from './pages/error'
import Gallery from './pages/others/Gallery'
import Homepage from './pages/homepage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Donate from './pages/others/Donate';
import About from './pages/others/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="donate" element={<Donate />} />
        <Route path="about-us" element={<About />} />
        <Route path="downloads/form" element={<Donate />} />
        <Route path="downloads/books" element={<About />} />
        <Route path="downloads/card" element={<Donate />} />
        <Route path="about-us" element={<About />} />

        <Route
          path="*"
          element={
            <Error />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
