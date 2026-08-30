import Hero from "../components/Hero";
import CourseOffered from "../components/CourseOffered";
import CareerGuidance from "../components/CareerGuidance";
import ExpertMentorship from "../components/ExpertMentorship";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <CourseOffered />
      <CareerGuidance />
      <ExpertMentorship />
      <Testimonials />
      <FAQ />
    </>
  );
}
