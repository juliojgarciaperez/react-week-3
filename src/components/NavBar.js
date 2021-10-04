import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <Link className="navbar-brand" to="/">Week 3</Link>
        </span>
      </div>
    </nav>
  )
}

export default NavBar