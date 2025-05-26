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
    const exist = localStorage.getItem("user") ? true : false
    setUser(exist ? JSON.parse(localStorage.getItem("user")) : initialState)
  }, [])

  return { user }

}

export default useUser
