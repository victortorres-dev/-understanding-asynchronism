const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const consumeApi = async (urlApi) => {
  try { // Espera a que cada petición se resuelva
    const data = await fetchData(urlApi)
    const character = await fetchData(`${API}${data.results[0].id}`)
    const origin = await fetchData(character.origin.url)
    console.log(data.info.count)
    console.log(character.name)
    console.log(origin.dimension)
  } catch (error) {
    console.log(error)
  }
}

console.log('Before')
consumeApi(API)
console.log('After')
