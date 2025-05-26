import { useNavigate } from "react-router-dom"
import useUser from "../hooks/useUser"

function Profile() {

  const { user } = useUser()

  const navigate = useNavigate()

  const deleteToken = () => {
    localStorage.removeItem("user")
    navigate("/", { replace: true })
  }

  return (
    <div className="h-dvh bg-black">
      <h1 className="ml-2 pt-2 font-bold text-3xl text-white">Profile</h1>
      <div className="flex flex-col justify-center px-10 gap-2">
        <div
          className="shadow-sm shadow-black p-5 rounded-2xl bg-white"
        >
          <p>{user.name}</p>
          <p>{user.surname1}</p>
          <p>{user.surname2}</p>
          <p>{user.email}</p>
        </div>
        <button
          onClick={deleteToken}
          className="bg-red-500 text-white rounded-4xl">
          Close Session
        </button>


      </div>
    </div>
  )
}

export default Profile
