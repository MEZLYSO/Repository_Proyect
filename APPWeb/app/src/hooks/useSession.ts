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

  const handleSubmit = (e: any) => {
    e.preventDefault()
    startSession(userLogin.email)
    console.log(userLogin)
  }

  return { handleClick, userLogin, handleSubmit }
}

export default useSession
