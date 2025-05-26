import { useEffect, useState } from "react"
import type { userDataType } from "../types/userDataType"

const useUser = () => {

  const initialState = {
    id_user: 0,
    name: "",
    surname1: "",
    surname2: "",
    age: "",
    email: "",
    password: ""
  }

  const [user, setUser] = useState<userDataType>(initialState)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    setUser(userData ? JSON.parse(userData) : initialState)
  }, [])

  return { user }

}

export default useUser
