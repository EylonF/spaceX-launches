import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="main-hero-container main-container full">
      <div className="main-hero">
        <div className="hero-action">
          <h1>Welcome.</h1>
          <h2>
            Explore launches history<br></br> & future
          </h2>
          <button
            className="hero-btn clean-link btn-outline-primary"
            role="button"
          >
            <span class="text">All Launches</span>
            <span>
              <Link className="clean-link" to={`/explore`}>
                Explore
              </Link>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
