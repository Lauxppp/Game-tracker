import React, { useEffect, useState } from "react";
import * as gameService from "../services/gameService";

export default function Dashboard(){
  const [games, setGames] = useState([]);

  useEffect(()=> { (async()=> {
    try{
      const { data } = await gameService.getGames();
      setGames(data);
    } catch(e){ console.error(e) }
  })(); },[]);

  const total = games.length;
  const byPlatform = games.reduce((acc,g)=> {
    acc[g.plataforma] = (acc[g.plataforma] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h2>Estadísticas personales</h2>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:12}}>
        <div className="card">
          <h3>Total juegos</h3>
          <p style={{fontSize:28,fontWeight:700}}>{total}</p>
        </div>
        <div className="card">
          <h3>Por plataforma</h3>
          {Object.keys(byPlatform).length === 0 ? <p className="small">—</p> :
            Object.entries(byPlatform).map(([k,v]) => <p key={k} className="small">{k}: {v}</p>)
          }
        </div>
      </div>
    </div>
  );
}
