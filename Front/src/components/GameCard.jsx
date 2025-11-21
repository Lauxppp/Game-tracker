import React from "react";
import { motion } from "framer-motion";

export default function GameCard({ game, onEdit, onDelete }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
    >
      <img src={game.cover || "/placeholder.jpg"} alt={game.nombre} />
      <h3>{game.nombre}</h3>
      <p className="small">Plataforma: {game.plataforma}</p>
      <p className="small">Género: {game.genero || "—"}</p>

      <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
        <button className="btn" onClick={() => onEdit(game)}>Editar</button>
        <button className="btn" style={{ background: "#ef4444" }} onClick={() => onDelete(game._id)}>Borrar</button>
      </div>
    </motion.div>
  );
}
