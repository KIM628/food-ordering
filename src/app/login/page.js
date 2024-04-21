import Mail from "@/components/icons/Mail";
import Lock from "@/components/icons/lock";

export default function LoginPage() {
  return (
    <section className="wrapper mt-8 max-w-xs mx-auto">
      <div className="form-box login">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <Mail/>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <Lock/>
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
          </div>
          <button
            className="btn mt-20 flex gap-4 justify-center py-2"
            type="submit">
            Login
          </button>
        </form>
      </div>
    </section>
  )
}