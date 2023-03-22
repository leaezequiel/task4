async function printCategories() {
    let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events";
    let fetchResponse = await fetch(urlApi);
    let response = await fetchResponse.json();
    let arrayEventos = response.events;

    let categorias = [];
    for (let evento of arrayEventos) {
        if (!categorias.includes(evento.category)) {
            categorias.push(evento.category);
        }
    }

    let categoriasHTML = [];
    let htmlCat;
    for (let category of categorias) {
        htmlCat = `<div>
                        <input class="categoria" onclick="filtrar()" type="checkbox" id="${category}" value="${category}">
                        <label for="${category}">${category}</label>
                    </div>`
        categoriasHTML.push(htmlCat);
    }
    document.getElementById("categories").innerHTML = categoriasHTML.join("");
}

printCategories();