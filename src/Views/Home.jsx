
import AllAbout from "../Components/AllAbout.jsx";
import AboutUs from "../Components/AboutUs.jsx";
import FoundationAndOrganizations from "../Components/FoundationAndOrganizations.jsx";
import Contact from "../Components/contact.jsx";
import {Link} from "react-router-dom";
import Navigation from "../Components/Navigation.jsx";
export default function Home () {
    return(
        <>
            <div className="home">
                <div className="home-background"></div>
                <div className="home-log-buttons">
                    <Link to="/login">Zaloguj</Link>
                    <Link to="/signin">Załóż konto</Link>
                </div>
                <Navigation/>
                <div className="home-action">
                    <div className="home-action-decoration">
                        <h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src="/src/assets/Decoration.svg"/>
                    </div>
                    <div className="home-action-buttons">
                        <button>ODDAJ RZECZY</button>
                        <button>ZORGANIZUJ ZBIÓRKĘ</button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h2>10</h2>
                        <h3>ODDANYCH WORKÓW</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>5</h2>
                        <h3>WSPARTYCH ORGANIZACJI</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>7</h2>
                        <h3>ZORGANIZOWANY ZBIÓREK</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                </div>
            </div>
            <AllAbout/>
            <AboutUs/>
            <FoundationAndOrganizations/>
            <Contact/>
        </>
    )
}