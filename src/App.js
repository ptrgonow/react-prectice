import './App.css';
import {Outlet, Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="header">
                <nav>
                    <ul className="navigation">
                        <li>
                            <Link to="nested"> Nested </Link>
                        </li>
                        <li>
                            <Link to="hooks"> Hooks </Link>
                        </li>
                        <li>
                            <Link to="cals"> Calculator </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default App;
