import { Navigate, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { PublicPages } from "../types/pages"

function PrivateGuard() {
  const token = localStorage.getItem("user")
  return token ? (<>
    <Outlet />
    <Navbar />
  </>
  ) :
    <Navigate replace to={PublicPages.HOME} />
}

export default PrivateGuard
