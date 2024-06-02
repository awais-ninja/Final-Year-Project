"use server";
import { cookies } from "next/headers";

const login = async ({ username, password }) => {
  const data = {
    username: username,
    password: password,
  };

  const req = await fetch(`http://localhost:8080/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!req.ok) {
    return { error: "Invalid username or password" };
  }

  const res = await req.json();

  return { user: res };
};

export default login;
