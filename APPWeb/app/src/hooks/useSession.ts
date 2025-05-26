import { useState } from "react"
import type { userSessionType } from "../types/formType"
import fetchData from "../services/fetchData"
import { useNavigate } from "react-router-dom"
import { PrivatePages } from "../types/pages"

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

  const navigate = useNavigate()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await startSession(userLogin.email, userLogin.password)
      localStorage.setItem("user", JSON.stringify(response.data[0]))
      navigate(PrivatePages.DASHBOARD, { replace: true })
    } catch (err) { }

  }

  return { handleClick, handleSubmit }
}

export default useSession
