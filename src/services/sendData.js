import getToken from "./getToken";
import { SERVER } from "./serverConst";

/**
 * function which saves new pet to db
 * @param {HTMLFormElement} data - form data to save
 * @returns JSON with message from server
 */
export default async function sendData(data, category) {
  const token = getToken();
  if (token) {
    const headers = new Headers();
    headers.append("Authorization", `Token ${token}`);
    switch (category) {
      case "pets": {
        const res = await fetch(`${SERVER}/api/pets`, {
          method: "POST",
          headers: headers,
          body: data,
        });
        return res.json();
      }
      case "news": {
        const res = await fetch(`${SERVER}/api/news`, {
          method: "POST",
          headers: headers,
          body: data,
        });
        return res.json();
      }
      default: {
        return false;
      }
    }
  } else {
    return false;
  }
}
