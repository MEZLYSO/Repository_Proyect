import { useNavigate } from "react-router-dom"
import useUser from "../hooks/useUser"
import { PublicPages } from "../types/pages"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket"

function Profile() {

  const { user } = useUser()

  const navigate = useNavigate()

  const deleteToken = () => {
    localStorage.removeItem("user")
    navigate(PublicPages.HOME, { replace: true })
  }

  return (
    <div className="h-dvh bg-black text-white">
      <h1 className="ml-2 pt-2 font-bold text-3xl">Profile</h1>
      <div className="flex flex-col justify-center px-5 mt-5 gap-4">
        <div
          className="p-5 rounded-2xl bg-white text-black"
        >
          <p>{user.name}</p>
          <p>{user.surname1}</p>
          <p>{user.surname2}</p>
          <p>{user.email}</p>
        </div>
        <button
          onClick={deleteToken}
          className="bg-red-500 text-white rounded-4xl mx-10 font-bold py-4">
          Close Session <FontAwesomeIcon icon={faRightFromBracket} />
        </button>


      </div>
    </div>
  )
}

export default Profile
