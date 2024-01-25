import Start from "../Components/Start.jsx";
import AllAbout from "../Components/AllAbout.jsx";
import AboutUs from "../Components/AboutUs.jsx";
import FoundationAndOrganizations from "../Components/FoundationAndOrganizations.jsx";
import Contact from "../Components/contact.jsx";
import {Link} from "react-router-dom";
import Navigation from "../Components/Navigation.jsx";
export default function Home () {
    return(
        <>
            <div className="home-log-buttons">
                <button><Link to="/login">Zaloguj</Link></button>
                <button><Link to="/signin">Załóż konto</Link></button>
            </div>
            <Navigation/>
            <Start/>
            <AllAbout/>
            <AboutUs/>
            <FoundationAndOrganizations/>
            <Contact/>
        </>
    )
}