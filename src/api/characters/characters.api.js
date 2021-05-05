import axios from "axios"
import { 
  GENDER_OPTION_MALE, 
  GENDER_OPTION_FEMALE 
} from "config"

const envBaseUrl = process.env.REACT_APP_API_URL

export async function fetchCharacters( {gender, page} ) {
  
  const parameters =  (gender !== GENDER_OPTION_MALE) && (gender !== GENDER_OPTION_FEMALE) 
                      ? `?page=${page}` 
                      : `?gender=${gender}&page=${page}`

  const url = `${envBaseUrl}/character${parameters}`

  const response = await axios.get(url)
  const { results, info } = await response.data

  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve({ results, info })
    }, 2000)
  })
  
}
