import { Navigate, Outlet } from "react-router-dom"
import { PrivatePages } from "../types/pages"

function PublicGuard() {
  const token = localStorage.getItem("user")
  return !token ? (<>
    <Outlet />
  </>
  ) :
    <Navigate replace to={PrivatePages.DASHBOARD} />
}

export default PublicGuard
