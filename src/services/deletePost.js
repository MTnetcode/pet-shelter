import getToken from "./getToken";
import { SERVER } from "./serverConst";

/**
 *
 * @param {string} id
 * @returns true if post was successfully deleted
 * @summary delete post from database based on given id
 */
export default async function deletePost(id, where) {
  const token = getToken();
  if (token !== undefined) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Token ${token}`);
    await fetch(`${SERVER}/api/${where}/${id}`, {
      method: "DELETE",
      headers: headers,
    });
    return true;
  } else {
    return false;
  }
}
