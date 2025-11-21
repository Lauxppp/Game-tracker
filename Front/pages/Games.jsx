import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GameCard from "../components/GameCard";
import * as gameService from "../services/gameService";

export default function Games() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchGames();
  }, []);

  async function fetchGames() {
    try {
      const { data } = await gameService.getGames();
      setGames(data);
    } catch (err) {
      console.error("Error cargando juegos", err);
    }
  }

  const handleEdit = (game) => {
    navigate(`/games/edit/${game._id}`, { state: { game } });
  };

  const handleDelete = async (id) => {
    if (!confirm("¿Eliminar este juego?")) return;
    try {
      await gameService.deleteGame(id);
      setGames((g) => g.filter((x) => x._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
        <h2>Mi Biblioteca</h2>
        <Link to="/games/new" className="btn">+ Agregar juego</Link>
      </header>

      <section className="grid">
        {games.length === 0 ? (
          <p className="card">No hay juegos en tu biblioteca.</p>
        ) : (
          games.map((g) => (
            <GameCard key={g._id} game={g} onEdit={handleEdit} onDelete={handleDelete} />
          ))
        )}
      </section>
    </div>
  );
}
