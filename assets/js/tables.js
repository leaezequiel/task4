async function tabla1() {
    //pasados
    let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events?time=past";
    let fetchResponse = await fetch(urlApi);
    let response = await fetchResponse.json();
    let arrayEventos = response.events;

    //asistencia
    arrayEventos = arrayEventos.sort((e1, e2) => e1.assistance - e2.assistance)
    document.getElementById("maxAtt").innerHTML = arrayEventos[arrayEventos.length-1].name;
    document.getElementById("maxAttValue").innerHTML = arrayEventos[arrayEventos.length-1].assistance;
    document.getElementById("minAtt").innerHTML = arrayEventos[0].name;
    document.getElementById("minAttValue").innerHTML = arrayEventos[0].assistance;
    
    //capacidades
    arrayEventos = arrayEventos.sort((e1, e2) => e1.capacity - e2.capacity)

    document.getElementById("maxCap").innerHTML = arrayEventos[arrayEventos.length-1].name;
    document.getElementById("maxCapValue").innerHTML = arrayEventos[arrayEventos.length-1].capacity;
}

async function tabla2() {
    //futuros
    let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events?time=upcoming";
    let fetchResponse = await fetch(urlApi);
    let response = await fetchResponse.json();
    let arrayEventos = response.events;
    
    //agrupo categorias
    let categories = [];
    for (let evento of arrayEventos) {
        if (!categories.includes(evento.category)) {
            categories.push(evento.category);
        }
    }

    for (let evento of arrayEventos) {
        evento.ganancia = evento.estimate * evento.price;
    }
   

    let rows = [];
    
    for (let category of categories) {
        let ganancia = 0;
        let assist_total = 0;
        let cap_total = 0;

        eventosFiltradosCategorias = arrayEventos.filter(evento => evento.category === category)

        eventosFiltradosCategorias.forEach(evento => {
            ganancia += evento.ganancia;
            assist_total += evento.estimate;
            cap_total += evento.capacity;
        })


        //asistencia
        let porcentaje = assist_total / cap_total * 100;
        porcentaje = porcentaje.toFixed(2);

        //imrpimo
        let row = `<tr>
                    <td>${category}</td>
                    <td>$${ganancia}</td>
                    <td>${porcentaje}%</td>
                    </tr>`;
        rows.push(row);
        }
    document.getElementById("tabla2").innerHTML += rows.join("");
}

async function tabla3() {

    let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events?time=past";
    let fetchResponse = await fetch(urlApi);
    let response = await fetchResponse.json();
    let arrayEventos = response.events;

    let categories = [];
    for (let evento of arrayEventos) {
        if (!categories.includes(evento.category)) {
            categories.push(evento.category);
        }
    }

    for (let evento of arrayEventos) {
        evento.ganancia = evento.assistance * evento.price;
    }


    
    let rows = [];
    for (let category of categories) {

        let ganancia = 0;
        let assist_total = 0;
        let cap_total = 0;

        eventosFiltradosCategoria = arrayEventos.filter(evento => evento.category === category)

        eventosFiltradosCategoria.forEach(evento => {
            ganancia += evento.ganancia;
            assist_total += evento.assistance;

            cap_total += evento.capacity;
        })
        
        let porcentajeAsist = assist_total / cap_total * 100;
        porcentajeAsist = porcentajeAsist.toFixed(2);

        let row = `<tr>
                    <td>${category}</td>
                    <td>$${ganancia}</td>
                    <td>${porcentajeAsist}%</td>
                    </tr>`;
        rows.push(row);
    }
    document.getElementById("tabla3").innerHTML += rows.join("");
}

tabla1();
tabla2();
tabla3();

