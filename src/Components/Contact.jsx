import {useState} from "react";
export default function Contact () {

        const [isFocused, setFocused] = useState(false);

        const handleFocus = () => {
            setFocused(true);
        };

        const handleBlur = () => {
            setFocused(false);
        };


        return (
            <>
                <div id="contact" className="home-contact">
                    <div>
                        <div className="home-contact-background"></div>
                    </div>
                    <div className="home-form">
                        <div>
                            <h1>Skontaktuj się z nami</h1>
                            <img src="/src/assets/Decoration.svg"/>
                        </div>
                        <form>
                            <div className="home-form-contact-info">
                                <div className="form-group">
                                    <label htmlFor="name">Wpisz swoje imię:</label>
                                    <div className={`custom-input ${isFocused ? 'focused' : ''}`}>
                                        <input type="text" onFocus={handleFocus} onBlur={handleBlur} id="name"
                                               name="name"/>
                                        <div className="custom-placeholder">
                                            Krzysztof
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Wpisz swój email:</label>
                                    <div className={`custom-input ${isFocused ? 'focused' : ''}`}>
                                        <input type="text" onFocus={handleFocus} onBlur={handleBlur} id="email"
                                               name="email"/>
                                        <div className="custom-placeholder">
                                            abc@xyz.pl
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Wpisz swoją wiadomość:</label>
                                <div className={`custom-input ${isFocused ? 'focused' : ''}`}>
                                    <input className="last-input" type="text" onFocus={handleFocus} onBlur={handleBlur}
                                           id="subject" name="subject"/>
                                    <div className="custom-placeholder">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </div>
                            </div>
                            <div className="home-contact-button">
                                <button type="submit">Wyślij</button>
                            </div>
                        </form>
                    </div>
                    <div className="copyright">
                        <div></div>
                        <span>Copyright by Coders Lab</span>
                        <div>
                            <img className=".copyright-social" src="/src/assets/Facebook.svg"/>
                            <img className=".copyright-social" src="/src/assets/Instagram.svg"/>
                        </div>
                    </div>
                </div>
            </>
        )
    }