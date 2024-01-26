
export default function Contact () {
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
                                <input type="text" id="name" name="name" placeholder="Wpisz swoje imię" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Wpisz swoje imię:</label>
                                <input type="text" id="email" name="email" placeholder="Wpisz swój email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Wpisz swoją wiadomość:</label>
                            <input type="text" id="subject" name="subject" placeholder="Wpisz temat" />
                        </div>
                        <div>
                            <button type="submit">Wyślij</button>
                        </div>
                    </form>
                </div>
                <div className="copyright">
                    <div></div>
                    <span>Copyright by Coders Lab</span>
                    <div>
                        <img src="/src/assets/Facebook.svg"/>
                        <img src="/src/assets/Instagram.svg"/>
                    </div>
                </div>
            </div>
        </>
    )
}

