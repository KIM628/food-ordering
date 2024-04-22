'use client';
import { useState } from "react";
import Mail from "@/components/icons/Mail";
import Lock from "@/components/icons/lock";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress , setLoginInprogress] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInprogress(true);
    await signIn('credentials', { email, password, callbackUrl: "/" });
    setLoginInprogress(false);
  }

  return (
    <section className="wrapper mt-8 max-w-xs mx-auto">
      <div className="form-box login">
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="input-box">
            <span className="icon">
              <Mail />
            </span>
            <input
              type="email" required
              value={email}
              onChange={ev => setEmail(ev.target.value)}
              disabled={loginInProgress} />
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
              disabled={loginInProgress} />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>
          <button
            className="btn flex gap-4 justify-center py-2"
            type="submit"
            disabled={loginInProgress} >
            Login
          </button>
          <div className="my-4 text-center text-biege">
            or login with provider
          </div>
          <button
            onClick={() => signIn('google',{callbackUrl:'/'})}
            className="btn mt-3 flex gap-4 justify-center py-2" type="button">
            <Image src={'/assets/img/google.png'} alt={"login"} width={24} height={24} />
            Login with Google
          </button>
          <div className="text-brown text-center my-7">
            Existing account ? {' '}
            <Link className="underline text-org"
              href={'/login'}>
              Login here &raquo;
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}