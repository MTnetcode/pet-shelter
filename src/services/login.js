import Cookies from "universal-cookie";
import { SERVER } from "./serverConst";

export default async function login(data) {
  let res = await fetch(`${SERVER}/api/auth/login`, {
    method: "POST",

    body: data,
  });
  let msg = await res.json();
  if (msg.err) {
    return false;
  } else {
    const cookie = new Cookies();
    cookie.set("token", msg.token, { path: "/" });
    return true;
  }
}
