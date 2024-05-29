import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";

function App() {
  useEffect(() => {
    if (localStorage.token) {
      // setAuthToken(localStorage.token);
      // loadUser();
    }
  }, []);

  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
