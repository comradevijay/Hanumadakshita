import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import SmoothScroll from "./components/SmoothScroll";

import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Enroll from "./pages/Enroll";
import NotFound from "./pages/NotFound";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo(0, 0);

    // Create IntersectionObserver for text reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");

            // Stop observing after the element has been revealed
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    // Only animate text inside the main page content
    const elements = document.querySelectorAll(
      "main h1, main h2, main h3, main h4, main p",
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup observer when route changes/unmounts
    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <SmoothScroll />
      <Navbar />

      <main>
        <ParticlesBackground />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/:slug" element={<CourseDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
