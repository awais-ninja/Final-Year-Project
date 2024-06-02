import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const login = async (formData) => {
  "use server";
  const cookie = cookies();
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const req = await fetch(`http://localhost:8080/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (req.ok) {
    cookies().set("session", req.headers.get("set-cookie"));
  }
  redirect("/");
};
export default login;
