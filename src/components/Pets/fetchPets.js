export default async function fetchPets(category) {
  const SERVER = "http://petshelter-api.mtnetcode.com";
  const res = await fetch(`${SERVER}/api/pets/${category}`);
  const data = await res.json();
  return data.err ? ["something went wrong"] : data.foundPets;
}