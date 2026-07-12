import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { Protected } from "./components/Protected.jsx";
import { Public } from "./components/Public.jsx";
import { Profile } from "./pages/Profile.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Interview from "./pages/Interview.jsx";
import InterviewSession from "./pages/InterviewSession.jsx";
import InterviewResults from "./pages/InterviewResult.jsx";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Public><Login /></Public>} />
          <Route path="/register" element={<Public><Register /></Public>} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/start-interview/:id" element={<InterviewSession />} />
          <Route path="/wallet" element={<h1>wallet</h1>} />
          <Route path="/profile" element={<Protected><Profile /></Protected>} />
          <Route path="/update/:id" element={<h1>update user</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/result" element={<InterviewResults />} />
          <Route path="*" element={<h1>Error page</h1>} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;