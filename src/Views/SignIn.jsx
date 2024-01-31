import LogButtons from "../Components/LogButtons.jsx";
import Navigation from "../Components/Navigation.jsx";
import "/src/Sass/Login.scss"
export default function SignIn() {
    return (
        <>
            <LogButtons />
            <Navigation />
            <div className="login-container">
                <div>
                    <h1>Zaloguj się</h1>
                    <img className="login-container-img" src="/src/assets/Decoration.svg" />
                    <div className="login-input-box-sign">
                        <div className="login-input">
                            <label htmlFor="email">Email</label>
                            <input type="email" />
                        </div>
                        <div className="login-input">
                            <label htmlFor="password">Hasło</label>
                            <input type="password" />
                        </div>
                        <div className="login-input">
                            <label htmlFor="password">Powtórz hasło</label>
                            <input type="password" />
                        </div>
                    </div>
                </div>
                <div className="login-input-button">
                    <button><a href="/login">Zaloguj się</a></button>
                    <button>Załóż konto</button>
                </div>
            </div>
        </>
    );
}
