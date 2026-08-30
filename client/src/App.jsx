import { Routes, Route } from "react-router-dom";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Enroll from "./pages/Enroll";

export default function App() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enroll" element={<Enroll />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
