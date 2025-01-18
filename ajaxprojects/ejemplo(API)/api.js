document.getElementById('lang').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario recargue la página
    const language = document.getElementById('language').value;

    // Crear una nueva solicitud XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `api.php?name=${language}`, true);

    // Configurar lo que sucede cuando se recibe la respuesta
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        document.getElementById('result').innerHTML = `
          <h2>Resultados:</h2>
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Tipo:</strong> ${data.type}</p>
          <p><strong>Año de lanzamiento:</strong> ${data.released}</p>
        `;
      } else if (xhr.status === 404) {
        document.getElementById('result').innerHTML = `
          <p style="color: red;">Error: Lenguaje no encontrado</p>
        `;
      } else {
        document.getElementById('result').innerHTML = `
          <p style="color: red;">Error: Ocurrió un problema con la solicitud</p>
        `;
      }
    };

    // Manejar errores de red
    xhr.onerror = function () {
      document.getElementById('result').innerHTML = `
        <p style="color: red;">Error: No se pudo conectar con el servidor</p>
      `;
    };

    // Enviar la solicitud
    xhr.send();
  });