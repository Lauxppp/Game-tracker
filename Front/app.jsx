// App.jsx - estructura inicial del frontend
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import GameForm from "./pages/GameForm";
import Reviews from "./pages/Reviews";
import ReviewForm from "./pages/ReviewForm";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/new" element={<GameForm />} />
          <Route path="/games/edit/:id" element={<GameForm />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/new" element={<ReviewForm />} />
          <Route path="/reviews/edit/:id" element={<ReviewForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
