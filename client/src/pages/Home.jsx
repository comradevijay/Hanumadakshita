import Hero from "../components/Hero";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import CourseOffered from "../components/CourseOffered";
import CareerGuidance from "../components/CareerGuidance";
import ExpertMentorship from "../components/ExpertMentorship";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <CourseOffered />
      <CareerGuidance />
      <ExpertMentorship />
      <Testimonials />
      <FAQ />
    </>
  );
}
