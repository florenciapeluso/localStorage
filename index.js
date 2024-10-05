document.getElementById("buttonText").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
  
    // Guardar el valor en localStorage
    localStorage.setItem("dato", inputText);
  
    // Limpiar el campo de entrada
    document.getElementById("inputText").value = "";
  });
  