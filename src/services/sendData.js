const SERVER = "http://petshelter-api.mtnetcode.com";

/**
 * function which saves new pet to db
 * @param {HTMLFormElement} data - form data to save
 * @returns JSON with message from server
 */
export default async function sendData(data) {
  const res = await fetch(`${SERVER}/api/pets`, {
    method: "POST",
    body: data,
  });
  return res.json();
}
