import { Link } from "react-router-dom"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser"
import { useState } from "react"
import { PrivatePages } from "../types/pages"

function Navbar() {

  const [activeItem, setActiveItem] = useState("")


  return (
    <nav
      className="fixed bottom-0 w-full py-5 px-22">
      <div className="bg-white flex justify-evenly items-center gap-2 h-15 rounded-4xl border-2 border-black">
        <Link
          onClick={() => setActiveItem(`home`)}
          className={`${activeItem === `home` ? `bg-black text-white` : `text-black`} rounded-4xl px-4 py-2 transition-all flex`}
          to={PrivatePages.DASHBOARD}>
          <FontAwesomeIcon icon={faHome} size="xl" /> <p className="hidden ml-2 md:flex">Home</p>
        </Link>
        <Link
          onClick={() => setActiveItem(`profile`)}
          className={`${activeItem === `profile` ? `bg-black text-white` : `text-black`} rounded-4xl px-5 py-2 transition-all flex`}
          to={PrivatePages.PROFILE}>
          <FontAwesomeIcon icon={faUser} size="xl" /> <p className="hidden ml-2 md:flex">Profie</p>
        </Link>

      </div>
    </nav>
  )
}

export default Navbar
