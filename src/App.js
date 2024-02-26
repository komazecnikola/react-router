import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home, Users, About } from "./components"; // može ovako jer smo stavili u index.js
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <div className="App">
      {/* <UserContextProvider> */}
      {/* Router nam omogućava upotrebu rutiranja u celoj app - Wrapper */}
      {/* <Router> */}
      {/* <div className="navbar">
          {/* Link komponenta za navigaciju ka razlicitim rutama. Svaki link ima svoj "to" prop koji definise putanju ka odgovarajucoj ruti*/}
      {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </div> */}

      {/* Unutar Routes komponente definisu se pojedinacne rute */}
      {/* <Routes> */}
      {/* Svaka ruta im svoj "path" prop koji definise putanju ka kojoj ruta vodi i "element" prop koji sadrzi komponentu koja treba da se renderuje kada se ruta poklopi sa trenutnom putanjom */}
      {/* <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>  */}
      {/* </UserContextProvider> */}

      <Router>
        <div className="navbar">
          {/* Link komponenta za navigaciju ka razlicitim rutama.
          Svaki link ima svoj "to" prop koji definise putanju ka odgovarajucoj ruti */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </div>
        {/* Unutar Routes komponente definisu se pojedinacne rute*/}
        <Routes>
          {/* Svaka ruta ima svoj "path" prop koji definise putanju ka kojoj ruta vodi,
          i "element" prop koji sadrzi komponentu koja treba da se renderuje kada se ruta
          poklopi sa trenutnom putanjom*/}
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
