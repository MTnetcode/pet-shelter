import Cookies from "universal-cookie";
const cookie = new Cookies();
const SERVER = "http://petshelter-api.mtnetcode.com";
const token = cookie.get("token");
/**
 * function to verify user's token
 * @returns true if token is valid
 */
export default async function verifyLogin() {
  if (token !== undefined) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Token ${token}`);
    const res = await fetch(`${SERVER}/api/auth/verify`, {
      method: "POST",
      headers: headers,
    });
    const data = res.json();
    if (data.err) {
      return false;
    }
    return true;
  } else {
    return false;
  }
}
