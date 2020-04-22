// para poder crear las instancias a un llamado a una api desde js
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://rickandmortyapi.com/api/character/'

function fetchData (urlApi, callback) {
  // generrar la referencia al objeto httprequest
  const xhttp = new XMLHttpRequest()
  // hacer el llamado a la url activando el asincronismo x,x,true
  xhttp.open('GET', urlApi, true)
  // Escuchar lo que la conexion va a hacer
  xhttp.onreadystatechange = (event) => {
    // cuando el camio suceda...hacer la validacion para ejecutar el callback
    if (xhttp.readyState === 4) {
      // completar el flujo o proceso cuando el status sea 200
      if (xhttp.status === 200) {
        // en este punto el callback ya puede ser regresado
        // node mantiene como standar, el recibir como primer
        // parametro de un callback, el error, mientras que el segundo
        // parametro corresponde a la información que se desencadena
        // (el resultado del llamado a la api)
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error(`Error ${urlApi}`)
        return callback(error, null)
      }
    }
  }
  xhttp.send()
}

// EL siguiente, es un ejemplo de anidación de callbacks para realizar las peticiones (esta práctica debe ser evitada -> el uso de los callbacks hell)
fetchData(API, (error1, data1) => {
  if (error1) {
    console.log('Error en la petición 1(Get personajes): ', error1)
    return
  }
  fetchData(API + data1.results[0].id, (error2, data2) => {
    if (error2) {
      console.log('Error en la petición 2:(Get personaje1.id)', error2)
      return
    }
    fetchData(data2.origin.url, (error3, data3) => {
      if (error3) {
        console.log('Error en la petición 3: ', error3)
        return
      }
      console.log('Personajes: ', data1.info.count)
      console.log('Personaje(1): ', data2.name)
      console.log('Personaje(1).dimension: ', data3.dimension)
    })
  })
})
