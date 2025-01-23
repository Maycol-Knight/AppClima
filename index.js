// window.addEventListener('load',()=>{
//     let lon;
//     let lat;

//     let temperaturaValor = document.getElementById('temperatura-valor');
//     let temperaturaDescripcion = document.getElementById('temperatura-descripcion');

//     let ubicacion = document.getElementById('ubicacion');
//     let iconoAnimado = document.getElementById('icono-animado');

//     let vientoVelocidad = document.getElementById('viento-velocidad');
    
    
//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(posicion => {           
//            //console.log(posicion.coords.latitude)
//            lon = posicion.coords.longitude;
//            lat = posicion.coords.latitude;
           
//            //ubicacion actual
//         //    const url ="https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=5114e4f91f159a5ef014a2b969e458a8"

//            //NO lee el latitud y longitud **VERIFICAR** 
//         const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5114e4f91f159a5ef014a2b969e458a8`;
//         // console.log(url);

//            // ubicacion por ciudad
//         //    const url ="https://api.openweathermap.org/data/2.5/weather?q=Lima&lang=es&units=metric&appid=5114e4f91f159a5ef014a2b969e458a8";


//           // console.log(url)
          
//            fetch(url)
//            .then (Response =>{ return Response.json()})
//            .then ( data =>{ 
//                 //  console.log(data.main.temp);
//                  let temp = Math.round(data.main.temp);
//                  temperaturaValor.textContent = temp +"  °C";
                 
//                  let desc = (data.weather[0].description);
//                  temperaturaDescripcion.textContent = desc.toUpperCase();

//                  ubicacion.textContent = data.name;

//                  vientoVelocidad.textContent = data.wind.speed +"  m/s";
//                 //  console.log(data.wind.speed);

//                  //para iconos animados
                
//                 //  console.log(data.weather[0].main);
//                  switch (data.weather[0].main){                 
//                     case "Thunderstorm":
//                         iconoAnimado.src ="resources/animated/thunder.svg";
//                         console.log("Tormenta");
//                         break;
//                     case"Drizzle":
//                         iconoAnimado.src ="resources/animated/rainy-2.svg";
//                         console.log("Llovizna");
//                         break;
//                     case"Rain":
//                         iconoAnimado.src ="resources/animated/rainy-7.svg";
//                         console.log("Luvia");
//                         break;
//                     case"Snow":
//                         iconoAnimado.src ="resources/animated/snowy-6.svg";
//                         console.log("Nieve");
//                         break;
//                     case"Clear":
//                         iconoAnimado.src ="resources/animated/day.svg";
//                         console.log("Limpio");
//                         break;
//                     case"Atmosphere":
//                         iconoAnimado.src ="resources/animated/weather.svg";
//                         console.log("Atmosfera");
//                         break;
//                     case"Clouds":
//                         iconoAnimado.src ="resources/animated/cloudy-day-1.svg";
//                         // console.log("Nubes");
//                         break;
//                     default:
//                         iconoAnimado.src= "resources/animated/cloudy-day-1.svg";
//                         console.log('por defecto');
//                  } 

//            })
//            .catch( error =>{
//                 console.log(error);
//            }) 
//         })
//     }
// })
let lon;
let lat;

let temperaturaValor = document.getElementById('temperatura-valor');
let temperaturaDescripcion = document.getElementById('temperatura-descripcion');

let ubicacion = document.getElementById('ubicacion');
let iconoAnimado = document.getElementById('icono-animado');

let vientoVelocidad = document.getElementById('viento-velocidad');
let botonUbicacion = document.querySelector('#myButton');
console.log(botonUbicacion);

botonUbicacion.addEventListener('click', function() {
    // console.log("boton clickeado");
        
    if(navigator.geolocation) {
        console.log(navigator.geolocation);

        navigator.geolocation.getCurrentPosition(posicion => {           
           //console.log(posicion.coords.latitude)
           lon = posicion.coords.longitude;
           lat = posicion.coords.latitude;
           
           //ubicacion actual
        //    const url ="https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=5114e4f91f159a5ef014a2b969e458a8"

           //NO lee el latitud y longitud **VERIFICAR** 
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5114e4f91f159a5ef014a2b969e458a8`;
        console.log(url);

           // ubicacion por ciudad
        //    const url ="https://api.openweathermap.org/data/2.5/weather?q=Lima&lang=es&units=metric&appid=5114e4f91f159a5ef014a2b969e458a8";


          // console.log(url)
          
           fetch(url)
           .then (Response =>{ return Response.json()})
           .then ( data =>{ 
                //  console.log(data.main.temp);
                 let temp = Math.round(data.main.temp);
                 temperaturaValor.textContent = temp +"  °C";
                 
                 let desc = (data.weather[0].description);
                 temperaturaDescripcion.textContent = desc.toUpperCase();

                 ubicacion.textContent = data.name;

                 vientoVelocidad.textContent = data.wind.speed +"  m/s";
                //  console.log(data.wind.speed);

                 //para iconos animados
                
                //  console.log(data.weather[0].main);
                 switch (data.weather[0].main){                 
                    case "Thunderstorm":
                        iconoAnimado.src ="resources/animated/thunder.svg";
                        console.log("Tormenta");
                        break;
                    case"Drizzle":
                        iconoAnimado.src ="resources/animated/rainy-2.svg";
                        console.log("Llovizna");
                        break;
                    case"Rain":
                        iconoAnimado.src ="resources/animated/rainy-7.svg";
                        console.log("Luvia");
                        break;
                    case"Snow":
                        iconoAnimado.src ="resources/animated/snowy-6.svg";
                        console.log("Nieve");
                        break;
                    case"Clear":
                        iconoAnimado.src ="resources/animated/day.svg";
                        console.log("Limpio");
                        break;
                    case"Atmosphere":
                        iconoAnimado.src ="resources/animated/weather.svg";
                        console.log("Atmosfera");
                        break;
                    case"Clouds":
                        iconoAnimado.src ="resources/animated/cloudy-day-1.svg";
                        // console.log("Nubes");
                        break;
                    default:
                        iconoAnimado.src= "resources/animated/cloudy-day-1.svg";
                        console.log('por defecto');
                 } 

           })
           .catch( error =>{
                console.log(error);
           }) 
        })
    }
});
let buscar = document.querySelector('#buscarButton');
console.log(buscar);
buscar.addEventListener('click', function() {
    console.log("boton buscar clickeado");
    let ciudad = document.querySelector('#ubicacion-input').value;
    console.log(ciudad);
    if (ciudad) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=5114e4f91f159a5ef014a2b969e458a8&units=metric&lang=es`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.getElementById('temperatura-valor').innerText = `${data.main.temp} °C`;
                document.getElementById('temperatura-descripcion').innerText = data.weather[0].description;
                document.getElementById('ubicacion').innerText = data.name;
                document.getElementById('viento-velocidad').innerText = `${data.wind.speed} m/s`;
                document.getElementById('icono-animado').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            })
            .catch(error => {
                console.error('Error al obtener el clima:', error);
                alert('No se pudo obtener el clima para la ubicación ingresada.');
            });
    } else {
        alert('Por favor, ingresa una ciudad.');
    }
});