import getToken from "./getToken";
import { SERVER } from "./serverConst";

export default async function updateData(data) {
  const token = getToken();
  if (token) {
    const headers = new Headers();
    headers.append("Authorization", `Token ${token}`);
    const res = await fetch(`${SERVER}/api/pets`, {
      method: "PATCH",
      headers: headers,
      body: data,
    });
    const data = res.json();
    return data.data ? data : data.err;
  }
}
