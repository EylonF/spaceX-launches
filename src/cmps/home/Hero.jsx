import { Link } from "react-router-dom";


export function Hero() {

   

    return (

        <section className="main-hero-container main-container full">
            <div className="main-hero">

                <div className="hero-action">
                <h1>Welcome.</h1>
                <h2>Explore launches history</h2>
                <button className='hero-btn clean-link btn-outline-primary' ><Link to={`/explore`}>Go</Link></button>
                </div>
            </div>
            
        </section>
        
    )
}