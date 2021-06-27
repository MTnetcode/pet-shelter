import verifyLogin from "./verifyLogin";
import getToken from "./getToken";
import { SERVER } from "./serverConst";

/**
 *
 * @param {string} id
 * @returns true if post was successfully deleted
 * @summary delete post from database based on given id
 */
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
    return true;
  } else {
    return false;
  }
}
