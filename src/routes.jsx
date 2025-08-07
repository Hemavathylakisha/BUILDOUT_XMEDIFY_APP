// routes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Search from "./Search/Search";
// import BookingPage from "./pages/BookingPage";
// import MyBookingsPage from "./pages/MyBookingsPage";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      {/* <Route path="/booking" element={<BookingPage />} />
      <Route path="/my-bookings" element={<MyBookingsPage />} /> */}
    </Routes>
    <Footer />
  </Router>
);

export default AppRoutes;