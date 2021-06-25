import { SERVER } from "./serverConst";

/**
 * function to fetch pets from server
 * @param {string} category - should be dogs or cats right now
 * @returns string array with pets from given category
 */
export default async function fetchPets(category) {
  const res = await fetch(`${SERVER}/api/pets/${category}`);
  const data = await res.json();
  return data.err ? ["something went wrong"] : data.foundPets;
}
