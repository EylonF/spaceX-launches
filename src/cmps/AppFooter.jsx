import { Link } from "react-router-dom";

export function AppFooter() {
    return (
        <footer className="footer-container flex column align-center full">


            {/* <section className="footer-nav-container"> */}
                <div >
                    <span>© 2022 logo <span>Inc.</span></span>
                    
                </div>
                <div>
                    <span>
                        <i className="fas fa-globe"></i>
                        <span>English (US)</span>
                        <span>$ US</span>
                    </span>
                    <span>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </span>
                </div>
            {/* </section> */}
        </footer>
    )
}