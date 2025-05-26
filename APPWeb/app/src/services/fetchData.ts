import axios from "axios"

const fetchData = () => {

  const baseURL = "http://192.168.232.170:3001/user"

  const startSession = async (email: string, password: string) => {
    return await axios.post(baseURL + "/auth", { email, password })
      .then(response => response.data)
  }

  return { startSession }
}

export default fetchData
