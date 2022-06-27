import { Link } from "react-router-dom";

export function AppFooter() {
  return (
    <footer className="footer-container flex column align-center full">
      {/* <section className="footer-nav-container"> */}
      <div>
        developed by Eylon Frisch
        <span> © 2022</span>
      </div>
      <div>
        <span>
          <span>design inspired by SpaceX website </span>
        </span>
      </div>
      {/* </section> */}
    </footer>
  );
}
