const SERVER = "http://petshelter-api.mtnetcode.com";

export default async function sendData(data) {
  const res = await fetch(`${SERVER}/api/pets`, {
    method: "POST",
    body: data,
  });
  return res.json();
}
