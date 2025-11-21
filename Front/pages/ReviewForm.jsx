import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ReviewForm() {
  const [form, setForm] = useState({ titulo: "", contenido: "", juegoId: "" });
  const nav = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post((import.meta.env.VITE_API_URL || "http://localhost:3000") + "/resenas", form);
      nav("/reviews");
    } catch (err) { console.error(err) }
  };

  return (
    <div className="form">
      <h3>Nueva reseña</h3>
      <form onSubmit={handleSubmit}>
        <label>Título</label>
        <input name="titulo" value={form.titulo} onChange={handleChange} required />
        <label>Contenido</label>
        <textarea name="contenido" value={form.contenido} onChange={handleChange} rows="4" />
        <label>ID del juego</label>
        <input name="juegoId" value={form.juegoId} onChange={handleChange} placeholder="opcional: id del juego"/>
        <button className="btn" type="submit">Publicar</button>
      </form>
    </div>
  );
}
