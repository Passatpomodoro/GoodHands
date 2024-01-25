import { Link } from 'react-router-dom';
import Navigation from "./Navigation.jsx";


export default function Start () {
    return (
        <>
        <div>
            <button><Link to="/login">Zaloguj</Link></button>
            <button><Link to="/signin">Załóż konto</Link></button>
        </div>
        <Navigation/>
        </>
    )
}