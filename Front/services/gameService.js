const API = import.meta.env.VITE_API_URL;

// ----- JUEGOS -----
export const getJuegos = async () => {
  const res = await fetch(`${API}/juegos`);
  return res.json();
};

export const createJuego = async (data) => {
  const res = await fetch(`${API}/juegos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// ----- RESEÑAS -----
export const getResenas = async () => {
  const res = await fetch(`${API}/resenas`);
  return res.json();
};

export const createResena = async (data) => {
  const res = await fetch(`${API}/resenas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};
