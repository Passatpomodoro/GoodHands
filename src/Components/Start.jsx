import LogButtons from "./LogButtons.jsx";
import Navigation from "./Navigation.jsx";
import HomeAction from "./HomeAction.jsx";

export default function Start () {
    return (
        <>
            <div className="home" id="start">
                <div className="home-background"></div>
                <LogButtons/>
                <Navigation/>
                <HomeAction/>
            </div>
            <div className="home-columns">
                <div className="home-columns-flex">
                    <div className="home-columns-content">
                        <h2>10</h2>
                        <h3>ODDANYCH WORKÓW</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                </div>
                <div className="home-columns-flex">
                    <div className="home-columns-content">
                        <h2>5</h2>
                        <h3>WSPARTYCH ORGANIZACJI</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                </div>
                <div className="home-columns-flex">
                    <div className="home-columns-content">
                        <h2>7</h2>
                        <h3>ZORGANIZOWANY ZBIÓREK</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                </div>
            </div>
        </>
    )
}