import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Games from "./pages/Games";
import GameForm from "./pages/GameForm";
import Reviews from "./pages/Reviews";
import ReviewForm from "./pages/ReviewForm";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/" className="logo">GameTracker</Link>
          <div className="nav-links">
            <Link to="/games">Biblioteca</Link>
            <Link to="/reviews">Reseñas</Link>
            <Link to="/dashboard">Estadísticas</Link>
          </div>
        </nav>

        <main className="container">
          <Routes>
            <Route path="/" element={<h2>Bienvenida — selecciona Biblioteca o Dashboard</h2>} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/new" element={<GameForm />} />
            <Route path="/games/edit/:id" element={<GameForm />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/new" element={<ReviewForm />} />
            <Route path="/reviews/edit/:id" element={<ReviewForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
