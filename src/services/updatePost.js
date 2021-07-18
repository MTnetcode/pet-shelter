import getToken from "./getToken";
import { SERVER } from "./serverConst";

export default async function updatePost(formData) {
  const token = getToken();
  if (token) {
    const headers = new Headers();
    headers.append("Authorization", `Token ${token}`);
    const res = await fetch(`${SERVER}/api/pets`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(formData),
    });
    const data = res.json();
    return data.data ? true : false;
  } else {
    return false;
  }
}
