
function renderCards(eventosFiltrados, inputText) {
  if (eventosFiltrados.length > 0) { 
      let cards = [];
      let card;
      for (let evento of eventosFiltrados) {
          card = `
          <div class="card h-100">
            <img src="${evento.image}" class="card-img-top img-fit" alt="...">
            <div class="card-body">
              <h4 class="card-title">${evento.name}</h4>
              <p class="card-text">${evento.description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Category: ${evento.category}</li>
              <li class="list-group-item">Price: ${evento.price}$</li>
              <li class="list-group-item text-end"><a class="btn btn-outline-primary" href="./detail.html?id=${evento._id}">See more</a></li>
            </ul>
            </div>
        `;
          cards.push(card);
      }
      document.getElementById("cardContainer").innerHTML = cards.join("");
  } else {    
      document.getElementById("cardContainer").innerHTML = 
      `
      <div class="card m-2 card-box">
      <div class="card-body d-flex flex-column align-items-center">
          <h3 class="card-title d-flex flex-column align-items-center justify-center">We didn't find anything realted to"${inputText}"</h3>
      </div>
    </div>`;
  }
}


