
const axios = require('axios');
let unirest  = require ( 'unirest' ) ;
let colors = require('colors');

const  argv = require('yargs').options({
    direccion: {
        alias:'d',
        desc:'direccion donde deseas obtener el clima',
        demand: true
    }
}).help().argv;

console.log();



 const getWeather = (pais) =>{

    let req = unirest.get("https://community-open-weather-map.p.rapidapi.com/forecast");

    req.query({
        "q": encodeURI(pais)
    });
    
    req.headers({
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
	"x-rapidapi-key": "e34d01d0d4msh7a36068202545b7p146d1bjsn6ea4c479a7cf"
    });

    req.end( (responde )=>{
        let data =  responde.body.list;
        console.log(colors.green('El clima estara en : ') ,colors.cyan(data[0].weather[0].main) );
        console.log(colors.green('Descripcion : ') ,colors.cyan(data[0].weather[0].description) );

        // if (data.length === 0){
        //     console.log('Pais no encontrado');
        // }else{
           
        //     console.log('responde: ', responde.cnt);
        // }

        
    })

 }

 getWeather(argv.direccion);






  
