export type RegisterPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export async function registerUserApi(payload: RegisterPayload) {
  const res = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.message || "Registration failed");
  return data; 
}
export function submitLogIn (){
  console.log("login form submitted")
}


