import verifyLogin from "./verifyLogin";
import getToken from "./getToken";
import { SERVER } from "./serverConst";

export default async function deletePost(id) {
  const token = getToken();
  if (token !== undefined) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Token ${token}`);
    const res = await fetch(`${SERVER}/api/pets/${id}`, {
      method: "DELETE",
      headers: headers,
    });
  } else {
    return false;
  }
}
