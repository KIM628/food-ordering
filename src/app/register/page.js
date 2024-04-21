'use client';
import Mail from "@/components/icons/Mail";
import Lock from "@/components/icons/lock";
import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);


  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    setCreatingUser(false);
  }

  return (
    <section className="wrapper mt-8 max-w-xs mx-auto">
      <div className="form-box login">
        <h2>Register</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="input-box">
            <span className="icon">
              <Mail />
            </span>
            <input
              type="email" required
              value={email}
              onChange={ev => setEmail(ev.target.value)}
              disabled={creatingUser}
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <Lock />
            </span>
            <input
              type="password" required
              value={password}
              onChange={ev => setPassword(ev.target.value)}
              disabled={creatingUser}
            />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
          </div>
          <button
            className="btn py-1"
            type="submit"
            disabled={creatingUser}
          >
            Register
          </button>
          <div className="my-4 text-center text-biege">
            or login with provider
          </div>
          <button className="btn mt-3 flex gap-4 justify-center py-2" type="submit">
            <Image src={'/assets/img/google.png'} alt={"login"} width={24} height={24} />
            Login with Google
          </button>
        </form>
      </div>
    </section>
  );
}