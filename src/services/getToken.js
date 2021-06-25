import Cookies from "universal-cookie";
const cookie = new Cookies();

export default function getToken() {
  const token = cookie.get("token");
  if (token) {
    return token;
  } else {
    return undefined;
  }
}
