export default async function fetchPets(category) {
  const res = await fetch(`http://localhost:5555/api/pets/${category}`);
  const data = await res.json();
  return data.err ? ["something went wrong"] : data.foundPets;
}
