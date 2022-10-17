import { Link } from "react-router-dom"
import "./Navigation.css"

const Navigation = ({ children }) => {
  return (
    <>
      <nav className="navigation-style">
        <Link to={"/"}>Home</Link>
        <Link to={"/create-user"}>Create User</Link>
      </nav>
      {children}
    </>
  )
}
export default Navigation
