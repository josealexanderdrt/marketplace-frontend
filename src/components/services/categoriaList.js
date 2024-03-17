// Reemplazar por la URL de la API
const URL_API = "https://thronesapi.com/api/v2/Characters";


export const categoriaList = async () => {
  const response = await fetch(URL_API, {
    method: "GET",
    headers: {
       //"Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

// Se encarca de llamar a la api y manejar su respuesta.