import LogButtons from "../Components/LogButtons.jsx";
import Navigation from "../Components/Navigation.jsx";

export default function LogIn () {
    return (
        <>
            <LogButtons/>
            <Navigation/>
        <div>
            <h1>Zaloguj się</h1>
            <img src="/src/assets/Decoration.svg"/>
            <div>
                <input/>
                <input/>
            </div>
            <div>
                <button>Załóż konto</button>
                <button>Zaloguj się</button>
            </div>
        </div>
        </>
    )
}