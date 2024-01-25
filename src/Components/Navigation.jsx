import "/src/Sass/Home.scss";
import { Link } from 'react-scroll';

export default function Navigation () {
    return (
        <>
            <nav className="navigation">
                <ul className="navigation-list">
                    <li><Link to="start" smooth={true} duration={500}>Start</Link></li>
                    <li><Link to="all-about" smooth={true} duration={500}>O co chodzi?</Link></li>
                    <li><Link to="about-us" smooth={true} duration={500}>O nas</Link></li>
                    <li><Link to="foundation-and-organizations" smooth={true} duration={500}>Fundacje i organizacje</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Kontakt</Link></li>
                </ul>
            </nav>
        </>
    )
}