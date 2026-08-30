
export default function About() {
  return (
    <section className="about-page">
      <div className="container about-hero">
        <span className="eyebrow">About us</span>
        <h1>A small academy, run out of Madanapalle</h1>
        <p>
          Hanumadakshita Evolving Skills is a private limited company
          registered in Andhra Pradesh, running live evening batches for
          people who want practical coding skills without pausing their day
          job or degree.
        </p>
      </div>

      <div className="container about-grid">
        <div className="about-block">
          <h3>What we teach</h3>
          <p>
            Python full stack, Java full stack, web development, and SQL &amp;
            MongoDB — four tracks, taught live, Monday to Friday evenings, in
            small enough batches that every learner gets time with an
            instructor.
          </p>
        </div>
        <div className="about-block">
          <h3>How classes run</h3>
          <p>
            Sessions are held in the evening so working professionals and
            students can attend after their regular hours. Batches are
            capped by seat count, and Saturdays are set aside for
            doubt-clearing and mock interviews.
          </p>
        </div>
        <div className="about-block">
          <h3>Where we're based</h3>
          <p>
            Our office is at No. 16/497, Lachhareddy Street, Madanapalle,
            Chittoor district, Andhra Pradesh. Courses are open to both
            in-person and online learners.
          </p>
        </div>
      </div>

      <div className="container about-registration">
        <h3>Company registration</h3>
        <dl>
          <div>
            <dt>Registered as</dt>
            <dd>Hanumadakshita Evolving Skills Private Limited</dd>
          </div>
          <div>
            <dt>CIN</dt>
            <dd>U85499AP2024PTC115363</dd>
          </div>
          <div>
            <dt>Incorporated</dt>
            <dd>12 July 2024</dd>
          </div>
          <div>
            <dt>Registrar of Companies</dt>
            <dd>RoC-Vijayawada</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
