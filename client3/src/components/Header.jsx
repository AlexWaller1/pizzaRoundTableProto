import "./Header.css"
import PizzaRoundtableLogo from "./PizzaRoundtableLogo"

export default function Header() {
    // just providing header for application
    return (
        <nav className="navbar mb-4 p-0" id="header-div">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <div className="d-flex" id="pizza-roundtable-header">
                        <PizzaRoundtableLogo/>
                    </div>
                </a>
            </div>
        </nav>
    )
}