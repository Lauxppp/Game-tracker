import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as gameService from "../services/gameService";

export default function GameForm() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nombre: "", plataforma: "", genero: "", cover: "" });

  useEffect(()=>{
    if (id && location.state?.game) {
      setForm(location.state.game);
    } else if (id) {
      (async()=> {
        try{
          const { data } = await gameService.getGame(id);
          setForm(data);
        } catch(e){ console.error(e) }
      })();
    }
  },[id, location.state]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await gameService.updateGame(id, form);
      } else {
        await gameService.createGame(form);
      }
      navigate("/games");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form">
      <h3>{id ? "Editar juego" : "Agregar juego"}</h3>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input name="nombre" value={form.nombre} onChange={handleChange} required />
        <label>Plataforma</label>
        <input name="plataforma" value={form.plataforma} onChange={handleChange} required />
        <label>Género</label>
        <input name="genero" value={form.genero} onChange={handleChange} />
        <label>Cover (URL)</label>
        <input name="cover" value={form.cover} onChange={handleChange} />
        <button className="btn" type="submit">{id ? "Guardar" : "Crear"}</button>
      </form>
    </div>
  );
}
