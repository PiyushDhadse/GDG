import './App.css'; // Make sure App.css is imported
import './header.css';
import './body.css';
import './footer.css';
import Header from "./header.jsx";
import Body from "./body.jsx";
import Footer from "./footer.jsx";

function App() {
    return (
        <div className="app-container"> {/* Use the new container class */}
            <Header/>
            <Body/>
        </div>
    );
}

export default App;
