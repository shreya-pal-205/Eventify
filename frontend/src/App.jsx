import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Footer from "./components/Footer";
import CreateEvent from "./components/pages/CreateEvent";
import Events from "./components/pages/Events";
import UpdateEvent from "./components/pages/UpdateEvent";
import EventDetails from "./components/pages/EventDetails";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-event" element={<PrivateRoute><CreateEvent /></PrivateRoute>} />
          <Route path="/events" element={<PrivateRoute><Events /></PrivateRoute>} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
          <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
