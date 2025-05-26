import { useState } from "react"
import type { userSessionType } from "../types/formType"
import fetchData from "../services/fetchData"

const useSession = () => {

  const { startSession } = fetchData()

  const initialState = {
    email: "",
    password: ""
  }
  const [userLogin, setUserLogin] = useState<userSessionType>(initialState)

  const handleClick = (e: any) => {
    setUserLogin({
      ...userLogin,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await startSession(userLogin.email, userLogin.password)
      const user = response[0]
      console.log(user);
    } catch (err) { }

  }

  return { handleClick, userLogin, handleSubmit }
}

export default useSession
