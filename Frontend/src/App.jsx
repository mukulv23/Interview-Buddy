import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { Protected } from "./components/Protected.jsx";
import { Public } from "./components/Public.jsx";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Protected><Home /></Protected>} />
          <Route path="/login" element={<Public><Login /></Public>} />
          <Route path="/register" element={<Public><Register /></Public>} />
          <Route path="/create-interview" element={<h1>Create interview</h1>} />
          <Route path="/wallet" element={<h1>wallet</h1>} />
          <Route path="/profile" element={<h1>profile</h1>} />
          <Route path="*" element={<h1>Error page</h1>} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;