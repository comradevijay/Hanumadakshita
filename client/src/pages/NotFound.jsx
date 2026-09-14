import { Link } from "react-router-dom";

function SendIcon() {
  return (
    <div className="svg-wrapper-1">
      <div className="svg-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <section className="not-found-page container">
      <span className="not-found-bg" aria-hidden="true">404</span>

      <span className="eyebrow-pill">Error 404</span>

      <h1>
        This page got lost <br />
        along the way.
      </h1>

      <p>
        The link may be broken, or the page has moved. Head back home,
        or check out our courses.
      </p>

      <div className="not-found-actions">
        <Link to="/" className="btn-outline-blue">
          Back to home
        </Link>

        <Link to="/contact" className="btn-send">
          <SendIcon />
          <span>Contact us</span>
        </Link>
      </div>
    </section>
  );
}