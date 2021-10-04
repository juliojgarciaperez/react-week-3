import { Link, useHistory } from "react-router-dom"
import { login } from "../services/EpisodesService"

function Login(props) {
  const { replace } = useHistory()

  function onSubmit(event) {
    event.preventDefault()

    login(event.target.username.value, event.target.password.value)
      .then(() => {
        replace("/")
      })
  }

  return (
    <div className="Login">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input name="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>

        <div className="mb-3">
          <Link to="/signup">Sign Up</Link>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login
