import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(()=> {
    (async()=>{
      try{
        const res = await axios.get((import.meta.env.VITE_API_URL || "http://localhost:3000") + "/resenas");
        setReviews(res.data);
      }catch(e){console.error(e)}
    })();
  },[]);

  return (
    <div>
      <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
        <h2>Reseñas</h2>
        <Link to="/reviews/new" className="btn">+ Nueva reseña</Link>
      </header>

      <div className="grid">
        {reviews.length === 0 ? <p className="card">No hay reseñas</p> :
          reviews.map(r => (
            <div className="card" key={r._id}>
              <h3>{r.titulo}</h3>
              <p className="small">Juego: {r.juegoNombre || r.juego}</p>
              <p className="small">{r.contenido}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
