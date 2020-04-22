const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

/*
1. PRIMER PETICIÓN: traer el "count" de los personajes
2. SEGUNDA PETICIÓN: traer el llamado del primer elemnto hacia el nomre del personaje
3. TERCER PETICIÓN: del resultante del personaje, traer la dimensión para obtener el nombre de la misma
*/

fetchData(API)
  .then((result) => {
    console.log('resultado 1: ', result.info.count) // Output -> "count" de los personajes -> 493
    // ***console.log('resultado 1: ', result.results[0].origin.url)
    // Retornar un nuevo llamado para trer un personaje
    const resultNameUrl = fetchData(`${API}${result.results[0].id}`)
    console.log(typeof (resultNameUrl))
    return resultNameUrl
  })
  .then((result) => { // Responde a la petición en "resultName"
    // console.log('Info del personaje 1: ', result)
    console.log('Nombre del personaje 1: ', result.name)
    // Retornar un nuevo llamado para trer la dimensión del personaje
    const resultDimensionUrl = fetchData(result.origin.url)
    console.log(typeof (resultDimensionUrl))
    return resultDimensionUrl
  })
  .then((result) => {
    // Imprimiendo la dimensiondel personaje
    console.log(result.dimension)
  })
  .catch((err) => {
    console.log('Error en la petición: ', err)
  })
