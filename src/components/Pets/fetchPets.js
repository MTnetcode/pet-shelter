export default async function fetchPets(category) {
  const res = fetch(`http://localhost:5555/${category}`);
  const data = await res.json();
  if (data.err) {
    return ["something went wrong"];
  } else {
    return data.foundPets;
  }
}
