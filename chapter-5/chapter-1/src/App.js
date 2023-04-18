import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoTokenAccess from "./components/NoTokenAccess";
import Home from "./pages/Home";
import Protected from "./components/Protected";
import Dashboard from "./pages/users/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <NoTokenAccess>
              <Login />
            </NoTokenAccess>
          }
        />
        <Route
          path="/register"
          element={
            <NoTokenAccess>
              <Register />
            </NoTokenAccess>
          }
        />
        <Route
          path="/users/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;