import { Link } from "react-router-dom"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser"

function Navbar() {
  return (
    <nav
      className="fixed bottom-0 w-full">
      <div className="bg-white flex justify-center items-center gap-4 h-15">
        <Link
          to="/dashboard">
          <FontAwesomeIcon icon={faHome} size="xl" />
        </Link>
        <Link
          to="/profile">
          <FontAwesomeIcon icon={faUser} size="xl" />
        </Link>

      </div>
    </nav>
  )
}

export default Navbar
