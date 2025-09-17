import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import AddItem from "./pages/AddItem";
import Closet from "./pages/Closet";
import ItemDetails from "./pages/ItemDetails";
import MainMenu from "./pages/MainMenu";
import OutfitPlanner from "./pages/OutfitPlanner";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

// Optional Auth Pages
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Main App */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/closet" element={<Closet />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/planner" element={<OutfitPlanner />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
