let queryString = location.search;
let params = new URLSearchParams(queryString);
let idEvent = params.get("id");

async function buscarEvento() {
    try {
        let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events";
        let fetchResponse = await fetch(urlApi);
        let response = await fetchResponse.json();
        let arrayEventos = response.events;

        let evento = arrayEventos.find(evento => evento.id === idEvent)
        nuevaCard(evento)
    } catch (error) {
        console.log(error);
    }
}

function nuevaCard(evento) {
    let fechaOk = new Date(evento.date);
    fechaOk = fechaOk.toLocaleDateString();

    let card = `
    <div class="card h-100">
      <img src="${evento.image}" class="card-img-top img-fit" alt="...">
      <div class="card-body">
        <h4 class="card-title">${evento.name}</h4>
        <p class="card-text">${evento.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Category: ${evento.category}</li>
        <li class="list-group-item">Price: ${evento.price}$</li>
        <li class="list-group-item">Date: ${evento.date}</li>
        <li class="list-group-item text-end"><a class="btn btn-outline-primary" href="./detail.html?id=${evento._id}">See more</a></li>
      </ul>
      </div>
  `;
    document.getElementById("card").innerHTML = card;
}

buscarEvento();

