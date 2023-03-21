
async function filtrar() {
  try {
      let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events";
      let fetchResponse = await fetch(urlApi);
      let response = await fetchResponse.json();
      let arrayEventos = response.events;

      let inputText = document.getElementById("search-input").value.trim();
      let checks = Array.from(document.querySelectorAll(".categoria:checked")).map(check => check.value);

      let eventosFiltrados = arrayEventos.filter(evento => {
          return (evento.name.toLowerCase().includes(inputText.toLowerCase()) && (checks.length === 0 || checks.includes(evento.category)))
      })
      console.log(eventosFiltrados);

      renderCards(eventosFiltrados, inputText);
  } catch (error) {
      console.log(error);
  }
}

filtrar();
