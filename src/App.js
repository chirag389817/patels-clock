import "./App.css";
import ClockFrame from "./components/clock/Clockframe";
import NavBar from "./components/NavBar";
function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="container">
                <ClockFrame />
            </div>
        </div>
    );
}

export default App;
