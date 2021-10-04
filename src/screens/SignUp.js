function SignUp() {
  function onSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="SignUp">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="bio">Bio</label>
          <input type="text" className="form-control" id="bio" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
