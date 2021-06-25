import Cookies from "universal-cookie";
const SERVER = "http://petshelter-api.mtnetcode.com";
const cookie = new Cookies();
/**
 * function which saves new pet to db
 * @param {HTMLFormElement} data - form data to save
 * @returns JSON with message from server
 */
export default async function sendData(data) {
  const token = cookie.get("token");
  if (token) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Token ${token}`);
    const res = await fetch(`${SERVER}/api/pets`, {
      method: "POST",
      headers: headers,
      body: data,
    });
    return res.json();
  } else {
    return false;
  }
}
