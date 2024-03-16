// Reemplazar por la URL de la API
const URL_API = "https://marketplace-backend-vex0.onrender.com/api/v1/products";


export const productsGet = async (token) => {
  
    const response = await fetch(URL_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+ token,
      },
    });
    const data = await response.json();
    return data;
};

// Se encarca de llamar a la api y manejar su respuesta.
