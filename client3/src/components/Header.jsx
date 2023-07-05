import "./Header.css";
import PizzaRoundtableLogo from "./PizzaRoundtableLogo";
import DancingPizzaImage1 from "./DancingPizzaImage1";
import DancingPizzaImage2 from "./DancingPizzaImage2";

export default function Header() {
    // just providing header for application
    return (
        <nav className="navbar mb-4 p-0" id="header-div">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <div className="d-flex" id="pizza-roundtable-header">
                        <DancingPizzaImage1 height="300px" width="300px"/>
                        <PizzaRoundtableLogo/>
                        <DancingPizzaImage2 height="300px" width="300px"/>
                    </div>
                </a>
            </div>
        </nav>
    )
}