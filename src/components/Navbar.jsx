import navLogo from "/src/assets/Troll.png"

export default function Navbar(){
    return(
        <nav className="navbar">
            <img className="nav-logo" src={navLogo} alt="Troll Face logo" />
            <h1 className="nav-head">Meme Generator</h1>
            <h3 className="nav-t1">React Course - Project 3</h3>
        </nav>
    )
}