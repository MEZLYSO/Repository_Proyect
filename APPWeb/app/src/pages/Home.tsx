import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function Home() {

  return (
    <div
      className="bg-blue-400 h-dvh flex flex-col justify-center items-center gap-3">
      <h1
        className="text-5xl font-bold text-white">
        Welcome
      </h1>
      <Link
        className="text-white bg-red-500 px-6 py-2 text-xl font-bold rounded-4xl animate-bounce"
        to="/login">
        Get started
        <FontAwesomeIcon
          className="ml-2"
          icon={faArrowRight} />
      </Link>
    </div>
  )
}

export default Home
