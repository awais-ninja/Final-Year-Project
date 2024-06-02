"use client";

import Link from "next/link";
import login from "./actions/login";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("idle");

  const submit = async (e) => {
    e.preventDefault();
    try {
      document.cookie = `authorization=''; max-age=0`;
      document.cookie = `token=''; max-age=0`;
      setState("loading");
      const req = await login({ username, password });
      setData(req);
      setState("success");
      console.log(req);
      document.cookie = `authorization=${
        req.user.user.accessToken
      };path=/;max-age=${60};`;
      document.cookie = `token=${req.user.user.refreshToken};path=/;max-age=${
        60 * 60 * 24 * 30
      };`;
      router.push("/dashboard", "replace");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form className="w-full" onSubmit={submit}>
      <h2 className="text-4xl text-center font-bold mb-12">Login</h2>
      <div className="mb-3">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="john.doe"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-slate-900 shadow-sm"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-slate-900 shadow-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 space-x-2 text-nowrap">
        <button
          type="submit"
          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        >
          {state === "loading" ? "Loading..." : "Login"}
        </button>
        <Link
          href="/register"
          className={`inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 text-center`}
        >
          Not a Member? Register
        </Link>
      </div>
    </form>
  );
};
export default LoginPage;
