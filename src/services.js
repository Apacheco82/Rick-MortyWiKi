export const URL = "https://rickandmortyapi.com/api/"

export const fetchData = async (type, id) => {
    try {
      const response = await fetch(`${URL}/${type}/${id}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.error("Error fetching data: ", error)
      //actualizar el estado de tu componente para manejar el error
    }
  }

  export const fetchHome = async (pageNumber,search, status, gender, species )=>{
    try {
        const response = await fetch(`${URL}/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching data: ", error)
    }
  }