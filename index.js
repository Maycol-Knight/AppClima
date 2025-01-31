let temperaturaValor = document.getElementById('temperatura-valor');
let temperaturaDescripcion = document.getElementById('temperatura-descripcion');
let ubicacion = document.getElementById('ubicacion');
let iconoAnimado = document.getElementById('icono-animado');
let vientoVelocidad = document.getElementById('viento-velocidad');
let humedad = document.getElementById('humedad')
let buscar = document.querySelector('#buscarButton');
console.log(buscar);
const apiKey = '5114e4f91f159a5ef014a2b969e458a8';

function elements (data) {
            temperaturaValor.innerText = `${data.main.temp} °C`;
            temperaturaDescripcion.innerText = data.weather[0].description;
            ubicacion.innerText = data.name + ' / ' + data.sys.country;
            vientoVelocidad.innerText = `Viento: ${data.wind.speed} m/s`;
            humedad.innerText = `Humedad: ${data.main.humidity} %`;
}

function icon (data) {
    switch (data.weather[0].main) {                 
        case "Thunderstorm":
            iconoAnimado.src = "resources/animated/thunder.svg";
            console.log("Tormenta");
            break;
        case "Drizzle":
            iconoAnimado.src = "resources/animated/rainy-2.svg";
            console.log("Llovizna");
            break;
        case "Rain":
            iconoAnimado.src = "resources/animated/rainy-7.svg";
            console.log("Lluvia");
            break;
        case "Snow":
            iconoAnimado.src = "resources/animated/snowy-6.svg";
            console.log("Nieve");
            break;
        case "Clear":
            iconoAnimado.src = "resources/animated/day.svg";
            console.log("Despejado");
            break;
        case "Clouds":
            iconoAnimado.src = "resources/animated/cloudy-day-1.svg";
            console.log("Nubes");
            break;
        case "Mist":
            iconoAnimado.src = "resources/animated/cloudy.svg";
            console.log("Niebla");
            break
        case "Smoke":
            iconoAnimado.src = "resources/animated/cloudy.svg";
            console.log("Humo");
            break
        case "Haze":
            iconoAnimado.src = "resources/animated/cloudy.svg";
            console.log("Neblina");
            break
        case "Fog":
            iconoAnimado.src = "resources/animated/cloudy.svg";
            console.log("Niebla");
            break
        case "Squall":
            iconoAnimado.src = "resources/animated/rainy-6.svg";
            console.log("Chubasco Lluvia intensa de corta duración"); 
            break
        case "Tornado":
            iconoAnimado.src = "resources/animated/weather.svg";
            console.log("Tornado");
            break;
        default:
            iconoAnimado.src = "resources/animated/cloudy-day-1.svg";
            console.log('Por defecto');
    };
}
document.addEventListener('DOMContentLoaded', function() {
    const defaultCity = 'Lima';
    const defaultCountryCode = 'PE';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity},${defaultCountryCode}&appid=${apiKey}&units=metric&lang=es`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            elements(data);
            icon(data);
        })
        .catch(error => {
            console.error('Error al obtener el clima:', error);
        });
});

buscar.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("boton buscar clickeado");
    let ciudad = document.querySelector('#ubicacion-input').value;
    let codCiudad = document.querySelector('#countryCode').value;
    console.log(ciudad);
    if (ciudad) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${codCiudad}&appid=${apiKey}&units=metric&lang=es`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                elements(data);
                icon(data);
            })
            .catch(error => {
                console.error('Error al obtener el clima:', error);
                alert('No se pudo obtener el clima para la ubicación ingresada.');
            });
    } else {
        alert('Por favor, ingresa una ciudad.');
    }
});