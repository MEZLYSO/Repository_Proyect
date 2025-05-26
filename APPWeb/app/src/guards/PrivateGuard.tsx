import { Navigate, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function PrivateGuard() {
  const token = localStorage.getItem("user")
  return token ? (<>
    <Outlet />
    <Navbar />
  </>
  ) :
    <Navigate replace to="/" />
}

export default PrivateGuard
