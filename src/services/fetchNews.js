import { SERVER } from "./serverConst";

export default async function fetchNews() {
  const res = await fetch(`${SERVER}/api/news`);
  const data = await res.json();
  if (data.err) {
    return undefined;
  }
  return data.foundNews;
}
