import { Navbar } from "./components/Navigation";
import { MainContent } from "./components/MainContent";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ContactUs } from "./components/ContactForm";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/home" element={<MainContent />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;