export default function RegisterPage() {
  return (
    <section className="wrapper">
      <div className="form-box login">
        <h2>Register</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon"></span>
            <input type="email" required/>
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon"></span>
            <input type="password" required/>
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox"/>Remember me</label>
          </div>
          <button
            className="btn"
            type="submit">
            Login
          </button>
        </form>
      </div>
    </section>
  )
}