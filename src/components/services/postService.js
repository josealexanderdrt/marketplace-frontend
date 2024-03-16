// Reemplazar por la URL de la API
const URL_API = "https://localhost:3000/api/v1/posts";


export const addPost = async (post) => {
  const response = await fetch(URL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  return data;
};

// Se encarca de llamar a la api y manejar su respuesta.