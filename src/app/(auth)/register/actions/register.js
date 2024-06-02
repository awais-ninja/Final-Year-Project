const register = async (formData) => {
  "use server";

  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const req = await fetch(`http://localhost:8080/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await req.json();

  console.log(res);
};
export default register;
