export default function AllAbout () {
    return (
        <>
            <div id="all-about">
                <div className="home-all-about-us">
                    <h1>Wystarczą 4 proste kroki</h1>
                    <img className="home-all-about-decoration" src="/src/assets/Decoration.svg"/>
                </div>
                <div className="home-all-about">
                    <div className="home-columns-flex-all-about">
                        <div className="home-columns-content">
                            <img className="home-all-about-icon" src="/src/assets/Icon-1.svg"/>
                            <h3>Wybierz rzeczy</h3>
                            <p>ubrania, zabawki, sprzęt i inne</p>
                        </div>
                    </div>
                    <div className="home-columns-flex-all-about">
                        <div className="home-columns-content">
                            <img className="home-all-about-icon" src="/src/assets/Icon-2.svg"/>
                            <h3>Spakuj je</h3>
                            <p>skorzystaj z worków na śmieci</p>
                        </div>
                    </div>
                    <div className="home-columns-flex-all-about">
                        <div className="home-columns-content">
                            <img className="home-all-about-icon" src="/src/assets/Icon-3.svg"/>
                            <h3>Zdecyduj komu chcesz pomóc</h3>
                            <p>wybierz zaufane miejsce</p>
                        </div>
                    </div>
                    <div className="home-columns-flex-all-about">
                        <div className="home-columns-content">
                            <img className="home-all-about-icon" src="/src/assets/Icon-4.svg"/>
                            <h3>Zamów kuriera</h3>
                            <p>kurier przyjedzie w dogodnym terminie</p>
                        </div>
                    </div>
                </div>
                <div className="home-all-about-button">
                    <button>ODDAJ RZECZY</button>
                </div>
            </div>
        </>
    )
}