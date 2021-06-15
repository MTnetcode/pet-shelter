const SERVER = "http://petshelter-api.mtnetcode.com";

export default async function login(data) {
  let res = await fetch(`http://localhost:5555/api/auth/login`, {
    method: "POST",
    body: data,
  });
  let msg = await res.json();
  if (msg.err) {
    return msg.err;
  } else {
    return msg.token;
  }
}
