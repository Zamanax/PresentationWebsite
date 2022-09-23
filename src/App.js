import "./App.css";

function App() {
    const langs = [
        {
            name: "English",
            path: "/english",
        },
        {
            name: "Chinese",
            translation: "中文",
            path: "/chinese",
        },
        {
            name: "Japanese",
            translation: "日本語",
            path: "/japanese",
        },
        {
            name: "French",
            translation: "Français",
            path: "/french",
        },
        {
            name: "Spanish",
            translation: "Español",
            path: "/espanol",
        },
        {
            name: "German",
            translation: "Deutsch",
            path: "/deutsch",
        },
    ];
    return (
        <div className="App">
            <header className="App-header">
                <h1>A language learning app !</h1>
            </header>
            <div className="Language-select">
                <div className="Language-select-left">
                    {langs.slice(0, langs.length / 2).map((lang, index) => (
                        <div
                            className="Language-select-left-item"
                            style={{
                                marginRight: index.toString() + "em",
                            }}
                        >
                            <a href={lang.path}>
                                {lang.name} -{" "}
                                {lang.translation ? lang.translation : ""} -{" "}
                                <img
                                    className="Language-select-item-image"
                                    src={`Images/Flags/${lang.name}.svg`}
                                    alt={`${lang.name} Flag`}
                                />
                            </a>
                        </div>
                    ))}
                </div>
                <img src="Images/logo.svg" className="App-logo" alt="logo" />
                <div className="Language-select-right">
                    {langs.slice(langs.length / 2).map((lang, index) => (
                        <div
                            className="Language-select-right-item"
                            style={{
                                marginLeft: index.toString() + "em",
                            }}
                        >
                            <a href={lang.path}>
                                {lang.name} -{" "}
                                {lang.translation ? lang.translation : ""} -{" "}
                                <img
                                    className="Language-select-item-image"
                                    src={`Images/Flags/${lang.name}.svg`}
                                    alt={`${lang.name} Flag`}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
