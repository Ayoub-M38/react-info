import logoImage from "../image/react-logo.png"

export default function Navbar() {
    return (
        <>
            <nav>
                <img className="logo" src={logoImage} alt="react logo" />
                <h3>ReactFatcs</h3>
                <h4>React Course- Project 1</h4>
            </nav>
            <main>
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of entrepris app, inculding mobile apps</li>
                </ul>
            </main>
        </>

    )
}
