document.addEventListener("DOMContentLoaded", () => {
    // Obtener el dato almacenado en localStorage
    const dato = localStorage.getItem("dato");
  
    if (dato) {
      document.getElementById("data").textContent = dato;
    } else {
      document.getElementById("data").textContent = "No hay datos ";
    }
  });
  