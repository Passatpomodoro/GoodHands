import {Link} from "react-router-dom";

export default function LogButtons () {
    return (
        <>
            <div className="home-log-buttons">
                <Link to="/login">Zaloguj</Link>
                <Link to="/signin">Załóż konto</Link>
            </div>
        </>
    )
}