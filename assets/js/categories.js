async function printCategories() {
    let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events";
    let fetchResponse = await fetch(urlApi);
    let response = await fetchResponse.json();
    let arrayEventos = response.events;

    let categories = [];
    for (let evento of arrayEventos) {
        if (!categories.includes(evento.category)) {
            categories.push(evento.category);
        }
    }

    let htmlCategories = [];
    let htmlCat;
    for (let category of categories) {
        htmlCat = `<div>
                        <input class="categoria" onclick="filtrar()" type="checkbox" id="${category}" value="${category}">
                        <label for="${category}">${category}</label>
                    </div>`
        htmlCategories.push(htmlCat);
    }
    document.getElementById("categories").innerHTML = htmlCategories.join("");
}

printCategories();