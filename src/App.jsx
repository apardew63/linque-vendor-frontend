import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./HomeComponents/SignIn";
import HomeSection from "./HomeSection";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
