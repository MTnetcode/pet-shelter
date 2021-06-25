import Cookies from "universal-cookie";
const cookie = new Cookies();
const SERVER = "http://petshelter-api.mtnetcode.com";
export default async function verifyLogin() {
  const token = cookie.get("token");
  return !token && false;
  const res = await fetch();
}
