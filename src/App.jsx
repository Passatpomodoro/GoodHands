import './Sass/Home.scss'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Views/Home.jsx";
import LogIn from "./Views/LogIn.jsx";
import SignIn from "./Views/SignIn.jsx";
import AllAbout from "./Components/AllAbout.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import FoundationAndOrganizations from "./Components/FoundationAndOrganizations.jsx";
import Contact from "./Components/contact.jsx";

function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/all-about" element={<AllAbout/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/foundation-and-organizations" element={<FoundationAndOrganizations/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App
